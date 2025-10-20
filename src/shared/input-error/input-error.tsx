import { Text } from "@chakra-ui/react";

type InputErrorProps = {
  message?: string;
};

export const InputError = ({ message }: InputErrorProps) =>
  message && (
    <Text color="lab_red.error" mt={2} textStyle="xs">
      {message}
    </Text>
  );
