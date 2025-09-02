import { useState } from "react";
import cn from "classnames";

import { Button } from "@chakra-ui/react";

import styles from "./burger-button.module.scss";

type BurgerButtonProps = {
  onClick: () => void;
};

export const BurgerButton = ({ onClick }: BurgerButtonProps) => {
  const [buttonActive, setButtonActive] = useState(false);

  const handleClick = () => {
    setButtonActive(!buttonActive);
    onClick();
  };

  return (
    <Button
      className={cn(styles.root, {
        [styles[`root--active`]]: buttonActive,
      })}
      minW="auto"
      onClick={handleClick}
      variant="ghost"
      w="27px"
    />
  );
};
