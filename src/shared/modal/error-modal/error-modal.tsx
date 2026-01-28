import { Button, Container, Heading, Text } from "@chakra-ui/react";

type ErrorModalProps = {
  description: string;
  title: string;
  onClose: () => void;
};

export const ErrorModal = ({
  description,
  onClose,
  title,
}: ErrorModalProps) => (
  <Container p={4} pb={8} position="relative">
    <Heading mb={4} textAlign="center">
      {title}
    </Heading>
    <Text mb={4}>{description}</Text>
    <Button onClick={onClose} w="100%">
      Закрыть
    </Button>
  </Container>
);
