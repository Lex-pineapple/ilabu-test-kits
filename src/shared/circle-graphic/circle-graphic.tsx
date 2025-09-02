import cn from "classnames";

import styles from "./circle-graphic.module.scss";

export type ColorType = "blue" | "cyan" | "dk-gray" | "gray" | "green" | "red";

type CircleGraphicProps = {
  color: ColorType;
};

export const CircleGraphic = ({ color }: CircleGraphicProps) => (
  <div className={styles.root}>
    {Array(6)
      .fill(0)
      .map((_, idx) => (
        <div
          className={cn(styles[`child__${idx + 1}`], styles[`child--${color}`])}
        ></div>
      ))}
  </div>
);
