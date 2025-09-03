import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

import { InfoCard } from "#/views/checkout-form/components/confirm-order/components/info-card";

const MOCK_DATA_TESTS = [
  { data: "25.99", title: "Hemoglobin A1c (HbA1c)" },
  { data: "25.99", title: "Lipid Panel" },
  { data: "25.99", title: "C-Reactive Protein (CRP)" },
  { data: "25.99", title: "Liver Function Tests (LFTs)" },
  { data: "25.99", title: "Blood Lactate" },
  { data: "25.99", title: "Blood Glucose " },
];

const MOCK_DATA_DELIVERY = [{ data: "15.00", title: "Delivery by courier" }];

const MOCK_DATA_PERSONAL_INFO = [
  { data: "Testemail@gmail.com", title: "Email:" },
  { data: "Jenifer", title: "First name:" },
  { data: "Smith", title: "Last name:" },
  { data: "Female", title: "Gender:" },
  { data: "02/21/1996", title: "Date of birth:" },
];

export const ConfirmOrder = () => (
  <Flex flexDir="column" h="100%">
    <Container mb={9} p="0 14px">
      <Heading mb={3.5} size="2xl" textTransform="uppercase">
        confirm your order
      </Heading>
      <Text textStyle="xl">
        Please check that your order details are correct.
      </Text>
    </Container>
    <Flex
      flexDir="column"
      gap={8}
      h="100%"
      justifyContent="space-between"
      p="0 14px 30px"
    >
      <InfoCard
        bottomElement={
          <Flex
            alignItems="center"
            gap={2.5}
            justifyContent="flex-end"
            p="0 14px"
          >
            <Text fontWeight="medium" textStyle="md">
              Total:{" "}
            </Text>
            <Text color="lab_red.500" fontWeight="medium" textStyle="2xl">
              € {725.99}
            </Text>
          </Flex>
        }
        items={MOCK_DATA_TESTS}
        title="Selected tests:"
      />
      <InfoCard items={MOCK_DATA_DELIVERY} title="Delivery of biomaterials" />
      <InfoCard items={MOCK_DATA_PERSONAL_INFO} title="Perconal information" />
    </Flex>
    <Button fontSize="xl" fontWeight="light" textTransform="uppercase" w="100%">
      Continue
    </Button>
  </Flex>
);
