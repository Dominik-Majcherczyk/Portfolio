//Import Images
import apollo from "./img/apollo.png";
import brandarea from "./img/brandarea.png";
import brodka from "./img/brodka.png";
import dell from "./img/dell.png";
import fundacja from "./img/fundacja.png";
import innogy from "./img/innogy.png";
import justby from "./img/justby.png";

import apolloGif from "./img/apollo-gif.gif";
import brandareaGif from "./img/brandarea-gif.gif";
import brodkaGif from "./img/brodka-gif.gif";
import fundacjaGif from "./img/fundacja-gif.gif";
import innogyGif from "./img/innogy-gif.gif";
import justbyGif from "./img/justby-gif.gif";

export const MovieState = () => {
   return [
      {
         title: "BrandArea",
         mainImg: brandarea,
         secondaryImg: brandareaGif,
         url: "/work/brandarea",
         link: "https://brandarea.pl/",
         awards: [
            {
               title: "Description",
               description: "Business landing page website for BrandArea marketing agency",
            },
            {
               title: "Technologies",
               description: "Created using React and Gsap for animations",
            },
         ],
      },
      {
         title: "XPS revolt - DELL x Brodka",
         mainImg: brodka,
         url: "/work/brodka",
         secondaryImg: brodkaGif,
         link: "https://xpsrevolt.pl/",
         awards: [
            {
               title: "Description",
               description: "Website created to promote XPS revolt laptop from DELL",
            },
            {
               title: "Technologies",
               description: "PHP, Laravel, Sass",
            },
         ],
      },
      {
         title: "Innogy",
         mainImg: innogy,
         url: "/work/innogy",
         secondaryImg: innogyGif,
         link: "https://eon.pl/dla-domu",
         awards: [
            {
               title: "Description",
               description: "transferring the old page view to the new components ",
            },
            {
               title: "Technologies",
               description: "Twig, Bolt",
            },
         ],
      },

      {
         title: "TVN Foundation",
         mainImg: fundacja,
         url: "/work/fundacja",
         secondaryImg: fundacjaGif,
         link: "",
         awards: [
            {
               title: "Description",
               description: "New website for TVN Foundation",
            },
            {
               title: "Technologies",
               description: "PHP, Laravel, Sass",
            },
         ],
      },
      {
         title: "Landpages series for DELL",
         mainImg: dell,
         url: "/work/dell",
         secondaryImg: dell,
         link: "",
         awards: [
            {
               title: "Description",
               description: "A series of product pages placed in popular stores such as Xkom, komputronik, Euro.",
            },
            {
               title: "Technologies",
               description: "Pure HTML and CSS, Grunt",
            },
         ],
      },
      {
         title: "JustBy",
         mainImg: justby,
         url: "/work/justby",
         secondaryImg: justbyGif,
         link: "",
         awards: [
            {
               title: "Description",
               description: "A site for finding interesting places in the area and sharing them with others through posts ",
            },
            {
               title: "Technologies",
               description: "Frontend with Sass, Grunt",
            },
         ],
      },
      {
         title: "Apollo 360",
         mainImg: apollo,
         url: "/work/apollo",
         secondaryImg: apolloGif,
         link: "",
         awards: [
            {
               title: "Description",
               description: "The website of the agency responsible for the realization of Pol'and'Rock Festival in cooperation with WO??P",
            },
            {
               title: "Technologies",
               description: "HTML, CSS, JS",
            },
         ],
      },
   ];
};
