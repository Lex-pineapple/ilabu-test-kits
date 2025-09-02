import { Flex, Image, Text } from "@chakra-ui/react";

import imgUrl from "#assets/qr-icon.svg";

export const QRComponent = () => (
  <Flex alignItems="center" direction="column" gap={7}>
    <Text
      color="lab_red.500"
      fontWeight="light"
      textAlign="center"
      textStyle="xl"
      textTransform="uppercase"
    >
      scan qr on box
    </Text>
    <Image h={95} src={imgUrl} w={95} />
  </Flex>
);
