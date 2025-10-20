import { Link } from "react-router";

import { Flex, Image, Text } from "@chakra-ui/react";

import { MOCK_UID } from "#constants/card-product-data";
import { PATHS } from "#constants/paths";

import imgUrl from "#assets/qr-icon.svg";

export const QRComponent = () => (
  <Link to={`${PATHS._selected}/${MOCK_UID}`}>
    <Flex alignItems="center" bg="lab_green.50" borderRadius={10} gap={7} p={5}>
      <Image h={73} src={imgUrl} w={73} />
      <Text fontWeight="semibold" textStyle="sm">
        Отсканируйте <br /> QR-код на коробке
      </Text>
    </Flex>
  </Link>
);
