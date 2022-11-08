import { Fragment } from "react";
import Profile from "../components/Profile";
import { ISectionProps } from "../components/Section";
import Perfiles from "./Perfiles";

export const ProfileGroup = () => {
  return (
    <Fragment>
      <h2 className="text-base font-bold">
        Un trabajo hecho con mucho &lt;3 por
      </h2>
      <div className="flex flex-row gap-5">
        {Perfiles.map((p) => (
          <Profile key={p.name} {...p} />
        ))}
      </div>
      <small>Y un big shoutout al profe Juan Venegas 🫡</small>
    </Fragment>
  );
};

const Fuentes = () => {
  return (
    <Fragment>
      <h2 className="text-xl font-bold">Fuentes</h2>
      <ul className="list-disc pl-5">
        <li>
          <span className="font-bold">
            MITOSIS (National Human Genome Research Institute)
          </span>
          <br />
          <a
            href="https://www.genome.gov/es/genetics-glossary/Mitosis"
            target="_blank"
            rel="noreferrer"
          >
            https://www.genome.gov/es/genetics-glossary/Mitosis
          </a>
        </li>
        <li>
          <span className="font-bold">LA MITOSIS (UCM)</span>
          <br />
          <a
            href="https://www.ucm.es/data/cont/media/www/pag-56185/05-La%20Mitosis.pdf"
            target="_blank"
            rel="noreferrer"
          >
            https://www.ucm.es/data/cont/media/www/pag-56185/05-La%20Mitosis.pdf
          </a>
        </li>
        <li>
          <span className="font-bold">Orceína y fibras elásticas</span>
          <br />
          <a
            href="http://www.scielo.org.ar/scielo.php?pid=S0025-76802003000500015&script=sci_arttext#:~:text=La%20orce%C3%ADna%2C%20dijimos%2C%20es%20un,de%20agua%20y%20fabrica%20pigmentos."
            target="_blank"
            rel="noreferrer"
          >
            http://www.scielo.org.ar/scielo.php?pid=S0025-76802003000500015&script=sci_arttext#:~:text=La%20orce%C3%ADna%2C%20dijimos%2C%20es%20un,de%20agua%20y%20fabrica%20pigmentos.
          </a>
        </li>
        <li>
          <span className="font-bold">Cariotipo de Espeletiopsis muiska</span>
          <br />
          Héctor Rondón B,<sup>1</sup> Biol, Leidy Rache C,<sup>2*</sup> M.Sc,
          José Pacheco M,<sup>1</sup> Ph.D.
          <br />
          <sup>1</sup>Universidad Pedagógica y Tecnológica de Colombia. Escuela
          de Ciencias Biológicas. Laboratorio BIOPLASMA. Tunja, Colombia.
          <sup>2</sup>Universidad de los Andes. Bogotá D.C. Colombia.
          *Correspondencia: leidyrache@gmail.com
        </li>
      </ul>
    </Fragment>
  );
};

const Articulos: ISectionProps[] = [
  {
    className: "items-center justify-center text-center",
    children: <ProfileGroup />,
  },
  {
    className: "pt-0",
    title: "Introducción",
    body: "Nuestro proyecto como tal intenta hacer visible mediante una serie de procesos y la ayuda de un microscopio, la mitosis y sus fases, tomando como sujetos de prueba raicillas de ajo y cebolla.",
    image: {
      src: "/static/images/IMG_2482.png",
      alt: "Ajos en un algodón",
      className: "mt-2",
      comment: '"Ajos preparados para germinar en un algodón"',
    },
  },
  {
    className: "pt-0",
    title: "¿Qué es la mitosis?",
    body: `La mitosis es el proceso por el cual una célula replica sus cromosomas y luego los secreta, produciendo dos núcleos idénticos durante la preparación para la división celular. De manera resumida, podemos decir que consta de 4 fases básicas, sin embargo, cuando hablamos de aspectos más específicos, contamos con más.`,
  },
  {
    title: "¿Qué hicimos?",
    className: "pt-0",
    body: "Al empezar nuestro experimento germinamos una cebolla y varios ajos para obtener raicillas que nos sirvieran (de aproximadamente 3 o 4 cm de crecimiento). Luego de esto cortamos algunas (de unos 2-3 cm aprox.) y las depositamos sobre una lámina de vidrio a la que vertimos algunas gotas de orceína.",
  },
  {
    className: "pt-0 mt-[-1rem]",
    body: `Posteriormente acomodamos el cubreobjetos sobre la raicilla e hicimos un poco de presión con cuidado de no romper la preparación, esto para que la raíz se extienda a lo largo de la superficie. Después de esperar aproximadamente 10 minutos en reposo, los productos estuvieron listos para observarlos sobre el microscopio y analizar sus procesos.`,
    video: {
      src: "/static/video/IMG_2782.mp4",
      hasReplay: true,
    },
  },
  {
    className: "pt-0",
    title: "¿Qué vimos?",
    body: "Durante nuestra observación vimos diferentes fases del ciclo celular y una profase media. Aquí vemos una imágen de lo que logramos capturar durante este proceso y las distintas etapas a las que pertenecen.",
    image: {
      src: "/static/images/IMG_2814.png",
      comment: '"Raicilla teñida vista bajo el miscroscpio"',
    },
  },
  {
    className: "pt-0",
    title: "Conclusión",
    body: "Nuestro objetivo principal era lograr evidenciar las etapas de la metafase, sin embargo, no disponíamos del tiempo suficiente. Aún así, logramos apreciar algunas fases de la mitosis.",
  },
  {
    className: "pt-0 opacity-50 break-all",
    children: <Fuentes />,
  },
];

export default Articulos;
