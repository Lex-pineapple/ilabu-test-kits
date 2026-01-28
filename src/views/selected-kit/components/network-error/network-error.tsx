import { Button, Stack, Text } from "@chakra-ui/react";

import { RepeatIcon } from "#assets/icons/repeat-icon";

export const NetworkError = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Stack align="center" gap={4} justify="center" py={12}>
      <Text color="lab_grey.900" fontSize="lg" textAlign="center">
        Ошибка загрузки данных. Попробуйте обновить страницу
      </Text>
      <Button
        _hover={{ bg: "gray.300" }}
        bg="gray.200"
        color="gray.700"
        onClick={handleReload}
      >
        Обновить <RepeatIcon fill="none" />
      </Button>
    </Stack>
  );
};
