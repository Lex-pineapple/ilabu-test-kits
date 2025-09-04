import cn from "classnames";
import type { CSSProperties } from "react";

import styles from "./circle-graphic.module.scss";

export type ColorType = "blue" | "cyan" | "dk-gray" | "gray" | "green" | "red";

type CircleGraphicProps = {
  color: ColorType;
  positions: {
    x: string;
    y: string;
  };
  size?: number;
  zIndex?: number;
};

export const CircleGraphic = ({
  color,
  positions,
  size,
  zIndex,
}: CircleGraphicProps) => (
  <div
    className={styles.root}
    style={
      {
        "--graphic-pos-x": positions.x,
        "--graphic-pos-y": positions.y,
        height: size && `${size}px`,
        width: size && `${size}px`,
        zIndex,
      } as CSSProperties
    }
  >
    {Array(6)
      .fill(0)
      .map((_, idx) => (
        <div
          className={cn(styles[`child__${idx + 1}`], styles[`child--${color}`])}
        ></div>
      ))}
  </div>
);
