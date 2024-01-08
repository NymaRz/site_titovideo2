import {Menu} from "@/types/menu";
import User from "@/models/user";

const menuData: Menu[] = [
    {
        id: 1,
        title: "Accueil",
        path: "/",
        newTab: false,
    },
    {
        id: 2,
        title: "Nos réalisations",
        path: "/portfolio",
        newTab: false,
    },
    {
        id: 3,
        title: "Nos articles",
        path: "/articles",
        newTab: false,
    },

    {
        id: 5,
        title: "Nous rejoindre",
        path: "/postuler",
        newTab: false,
    },

    {
        id: 6,
        title: "A propos",
        path: "/propos",
        newTab: false,
    },
    {
        id: 7,
        title: "Gestion",
        path: "/admin/liste_utilisateur",
        newTab: false,
    }
];
export default menuData;
