import cn from "classnames";

import { Button } from "@chakra-ui/react";

import styles from "./burger-button.module.scss";

type BurgerButtonProps = {
  active: boolean;
  onClick: () => void;
};

export const BurgerButton = ({ active, onClick }: BurgerButtonProps) => (
  <Button
    className={cn(styles.root, {
      [styles[`root--active`]]: active,
    })}
    minW="auto"
    onClick={onClick}
    variant="ghost"
    w="27px"
    zIndex={10000}
  />
);
