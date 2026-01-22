import { Container, Flex, Heading, Text } from "@chakra-ui/react";

import { AlertBox } from "#/views/instruction/components/alert-box";
import { QuoteBox } from "#/views/instruction/components/quote-box";

type StepItemProps = {
  description: string;
  step: number;
  title: string;
  alert?: string;
  border?: boolean;
  footnote?: string;
  side?: "left" | "right";
};

export const StepItem = ({
  alert,
  border,
  description,
  footnote,
  side,
  step,
  title,
}: StepItemProps) => (
  <div>
    {step === 1 && footnote && <QuoteBox>{footnote}</QuoteBox>}
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
        <Text
          fontWeight="medium"
          pr={side === "right" ? 50 : 0}
          textIndent={side === "left" ? 10 : 0}
          textStyle="sm"
        >
          {description}
        </Text>
      </Container>
    </Container>
    {step !== 1 && footnote && <QuoteBox mb={10}>{footnote}</QuoteBox>}
    {alert && <AlertBox mb={10}>{alert}</AlertBox>}
  </div>
);
