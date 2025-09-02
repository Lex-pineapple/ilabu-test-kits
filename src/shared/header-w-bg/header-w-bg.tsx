import { Center, Heading } from "@chakra-ui/react";

export const HeaderWBg = () => (
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
    mb={12}
    padding={5}
    position="relative"
  >
    <Heading
      color="white"
      position="relative"
      size="xl"
      textTransform="uppercase"
    >
      All Products
    </Heading>
  </Center>
);
