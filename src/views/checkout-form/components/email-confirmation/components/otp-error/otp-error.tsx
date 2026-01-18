import { Box, Button, Text } from "@chakra-ui/react";

import { ErrorIcon } from "#assets/icons/error";

type OtpErrorProps = {
  onResend: () => void;
  loading?: boolean;
};

export const OtpError = ({ loading, onResend }: OtpErrorProps) => (
  <Box alignItems="center" display="flex" flexDirection="column" gap="4">
    <ErrorIcon color="lab_red.error" fill="none" w="200px" />
    <Text fontSize="md" textAlign="center">
      Произошла ошибка при отправке кода подтверждения. Пожалуйста попробуйте
      отправить код снова
    </Text>
    <Button
      colorScheme="blue"
      loading={loading}
      loadingText="Отправляем код..."
      onClick={onResend}
    >
      Отправить код снова
    </Button>
  </Box>
);
