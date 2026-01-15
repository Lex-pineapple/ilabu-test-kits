import { Box } from "@chakra-ui/react";

export const LoadingBackdrop = () => (
  <Box
    bg="rgba(0, 0, 0, 0.5)"
    bottom={0}
    left={0}
    position="fixed"
    right={0}
    top={0}
    zIndex="overlay"
  />
);
