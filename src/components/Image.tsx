/* eslint-disable jsx-a11y/alt-text */
import styles from "../styles/Image.module.sass";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export interface IImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  comment?: string;
}

const Image = (props: IImageProps) => {
  const { comment, ...rest } = props;
  return (
    <div className={styles.imageRoot}>
      <img {...rest} className={`${rest.className || ""} ${styles.image}`} />
      {comment && (
        <small className={`${styles.comment} mt-4 opacity-50`}>{comment}</small>
      )}
    </div>
  );
};

export default Image;
