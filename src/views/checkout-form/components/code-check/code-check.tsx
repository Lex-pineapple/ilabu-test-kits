import { useState } from "react";

import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

import { PlusIcon } from "#assets/icons/plus-icon";
import { QRIcon } from "#assets/icons/qr-icon";

export const CodeCheck = () => {
  const [inputCount, setInputCount] = useState(1);

  return (
    <Flex flexDir="column" h="100%">
      <Container mb={9} p="0 14px">
        <Heading mb={3.5} size="2xl" textTransform="uppercase">
          Code check
        </Heading>
        <Text textStyle="xl">
          Scan or manually enter the code from the used container
        </Text>
      </Container>
      <Flex flexDir="column" h="100%" justifyContent="space-between">
        <Stack gap={8} pb={8}>
          {Array(inputCount)
            .fill(0)
            .map((_, idx) => (
              <InputGroup endElement={<QRIcon size="lg" />}>
                <Input
                  _placeholder={{ textAlign: "start" }}
                  placeholder={`Container No. ${idx + 1}`}
                />
              </InputGroup>
            ))}
          <Button onClick={() => setInputCount(inputCount + 1)}>
            Add another container code <PlusIcon size="lg" />
          </Button>
        </Stack>
        <Button disabled textTransform="uppercase">
          Continue
        </Button>
      </Flex>
    </Flex>
  );
};
