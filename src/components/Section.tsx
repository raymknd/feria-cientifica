import Image, { IImageProps } from "./Image";
import Video, { IVideoProps } from "./Video";
import { HTMLMotionProps, motion } from "framer-motion";

export interface ISectionProps extends HTMLMotionProps<"section"> {
  title?: string;
  body?: string;
  video?: IVideoProps;
  image?: IImageProps;
}

const Section = (props: ISectionProps) => {
  const { title, body, children, video, image, ...rest } = props;
  const animationProps: HTMLMotionProps<"section"> = {
    // transition: {
    //   ease: [0.2, 1, 0.6, 1],
    //   duration: 0.4,
    //   delay: 0.2,
    // },
    // initial: {
    //   opacity: 0,
    //   y: 50,
    // },
    // whileInView: {
    //   opacity: 1,
    //   y: 0,
    // },
  };
  return (
    <motion.section
      {...animationProps}
      {...rest}
      className={`${
        rest.className || ""
      } flex flex-col px-8 py-12 w-full gap-5 max-w-[878px] mx-auto`}
    >
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      {body && <p>{body}</p>}
      {video && <Video {...video} />}
      {image && <Image {...image} />}
      {children}
    </motion.section>
  );
};

export default Section;
