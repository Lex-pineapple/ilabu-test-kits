import { Outlet } from "react-router-dom";

import { Container, Flex } from "@chakra-ui/react";

import { ScrollToTop } from "#/components/scroll-to-top";
import { CustomToaster } from "#/components/toaster";
import { bottomSheetModal } from "#shared/bottom-sheet-modal";
import { Footer } from "#shared/footer";
import { Header } from "#shared/header";
import { modal } from "#shared/modal";

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
    <ScrollToTop />
    <div>
      <Header />
      <Container p={3.5} pb={0} pt={0}>
        <Outlet />
      </Container>
    </div>
    <Footer />
    <CustomToaster />
    <modal.Viewport />
    <bottomSheetModal.Viewport />
  </Flex>
);
