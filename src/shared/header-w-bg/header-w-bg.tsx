import type { ReactNode } from "react";

import { Box, type CenterProps, Heading, Text } from "@chakra-ui/react";

type HeaderWBgProps = {
  children: ReactNode;
  m?: number | string;
  note?: string;
  p?: number | string;
} & CenterProps;

export const HeaderWBg = ({ children, m, note, p }: HeaderWBgProps) => (
  <Box bg="lab_green.900" m={m} padding={p ?? 5} position="relative">
    <Heading
      color="white"
      position="relative"
      pr={20}
      size="xl"
      textAlign="left"
      textTransform="uppercase"
    >
      {children}
    </Heading>
    {note && (
      <Text color="white" fontStyle="italic" pt={3}>
        {note}
      </Text>
    )}
  </Box>
);
