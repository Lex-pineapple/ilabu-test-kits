import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { MapIcon } from "#assets/icons/map-icon";
import { HeaderWBg } from "#shared/header-w-bg";
import { ShdContainer } from "#shared/shd-container";
import { StepItem } from "#shared/step-item";
import { TestTubeVisual } from "#shared/test-tube-visual";

const TestTubeInfoData = [
  { code: "7385478", color: "#FF2121" },
  { code: "3999102", color: "#F2DB09" },
  { code: "4392010", color: "#FD3BDB" },
];

const stepsData = [
  {
    description:
      "Снимите и утилизируйте перчатки. На стикере упаковки для образца необходимо указать ФИО, дату рождения, домашний адрес, контактный телефон, дату и время сбора материала. Поместите контейнер с образцом в упаковку для образца. Промаркированы должны быть и пробирка, и упаковка для образца.",
    imgSrc: "/instruction/instr_order_1.svg",
    step: 1,
    title: "Упакуйте ваш образец",
  },
  {
    description:
      "При невозможности немедленной доставки в МО, материал может быть сохранен при +2…+8°С в течение 12 часов.",
    imgSrc: "/instruction/instr_order_2.svg",
    step: 2,
    title: "Доставьте образец в лабораторию",
  },
];

export const SuccessfulScreen = () => (
  <Container p={0} pb={14}>
    <HeaderWBg m="0 -14px 32px">Спасибо, ваша оплата прошла успешно</HeaderWBg>
    <TestTubeVisual items={TestTubeInfoData} />
    <Box bg="lab_green.50" m="0 -14px" mt={8} p="28px 14px">
      <Text fontWeight="medium">
        Номер вашего заказа:{" "}
        <Text as="span" fontWeight="semibold">
          А-682083
        </Text>
      </Text>
    </Box>
    <Container p={0}>
      <Heading
        color="lab_green.900"
        fontWeight="bold"
        mb={7}
        mt={7}
        size="md"
        textTransform="uppercase"
      >
        Что делать дальше?
      </Heading>
      <Flex direction="column" gap={7} p={3.5}>
        {stepsData.map((item, idx, arr) => (
          <StepItem
            {...item}
            border={arr.length - 1 !== idx}
            reverse={!(idx % 2)}
          />
        ))}
      </Flex>
    </Container>
    <ShdContainer
      bg="url('/location-img.svg') 110% -120% / 40% no-repeat, #fff"
      p={4}
    >
      <Heading color="lab_green.900" maxW="70%" mb={4} size="sm">
        Адрес лаборатории для самостоятельной доставки
      </Heading>
      <Text textStyle="sm">
        <Text as="span" color="lab_green.900" fontWeight="semibold">
          ИНВИТРО •
        </Text>
        <Text as="span" fontWeight="semibold">
          {" "}
          до 19:00
        </Text>
        <Text>г. Минск, ул. Есенина 60-5</Text>
      </Text>
    </ShdContainer>
  </Container>
);
