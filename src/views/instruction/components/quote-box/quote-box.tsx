import type { PropsWithChildren } from "react";

import { Box, type BoxProps, Text } from "@chakra-ui/react";

export const QuoteBox = ({
  children,
  ...rest
}: PropsWithChildren & BoxProps) => (
  <Box
    bg="url('/quote-icon.svg') 80% 0 no-repeat, #C1E5DD"
    borderRadius={10}
    p={4}
    {...rest}
  >
    <Text fontWeight="medium" textStyle="sm">
      {children}
    </Text>
  </Box>
);
