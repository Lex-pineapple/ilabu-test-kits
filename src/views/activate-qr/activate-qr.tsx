import { useState } from "react";
import { useNavigate } from "react-router";

import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

import { QRComponent } from "#/components/qr-component";
import { MOCK_UID } from "#constants/card-product-data";
import { PATHS } from "#constants/paths";
import { ShdContainer } from "#shared/shd-container";

export const ActivateQR = () => {
  const [code, setCode] = useState<string>();

  const navigate = useNavigate();

  return (
    <div>
      <Container p={3.5} pb={16} pt={9}>
        <Flex direction="column" gap={6}>
          <ShdContainer p="22px 16px">
            <Heading
              fontWeight="bold"
              pb={3}
              size="xl"
              textTransform="uppercase"
            >
              Активировать набор
            </Heading>
            <Text fontWeight="semibold" textStyle="sm">
              Отсканируйте QR-код или введите уникальный{" "}
              <Text as="span" color="lab_green.900">
                код активации
              </Text>{" "}
              в поле ниже
            </Text>
          </ShdContainer>
          <QRComponent />
          <Text fontWeight="semibold" textAlign="center" textStyle="sm">
            или <br /> введите код активации
          </Text>
          <Flex align="center" direction="column" gap={4}>
            <Input
              onChange={(e) => setCode(e.target.value)}
              onInput={(e) => setCode((e.target as HTMLInputElement).value)}
              placeholder="Введите код"
              size="xl"
              value={code}
            />
            <Button
              disabled={!code}
              fontSize={14}
              fontWeight="medium"
              onClick={() => navigate(`${PATHS._selected}/${MOCK_UID}`)}
              size="xl"
              textTransform="uppercase"
              w="100%"
            >
              Продолжить
            </Button>
            <Link color="lab_grey.600" fontSize={14} fontWeight="medium">
              Не нашли QR-код?
            </Link>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};
