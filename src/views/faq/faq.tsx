import { useLocation } from "react-router-dom";

import {
  Container,
  Flex,
  Heading,
  Stack,
  StackSeparator,
  Text,
} from "@chakra-ui/react";

import { FAQCollapsible } from "#/views/faq/components/faq-collapsible";
import { FAQData, LabsData } from "#/views/faq/consts";
import { AddressIcon } from "#assets/icons/address-icon";

export const FAQ = () => {
  const { hash } = useLocation();

  return (
    <Container p={0} pb={14} pt={3.5}>
      <Heading fontWeight="bold" pb={6} size="lg" textTransform="uppercase">
        Часто задаваемые вопросы
      </Heading>
      {FAQData.map((item) => (
        <FAQCollapsible {...item} open={hash.replace("#", "") === item.id} />
      ))}
      <FAQCollapsible
        element={
          <Container p={0}>
            <Text color="lab_green.800" fontWeight="semibold" pb={2}>
              {LabsData.name}
            </Text>
            <Stack separator={<StackSeparator />}>
              {LabsData.adressList.map((item) => (
                <Flex alignItems="center" gap={4} p={0}>
                  <AddressIcon color="lab_green.800" size="xl" />
                  <Flex flexDir="column" gap={1} p={0}>
                    <Text as="span" fontWeight="semibold">
                      {item.address}
                    </Text>
                    <Text as="span">{item.workingHours}</Text>
                  </Flex>
                </Flex>
              ))}
            </Stack>
          </Container>
        }
        id={"delivery"}
        open={hash.replace("#", "") === "delivery"}
        title={"Какие пункты самостоятельной доставки работают?"}
      />
    </Container>
  );
};
