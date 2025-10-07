import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { Flex, Text } from "@chakra-ui/react";

import { LogoMainIcon } from "#assets/icons/logo-main";
import { PATHS } from "#constants/paths";
import { BurgerButton } from "#shared/burger-button";

import styles from "./header.module.scss";

const LINKS = [
  { href: PATHS.availableKit, title: "Все наборы" },
  { href: "", title: "Часто задаваемые вопросы" },
  { href: "", title: "Контакты" },
  { href: "", title: "Выйти" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
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
            {LINKS.map((item) => (
              <Link onClick={() => setOpen(false)} to={item.href}>
                <Text color="white" textStyle="sm">
                  {item.title}
                </Text>
              </Link>
            ))}
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
