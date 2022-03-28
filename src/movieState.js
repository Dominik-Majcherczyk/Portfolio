//Import Images
import apollo from "./img/apollo.png";
import brandarea from "./img/brandarea.png";
import brodka from "./img/brodka.png";
import dell from "./img/dell.png";
import fundacja from "./img/fundacja.png";
import innogy from "./img/innogy.png";
import justby from "./img/justby.png";

export const MovieState = () => {
   return [
      {
         title: "BrandArea",
         mainImg: brandarea,
         secondaryImg: brandarea,
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
         secondaryImg: brodka,
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
         secondaryImg: innogy,
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
         secondaryImg: fundacja,
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
         secondaryImg: justby,
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
         secondaryImg: apollo,
         link: "",
         awards: [
            {
               title: "Description",
               description: "The website of the agency responsible for the realization of Pol'and'Rock Festival in cooperation with WOŚP",
            },
            {
               title: "Technologies",
               description: "HTML, CSS, JS",
            },
         ],
      },
   ];
};
