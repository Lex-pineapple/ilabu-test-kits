import {
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

type StepItemProps = {
  description: string;
  imgSrc: string;
  step: number;
  title: string;
  border?: boolean;
  reverse?: boolean;
};

export const StepItem = ({
  border,
  description,
  imgSrc,
  reverse,
  step,
  title,
}: StepItemProps) => (
  <Container
    borderBottom={border ? "1px solid #00000033" : undefined}
    flexDirection={reverse ? "row-reverse" : "row"}
    gap={4.5}
    p={0}
    pb={12}
  >
    <Flex
      flexBasis={100}
      flexDirection="column"
      flexShrink={0}
      float={reverse ? "left" : "right"}
      justifyContent="space-between"
      width="fit-content"
    >
      <Center
        bg="lab_green.900"
        borderRadius="50%"
        color="white"
        fontFamily="secondary"
        fontSize="2xl"
        fontWeight="medium"
        h="42px"
        w="42px"
      >
        {step}
      </Center>
      <Image flexGrow="1" objectFit="auto" src={imgSrc} />
    </Flex>
    <Container flexDirection="column" gap={5} p={0}>
      <Heading pb={2.5} size="md">
        {title}
      </Heading>
      <Text fontWeight="medium" textStyle="sm">
        {description}
      </Text>
    </Container>
  </Container>
);
