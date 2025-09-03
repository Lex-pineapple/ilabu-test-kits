import { useRef } from "react";

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

import { CalendarIcon } from "#assets/icons/calendar-icon";
import { deliveryData, genderData } from "#constants/general";
import { DatePicker } from "#shared/date-picker";
import { InputClearable } from "#shared/input-clearable";
import { Selectinput } from "#shared/select-input";

export const OrderDetails = () => (
  <Flex flexDir="column" h="100%">
    <Container mb={5} p="0 14px">
      <Heading mb={3.5} size="2xl" textTransform="uppercase">
        order details
      </Heading>
      <Text textStyle="xl">
        Fill in your details to complete your{" "}
        <Text color="lab_red.500" display="inline">
          order
        </Text>
        .
      </Text>
    </Container>
    <Flex flexDir="column" h="100%" justifyContent="space-between">
      <Stack gap={5} pb={8}>
        <InputClearable placeholder="Your Email" />
        <InputClearable placeholder="First Name" />
        <InputClearable placeholder="Last name" />
        <Selectinput items={genderData} placeholder="Gender" />
        <DatePicker />
        <Selectinput
          items={deliveryData}
          placeholder="Delivery of biomaterials"
        />
      </Stack>
      <Button disabled textTransform="uppercase">
        PAY
      </Button>
    </Flex>
  </Flex>
);
