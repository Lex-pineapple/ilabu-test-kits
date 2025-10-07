import { Outlet } from "react-router-dom";

import { Container, Flex } from "@chakra-ui/react";

import { Footer } from "#shared/footer";
import { Header } from "#shared/header";

export const Layout = () => (
  <Flex
    flexDir="column"
    h="100vh"
    justifyContent="space-between"
    m="0 auto"
    maxW={500}
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
