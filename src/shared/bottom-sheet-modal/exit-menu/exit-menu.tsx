import { Button, Center, Flex, Stack, Text } from "@chakra-ui/react";

type ExitMenuProps = {
  onClose: () => void;
};

export const ExitMenu = ({ onClose }: ExitMenuProps) => (
  <Center flexDir="column" justifyContent="center" p={0}>
    <Text
      color="lab_grey.600"
      fontWeight="medium"
      maxW={230}
      pb={10}
      textAlign="center"
    >
      это аннулирует ваш прогресс работы с набором
    </Text>
    <Stack pb={8} w="100%">
      <Button onClick={onClose}>Вернуться</Button>
      <Button
        border="1px solid #309E8E"
        color="lab_green.900"
        variant="outline"
      >
        Выйти
      </Button>
    </Stack>
  </Center>
);
