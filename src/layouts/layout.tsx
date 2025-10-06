import { Outlet } from "react-router-dom";

import { Container, Flex } from "@chakra-ui/react";

import { Footer } from "#shared/footer";
import { Header } from "#shared/header";

export const Layout = () => (
  <Container h="100vh" m="0 auto" maxW={500} p={0} pt={12}>
    <Header />
    <Outlet />
    <Footer />
  </Container>
);
