import { Outlet } from "react-router-dom";

import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";

import { ScrollToTop } from "#/components/scroll-to-top";
import { CustomToaster } from "#/components/toaster";
import { bottomSheetModal } from "#shared/bottom-sheet-modal";
import { Footer } from "#shared/footer";
import { Header } from "#shared/header";
import { modal } from "#shared/modal";

import styles from "./layout.module.scss";

export const Layout = () => {
  const [isLargerThan500] = useMediaQuery(["(min-width: 500px)"]);

  return isLargerThan500 ? (
    <div>
      <Header />
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Center>
            <Flex
              className={styles.root_mobile}
              flexDir="column"
              justifyContent="center"
              margin="0 auto"
              maxW={500}
              minH="100vh"
              p={0}
              pt={12}
            >
              <ScrollToTop />
              <div>
                <Container p={3.5} pb={0} pt={0}>
                  <Outlet />
                </Container>
              </div>
            </Flex>
          </Center>
        </GridItem>
        <GridItem>
          <Box
            bgAttachment="fixed"
            bgImage="url('/bg-test.png')"
            bgPos="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="100%"
            w="100%"
          />
        </GridItem>
      </Grid>
      <Footer isDesktop={true} />
      <CustomToaster />
      <modal.Viewport />
      <bottomSheetModal.Viewport />
    </div>
  ) : (
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
      <Footer isDesktop={false} />
      <CustomToaster />
      <modal.Viewport />
      <bottomSheetModal.Viewport />
    </Flex>
  );
};
