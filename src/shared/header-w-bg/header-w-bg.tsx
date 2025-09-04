import type { ReactNode } from "react";

import { Center, Heading } from "@chakra-ui/react";

type HeaderWBgProps = {
  children: ReactNode;
  m?: number | string;
  p?: number | string;
};

export const HeaderWBg = ({ children, m, p }: HeaderWBgProps) => (
  <Center
    _before={{
      bg: "url('/backgrounds/bg-on-red.jpg') center/cover no-repeat",
      content: "''",
      height: "100%",
      opacity: 0.1,
      position: "absolute",
      width: "100%",
    }}
    bg="#FF2121"
    m={m}
    padding={p ?? 5}
    position="relative"
  >
    <Heading
      color="white"
      position="relative"
      size="xl"
      textAlign="center"
      textTransform="uppercase"
    >
      {children}
    </Heading>
  </Center>
);
