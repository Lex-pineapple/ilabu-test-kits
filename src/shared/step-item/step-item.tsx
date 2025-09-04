import { Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

type StepItemProps = {
  description: string;
  imgSrc: string;
  step: number;
  title: string;
  reverse?: boolean;
};

export const StepItem = ({
  description,
  imgSrc,
  reverse,
  step,
  title,
}: StepItemProps) => (
  <Flex flexDirection={reverse ? "row-reverse" : "row"} gap={4.5} p={0}>
    <Flex flexDirection="column" gap={5}>
      <Heading fontFamily="secondary" size="2xl">
        {title}
      </Heading>
      <Text fontWeight="medium" lineHeight="28px">
        {description}
      </Text>
    </Flex>
    <Flex
      alignItems={reverse ? "flex-start" : "flex-end"}
      flexBasis={109}
      flexDirection="column"
      flexShrink={0}
      justifyContent="space-between"
    >
      <Center
        bg="lab_red.500"
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
      <Image objectFit="auto" src={imgSrc} />
    </Flex>
  </Flex>
);
