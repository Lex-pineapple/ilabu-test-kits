import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { Button, Flex, Text } from "@chakra-ui/react";

import { useAuth } from "#/hooks/use-auth";
import { LogoMainIcon } from "#assets/icons/logo-main";
import { LINKS } from "#constants/header-links";
import { PATHS } from "#constants/paths";
import { BurgerButton } from "#shared/burger-button";

import styles from "./header.module.scss";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { isAuthorised } = useAuth();

  return (
    <div>
      <Flex
        align="center"
        bg="white"
        boxShadow="0 0 10px 2px #0000000f"
        gap={7}
        h={12}
        left={0}
        p="0 14px"
        position="fixed"
        top={0}
        w="100%"
        zIndex={10000}
      >
        <div
          className={classNames(styles.drawer, {
            [styles.drawer_open]: open,
          })}
        >
          <Link onClick={() => setOpen(false)} to={PATHS.root}>
            <div className={styles.header_link}>
              <LogoMainIcon h={29} />
            </div>
          </Link>
          <Flex className={styles.links} flexDir="column">
            {LINKS.filter((item) =>
              isAuthorised ? item : item.isAuth === false,
            ).map((item) =>
              item.href ? (
                <Link
                  key={item.title}
                  onClick={() => setOpen(false)}
                  to={item.href}
                >
                  <Text color="white" textStyle="sm">
                    {item.title}
                  </Text>
                </Link>
              ) : (
                <Button
                  _hover={{ color: "black" }}
                  color="white"
                  key={item.title}
                  onClick={() => {
                    setOpen(false);
                    item.onClick?.();
                  }}
                  variant="ghost"
                >
                  <Text textStyle="sm">{item.title}</Text>
                </Button>
              ),
            )}
          </Flex>
        </div>
        <BurgerButton active={open} onClick={() => setOpen(!open)} />
        <Link to={PATHS.root}>
          <LogoMainIcon h={29} />
        </Link>
      </Flex>
      <div
        className={classNames(styles.backdrop, {
          [styles.backdrop_open]: open,
        })}
        onClick={() => setOpen(!open)}
      ></div>
    </div>
  );
};
