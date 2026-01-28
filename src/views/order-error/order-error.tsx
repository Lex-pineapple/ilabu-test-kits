import { Link } from "react-router";

import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

import { PATHS } from "#constants/paths";

export const OrderError = () => (
  <Stack align="center" gap={6} justify="center" minH="100vh" px={4} py={8}>
    <Box textAlign="center">
      <Heading as="h1" color="lab_red.error" mb={4} size="2xl">
        В ходе оплаты произошла ошибка.
      </Heading>
      <Text color="gray.600" fontSize="lg" maxW="md" mb={8}>
        Повторите оплату.
      </Text>
      <Link to={`${PATHS.checkout}?step=3`} viewTransition>
        <Button colorScheme="red" px={8} size="lg">
          Вернуться к подтверждению заказа
        </Button>
      </Link>
    </Box>
  </Stack>
);
