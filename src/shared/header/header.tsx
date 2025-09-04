import { Link } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import { LogoMainIcon } from "#assets/icons/logo-main";
import { PATHS } from "#constants/paths";
import { BurgerButton } from "#shared/burger-button";

export const Header = () => (
  <Flex
    align="center"
    bg="white"
    gap={7}
    h={12}
    left={0}
    p="0 14px"
    position="fixed"
    top={0}
    w="100%"
    zIndex="10000"
  >
    <BurgerButton onClick={() => null} />
    <Link to={PATHS.root}>
      <LogoMainIcon h={29} />
    </Link>
  </Flex>
);
