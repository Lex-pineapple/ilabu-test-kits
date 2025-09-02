import { Outlet } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import { Footer } from "#shared/footer";
import { Header } from "#shared/header";

export const Layout = () => (
  <Flex
    direction="column"
    h="100vh"
    justify="space-between"
    m="0 auto"
    maxW={500}
    pt={12}
  >
    <Header />
    <Outlet />
    <Footer />
  </Flex>
);
