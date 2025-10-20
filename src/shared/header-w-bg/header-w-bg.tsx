import type { ReactNode } from "react";

import { Center, type CenterProps, Heading } from "@chakra-ui/react";

type HeaderWBgProps = {
  children: ReactNode;
  m?: number | string;
  p?: number | string;
} & CenterProps;

export const HeaderWBg = ({ children, m, p }: HeaderWBgProps) => (
  <Center bg="lab_green.900" m={m} padding={p ?? 5} position="relative">
    <Heading
      color="white"
      position="relative"
      size="xl"
      textAlign="left"
      textTransform="uppercase"
    >
      {children}
    </Heading>
  </Center>
);
