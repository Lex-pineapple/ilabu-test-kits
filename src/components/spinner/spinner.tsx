import Lottie from "lottie-react";

import { Box, Center } from "@chakra-ui/react";

import mylabAnimation from "#constants/mylab-loading-animation-v2.json";

export const Spinner = () => (
  <Box bg="#edfbfce0" inset="0" p={6} pos="fixed">
    <Center h="full">
      <Lottie animationData={mylabAnimation} loop />
    </Center>
  </Box>
);
