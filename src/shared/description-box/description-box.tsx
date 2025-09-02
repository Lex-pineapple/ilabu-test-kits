import type { PropsWithChildren } from "react";

import { Box } from "@chakra-ui/react";

export const DescriptionBox = ({ children }: PropsWithChildren) => (
  <Box bg="lab_grey.400" p="20px 10px">
    {children}
  </Box>
);
