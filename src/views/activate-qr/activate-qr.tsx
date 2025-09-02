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

export const ActivateQR = () => (
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
        <Text textStyle="lg">Or type in your unique activation code</Text>
        <Flex align="center" direction="column" gap={4}>
          <Input placeholder="enter code" />
          <Link color="lab_red.500">Can’t find your codes?</Link>
          <Button
            disabled
            fontSize={20}
            fontWeight="light"
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
