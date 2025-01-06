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
    title: "À propos de nous",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Nos réalisations",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Nos Cartes",
        path: "/cards",
        newTab: false,
      },
      {
        id: 42,
        title: "Nos Projets",
        path: "/projects",
        newTab: false,
      },
    ],
  },
];
export default menuData;
