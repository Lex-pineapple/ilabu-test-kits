import { Center, Container, Heading, Image, Text } from "@chakra-ui/react";

export const AnalysisModalError = () => (
  <Container pb={4}>
    <Center pb={2}>
      <Image
        filter="invert(44%) sepia(72%) saturate(656%) hue-rotate(126deg) brightness(100%) contrast(96%)"
        src="/error_analysis.png"
        w="50%"
      />
    </Center>
    <Heading pb={2} size="md" textAlign="center">
      Произошла ошибка при загрузке описания анализа
    </Heading>
    <Text color="lab_grey.600" textAlign="center">
      Попробуйте перезагрузить страницу.
    </Text>
  </Container>
);
