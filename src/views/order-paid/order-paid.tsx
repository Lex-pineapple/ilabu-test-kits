import { Link } from "react-router";

import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

import { PATHS } from "#constants/paths";

export const OrderPaid = () => (
  <Stack align="center" gap={6} justify="center" minH="100vh" px={4} py={8}>
    <Box textAlign="center">
      <Heading as="h1" color="lab_green.900" mb={4} size="2xl">
        Ваша оплата прошла успешно
      </Heading>
      <Text color="gray.600" fontSize="lg" maxW="md" mb={8}>
        Остался один шаг - сбор биологического образца на дому!
      </Text>
      <Link to={PATHS.instruction} viewTransition>
        <Button colorScheme="green" px={8} size="lg">
          Перейти к сбору образца
        </Button>
      </Link>
    </Box>
  </Stack>
);
