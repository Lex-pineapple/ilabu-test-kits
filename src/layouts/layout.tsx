import { Outlet } from "react-router-dom";

import { Container, Flex } from "@chakra-ui/react";

import { Footer } from "#shared/footer";
import { Header } from "#shared/header";

import styles from "./layout.module.scss";

export const Layout = () => (
  <Flex
    className={styles.root}
    flexDir="column"
    h="100%"
    justifyContent="space-between"
    m="0 auto"
    maxW={500}
    minH="100vh"
    p={0}
    pt={12}
  >
    <div>
      <Header />
      <Container p={3.5} pb={0} pt={0}>
        <Outlet />
      </Container>
    </div>
    <Footer />
  </Flex>
);
