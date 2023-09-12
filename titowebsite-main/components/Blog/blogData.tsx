import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Les étapes nécessaires pour réaliser une bonne vidéo ",
    paragraph:
      "Lorsqu'il s'agit de réaliser une vidéo de qualité, une bonne organisation est essentielle. De la planification à la post-production, chaque",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Aliou",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Conseil"],
    publishDate: "2023",
    link:"/articles/article1",
  },
  {
    id: 2,
    title: "Les Tendances du Montage Vidéo en 2023 : Ce que votre entreprise doit savoir",
    paragraph:
      "Un bon montage vidéo est un élément clé pour créer des vidéos promotionnelles percutantes et captivantes. Avec l'évolution constante de a technologie et des techniques",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Aliou",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Tendances"],
    publishDate: "2023",
    link:"/articles/article2",
  },
  {
    id: 3,
    title: "L'importance de la communication efficace entre les clients et les freelances",
    paragraph:
      "Lorsqu'il s'agit de réaliser une vidéo de qualité, une bonne organisation est essentielle . De la planification à la post-production, chaque étape joue un rôle crucial",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Aliou",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Conseils"],
    publishDate: "2023",
    link:"/articles/article3",
  },
];
export default blogData;
