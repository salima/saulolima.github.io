// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "salima";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Sou um entusiasta da inteligência artificial e motivado por desafios. Ao longo de minha trajetória profissional de mais de 15 anos de experiência no mercado de tecnologia, tive a oportunidade de ocupar posições operacionais, táticas e estratégicas, além de liderar equipes compostas por mais de 50 profissionais de diversas áreas, especialidades e níveis de senioridade. Acredito que a liderança efetiva envolve a capacidade de inspirar, desenvolver e motivar as pessoas. Com isso, tenho ajudado constantemente equipes a criar e arquitetar produtos inovadores que atendam as expectativas do negócio, bem como os desenvolvedores, em aprimorarem suas habilidades e se tornarem profissionais melhores e mais capacitados.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const postsData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];


// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xleyednz";

export const linkedinData = [
  {
    id: 1,
    image: "https://media.licdn.com/dms/image/D4D12AQH4INNT2JOPmQ/article-cover_image-shrink_423_752/0/1686869761865?e=1694649600&v=beta&t=eMJbwbxAyZB_fjaDSfpbeX3AgNSwGJmiTaCijWdRiac",
    name: "Explorando as Etapas SAST, DAST e IAST na Cultura DevSecOps",
    description: "#devops #devsecops #devopsdays #security #tecnology #developer #negociosdigitais #testedesoftware",
    url: "https://www.linkedin.com/pulse/explorando-etapas-sast-dast-e-iast-na-cultura-devsecops-saulo-lima/"
  },
  {
    id: 2,
    image: "https://media.licdn.com/dms/image/D4D12AQHMIIAnelI5Nw/article-cover_image-shrink_720_1280/0/1686152594825?e=2147483647&v=beta&t=dkeuwNTDmrzcyCNWyCyp1ux7aFGb4EiK6dR--7IShro",
    name: "DevSecOps: Fortalecendo a Segurança no Desenvolvimento de Software",
    description: "#devops #devsecops #devopsdays #security #tecnology #developer #negociosdigitais #testedesoftware",
    url: "https://www.linkedin.com/pulse/devsecops-fortalecendo-seguran%C3%A7a-desenvolvimento-de-software-lima"
  },
  {
    id: 3,
    image: "https://media.licdn.com/dms/image/D4D12AQF5nwqAXzzSSQ/article-cover_image-shrink_720_1280/0/1685048126344?e=2147483647&v=beta&t=Wb3u79BKtgxWX_V3MZYaTakTWHLHHh7ZulO_VvR92Qg",
    name: "O resultado de sua empresa pode estar sendo impactado pela Shadow IT",
    description: "#tecnologia #ShadowIT #compliance #gestão #inovação #transformacaodigital",
    url: "https://pt.linkedin.com/pulse/o-resultado-de-sua-empresa-pode-estar-sendo-impactado-saulo-lima"
  },
  {
    id: 4,
    image: "https://media.licdn.com/dms/image/C4D12AQFcgSbkAl0JQg/article-cover_image-shrink_600_2000/0/1605378562771?e=2147483647&v=beta&t=SigKRcgfj96kMlgVQlMTwNbLKySZpHUBZiJvx3qBr-o",
    name: "Rompendo barreiras interdepartamentais na evolução do produto",
    description: "#produto #comunicação #alinhamento #tecnologia #negocio",
    url: "https://pt.linkedin.com/pulse/o-resultado-de-sua-empresa-pode-estar-sendo-impactado-saulo-lima"
  }
];

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredPosts = ["example-1", "example-2", "example-3"];