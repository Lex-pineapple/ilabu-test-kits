import { Flex, Text } from "@chakra-ui/react";

import { LogoMainIcon } from "#assets/icons/logo-main";

export const Footer = () => (
  <Flex justify="space-between" mt={65} p="10px 14px 26px">
    <LogoMainIcon h={29} />
    <Text
      maxW={201}
      textAlign="center"
      textStyle="sm"
      textTransform="uppercase"
    >
      © 2024 ilabU, Inc.
      <br />
      All rights reserved.
    </Text>
  </Flex>
);
