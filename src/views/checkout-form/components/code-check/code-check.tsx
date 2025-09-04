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

import { QRIcon } from "#assets/icons/qr-icon";
import { useAppDispatch } from "#store/hooks";
import { setFormState, setTubes } from "#store/slices/form-slice";

export const CodeCheck = () => {
  const [inputCount, setInputCount] = useState(1);
  const [inputData, setInputData] = useState("");
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(setTubes([inputData]));
    dispatch(setFormState("orderDetails"));
  };

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
              <InputGroup endElement={<QRIcon size="lg" />} key="idx">
                <Input
                  _placeholder={{ textAlign: "start" }}
                  onChange={(e) => setInputData(e.target.value)}
                  onInput={(e) =>
                    setInputData((e.target as HTMLInputElement).value)
                  }
                  placeholder={`Container No. ${idx + 1}`}
                  value={inputData}
                />
              </InputGroup>
            ))}
        </Stack>
        <Button
          disabled={!inputData}
          onClick={handleButtonClick}
          textTransform="uppercase"
        >
          Continue
        </Button>
      </Flex>
    </Flex>
  );
};
