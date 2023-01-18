import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: 'logements',
    title: 'Logements',
    icon: 'bi bi-house',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/about',
    title: 'About',
    icon: 'bi bi-info',
    class: '',
    extralink: false,
    submenu: []
  }
  ,
  {
    path: 'installations',
    title: 'Liste des installations',
    icon: 'bi bi-hammer',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: 'options',
    title: 'Liste des options',
    icon: 'bi bi-option',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: 'criteres',
    title: 'Liste des critères',
    icon: 'bi bi-screwdriver',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: 'safety_items',
    title: 'Liste de safety items',
    icon: 'bi bi-tools',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: 'types_logements',
    title: 'Liste de types de logements',
    icon: 'bi bi-gear',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: 'types_contrats',
    title: 'Liste de types de contrats',
    icon: 'bi bi-journal-text',
    class: '',
    extralink: false,
    submenu: []
  }
];
