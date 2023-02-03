const reservations = require("../models/reservation");
const nodemailer = require("nodemailer");
const pdf = require("pdf-creator-node");
const fs = require("fs");
const ejs = require("ejs");
const logements = require("../models/logement");
const users = require("../models/user");
const QRCode = require("qrcode");
const path = require("path");
const options = {
  format: "A3",
  orientation: "landscape",
  border: "10mm",
};

exports.getReservations = async (req, res) => {
  try {
    const result = await reservations.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.getReservation = async (req, res) => {
  try {
    const reservation = await reservations.findById(req.params.id);
    if (reservation) {
      res.status(200).send(reservation);
    } else {
      res.status(401).send("reservation not found !");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.addReservation = async (req, res) => {
  try {
    const reservation = await reservations.create(req.body);
    const _log = await logements.findById(reservation.logement);
    const _guest = await users.findById(reservation.guest);
    const reserved = {
      reservationRef: reservation._id,
      logement: _log.titre,
      description: _log.description,
      date_debut: reservation.date_debut.toDateString(),
      date_fin: reservation.date_fin.toDateString(),
      guest: _guest.firstName + " " + _guest.lastName,
      nb_invites: reservation.nb_invites,
    };
    // const qrcodeLink = {
    //   qrcodeLink: `https://localhost:4000/qrcodes/${reservation._id}.png`,
    // };
    await QRCode.toFile(
      path.resolve(`./qrcodes/${reservation._id}.png`),
      JSON.stringify(reserved)
    );
    const img_b64="";
    const file = fs.readFileSync(path.resolve(`qrcodes/${reservation._id}.png`))
    let reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const base64String = (reader.result).replace("data:", "").replace(/^.+,/, "");
          img_b64="data:image/jpeg;base64," + base64String.toString();
        };
    const pdf_file = fs.readFileSync("Views/reservation.html", "utf-8");
    const render = ejs.render(pdf_file, {
      reserved: reserved,
      qrcodeLink: img_b64,
    });

    const document = {
      html: render,
      data: {
        users: reserved,
      },
      path: path.resolve(`pdf-files/reservation${reservation._id}.pdf`),
      type: "",
    };
    pdf.create(document, options).then(async (res) => {
        const transporter = nodemailer.createTransport({
          service:'gmail',
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });

        transporter.sendMail({
          from: req.body.email,
          to: process.env.EMAIL,
          subject: "reservation HolidayZ",
          html: ` <h1>HolidayZ</h1>
          <p>Bonjour, ${reserved.guest}</p>
          <p>Vous trouverez ci-joint votre réservation !</p>
          <br />
          <p>Bonne journée.</p>`,
          attachments: [{
            filename: "reservation.pdf",
            content: fs.createReadStream(res.filename),
          }],
        });
      })
      .catch((error) => {
        console.error(error);
      });

    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    await reservations.findByIdAndUpdate(req.params.id, req.body);
    const updatedReservation = await reservations.findById(req.params.id);
    res.status(200).send(updatedReservation);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await reservations.findByIdAndDelete(
      req.params.id
    );
    res.status(200).send(deletedReservation);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};
