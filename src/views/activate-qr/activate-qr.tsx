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
import { AllProducts } from "#/views/all-products";
import { MOCK_UID } from "#constants/card-product-data";
import { PATHS } from "#constants/paths";

export const ActivateQR = () => {
  const [code, setCode] = useState<string>();

  const navigate = useNavigate();

  return (
    <div>
      <Container p={3.5} pb={16} pt={9}>
        <Flex direction="column" gap={6}>
          <Heading size="2xl" textTransform="uppercase">
            Activate a kit
          </Heading>
          <Text fontWeight="light" textStyle="xl">
            Simply scan the QR code or type in your unique activation code unto
            the fields below.
          </Text>
          <QRComponent />
          <Text fontFamily="secondary" textAlign="center" textStyle="lg">
            Or type in your unique activation code
          </Text>
          <Flex align="center" direction="column" gap={4}>
            <Input
              onChange={(e) => setCode(e.target.value)}
              onInput={(e) => setCode((e.target as HTMLInputElement).value)}
              placeholder="enter code"
              value={code}
            />
            <Link color="lab_red.500" fontFamily="secondary">
              Can’t find your codes?
            </Link>
            <Button
              disabled={!code}
              fontSize={20}
              fontWeight="light"
              onClick={() => navigate(`${PATHS._selected}/${MOCK_UID}`)}
              textTransform="uppercase"
              w="100%"
            >
              Continue
            </Button>
          </Flex>
        </Flex>
      </Container>
      <AllProducts />
    </div>
  );
};
