import { Link } from "react-router";

import { Flex, Image, Text } from "@chakra-ui/react";

import { MOCK_UID } from "#constants/card-product-data";
import { PATHS } from "#constants/paths";

import imgUrl from "#assets/qr-icon.svg";

export const QRComponent = () => (
  <Flex alignItems="center" direction="column" gap={7}>
    <Link to={`${PATHS._selected}/${MOCK_UID}`}>
      <Text
        color="lab_red.500"
        fontWeight="light"
        textAlign="center"
        textStyle="xl"
        textTransform="uppercase"
      >
        scan qr on box
      </Text>
    </Link>
    <Image h={95} src={imgUrl} w={95} />
  </Flex>
);
