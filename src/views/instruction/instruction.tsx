import { Link, useLoaderData } from "react-router";

import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

import { PATHS } from "#constants/paths";
import { HeaderWBg } from "#shared/header-w-bg";
import { StepItem } from "#shared/step-item";
import { TestTubeVisual } from "#shared/test-tube-visual";
import type { InstructionType } from "#store/types/orders";

const TestTubeInfoData = [
  {
    code: "XXXXXXX",
    color: "#FF2121",
  },
  {
    code: "XXXXXXX",
    color: "#F2DB09",
  },
  {
    code: "XXXXXXX",
    color: "#FD3BDB",
  },
];

export const Instruction = () => {
  const { context, steps, title } = useLoaderData<InstructionType>();

  return (
    <Flex flexDirection="column" pb={12}>
      <Container p={0}>
        <HeaderWBg m=" 0 -14px" note={title}>
          Инструкция по применению
        </HeaderWBg>
        <Text fontWeight="medium" p="10px 0 27px" textStyle="sm">
          Внимательно прочитайте инструкцию перед началом осуществления
          процедуры самостоятельного взятия биоматериала.
        </Text>
        <TestTubeVisual items={TestTubeInfoData} />
      </Container>
      <Heading
        fontWeight="bold"
        pb={6}
        pt={10}
        size="md"
        textTransform="uppercase"
      >
        {context}
      </Heading>
      <Container height="100%" p={0}>
        <Container p={0}>
          <Flex direction="column" gap={10}>
            {steps.map((item, idx, arr) => (
              <StepItem
                {...item}
                border={idx !== arr.length - 1}
                side={idx % 2 ? "right" : "left"}
              />
            ))}
          </Flex>
          <Link to={PATHS.tubes}>
            <Button mt={9} w="100%">
              Понятно
            </Button>
          </Link>
        </Container>
      </Container>
    </Flex>
  );
};
