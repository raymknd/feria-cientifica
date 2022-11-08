import styles from "./styles/App.module.sass";
import styled, { css } from "styled-components";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import Section from "./components/Section";
import Articulos from "./constants/Articulos";
import { Fragment, useEffect, useRef } from "react";
import NoResponsive from "./components/NoResponsive";
import { motion, useInView } from "framer-motion";
import Footer from "./components/Footer";

interface IHeaderProps {
  clientHeight: number;
}

const Header = styled.header<IHeaderProps>(
  ({ clientHeight }) => css`
    height: ${clientHeight}px;
  `
);

function App() {
  const mainContent = useRef<HTMLDivElement>(null);
  const button = useRef(null);
  const isInView = useInView(button);
  const clientHeight =
    document.documentElement.clientHeight || window.screen.height;

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  return (
    <Fragment>
      <NoResponsive />
      <div className={styles.root}>
        <Header clientHeight={clientHeight} className={styles.header}>
          <img
            src="/static/images/IMG_2814.png"
            alt="Imagen de fondo"
            className={styles.background}
          />
          <div className={styles.gradient} />
          <div className={`${styles.content} px-6 py-12`}>
            <div>
              <h1 className="text-4xl font-bold">Estudio del ciclo celular</h1>
              <h2 className="text-xl font-light mt-2">Nuestra investigación</h2>
            </div>
            <motion.button
              ref={button}
              animate={isInView ? { y: [0, 10, 0] } : undefined}
              transition={
                isInView ? { repeat: Infinity, duration: 2 } : undefined
              }
              className="flex items-center justify-center text-center"
              onClick={() =>
                mainContent.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <div>
                <div className="text-base">Leer más</div>
                <KeyboardDoubleArrowDown />
              </div>
            </motion.button>
          </div>
        </Header>
        <main id="main-content" ref={mainContent}>
          {Articulos.map((a) => (
            <Section key={JSON.stringify(a)} {...a} />
          ))}
        </main>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
