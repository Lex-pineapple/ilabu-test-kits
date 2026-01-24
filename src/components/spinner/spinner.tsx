import Lottie from "lottie-react";

import { Box, Center, Text } from "@chakra-ui/react";

import mylabAnimation from "#constants/mylab-loading-animation-v2.json";

import styles from "./styles.module.scss";

type SpinnerProps = {
  text?: string;
};

export const Spinner = ({ text = "Загрузка" }: SpinnerProps) => (
  <Box bg="#f5feff" inset="0" p={6} pos="fixed">
    <Center flexDirection="column" h="full">
      <Lottie animationData={mylabAnimation} loop />
      <Text className={styles.text} textStyle="xl">
        {text}...
      </Text>
    </Center>
  </Box>
);
