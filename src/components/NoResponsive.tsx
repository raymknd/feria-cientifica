import { Button, useMediaQuery } from "@mui/material";
import { AnimatePresence, HTMLMotionProps } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/NoResponsive.module.sass";
import { Hail } from "@mui/icons-material";

// interface IFullHeightProps {
//   clientHeight: number;
// }

// const FullHeight = styled(motion.div)<IFullHeightProps>(
//   ({ clientHeight }) => css`
//     height: ${clientHeight}px;
//   `
// );

const NoResponsive = () => {
  const [ignored, setIgnored] = useState(false);
  const [shown, setShown] = useState(false);
  const mediaQuery = useMediaQuery("(min-width: 768px)");
  const rootFramerAnimation: HTMLMotionProps<"div"> = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: shown ? 1 : undefined,
    },
    exit: {
      opacity: 0,
    },
  };

  useEffect(() => {
    if (!ignored) setShown(mediaQuery);
    if (shown) document.body.style.overflow = "hidden";
    else document.body.removeAttribute("style");
  }, [mediaQuery, shown, ignored]);
  return (
    <Fragment>
      <AnimatePresence>
        {shown && (
          <motion.div className={styles.root} {...rootFramerAnimation}>
            <motion.div
              className={styles.backdropBlur}
              {...rootFramerAnimation}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-6 bg-purple-100 text-purple-900 z-10 rounded-md flex flex-col gap-5 max-w-[578px]"
            >
              <Hail fontSize="large" />
              <div className="font-bold text-2xl">Mmmmh, espera un poco.</div>
              <div className="text-lg">
                No había tanto tiempo para diseñar la web en dispositivos más
                grandes, por lo que puede que la página no se vea tan bonita.
                Tienes dos opciones: achicar esta ventana hasta que este aviso
                desaparezca (que es lo que te recomiendo), o ignorar este aviso
                y ver la página como está.
              </div>
              <div>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    setIgnored(true);
                    setShown(false);
                  }}
                >
                  Ignorar y continuar
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default NoResponsive;
