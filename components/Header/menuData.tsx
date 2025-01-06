import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "À propos",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Nos réalisations",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Nos Cartes",
        path: "/cards",
        newTab: false,
      },
      {
        id: 22,
        title: "Nos Projets",
        path: "/projects",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
