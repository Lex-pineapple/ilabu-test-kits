import { Container, Flex, Heading, Text } from "@chakra-ui/react";

import { AlertBox } from "#/views/instruction/components/alert-box";
import { QuoteBox } from "#/views/instruction/components/quote-box";

type StepItemProps = {
  step: number;
  title: string;
  border?: boolean;
  description?: string[];
  side?: "left" | "right";
};

const getStepP = (text: string) => {
  if (text.includes("Внимание!"))
    return (
      <AlertBox mb={10} mt={10}>
        {text}
      </AlertBox>
    );
  if (text.includes("Примечание"))
    return (
      <QuoteBox mb={10} mt={10}>
        {text}
      </QuoteBox>
    );
  return (
    <Text fontWeight="medium" pb={3} textIndent={10} textStyle="sm">
      {text}
    </Text>
  );
};

export const StepItem = ({
  border,
  description,
  side,
  step,
  title,
}: StepItemProps) => (
  <Container minH={150} p={0}>
    <Container
      borderBottom={border ? "1px solid #00000033" : undefined}
      flexDirection={side === "left" ? "row-reverse" : "row"}
      gap={4.5}
      mt={step === 1 ? 10 : 0}
      p={0}
      pb={12}
    >
      <Flex
        flexBasis={100}
        flexDirection="column"
        flexShrink={0}
        justifyContent="space-between"
        width="fit-content"
      >
        <Text
          color="lab_green.900"
          fontFamily="secondary"
          fontSize="200px"
          fontWeight="medium"
          left={side === "left" ? 0 : undefined}
          lineHeight="normal"
          opacity={0.2}
          position="absolute"
          right={side === "right" ? 0 : undefined}
          top="-70px"
        >
          {step}
        </Text>
      </Flex>
      <Container flexDirection="column" gap={5} p={0}>
        <Heading
          pb={2.5}
          pl={side === "left" ? 100 : 0}
          pr={side === "right" ? 100 : 0}
          size="md"
        >
          {title}
        </Heading>
        {description && (
          <Container
            fontWeight="medium"
            p={0}
            pr={side === "right" ? 50 : 0}
            textStyle="sm"
          >
            {description.map((item) => getStepP(item))}
          </Container>
        )}
      </Container>
    </Container>
  </Container>
);
