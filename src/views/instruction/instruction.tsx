import { Link } from "react-router";

import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

import { AlertBox } from "#/views/instruction/components/alert-box";
import { QuoteBox } from "#/views/instruction/components/quote-box";
import { PATHS } from "#constants/paths";
import { HeaderWBg } from "#shared/header-w-bg";
import { StepItem } from "#shared/step-item";
import { TestTubeVisual } from "#shared/test-tube-visual";

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

const stepsData = [
  {
    description:
      "Наденьте перчатки. Частично сорвите отслаиваемую пленку на упаковке сваба. Подготовьте ножницы и стакан (не входят в состав набора), в который можно будет поместить свабы для просушки",
    imgSrc: "/instruction/instr_1.svg",
    step: 1,
    title: "Подготовьтесь к сбору биоматериала",
  },
  {
    description:
      "Извлеките сваб. Осторожно поместите сваб в ротовую полость не касаясь языка и зубов. Прижмите сваб к внутренней поверхности щеки. Совершайте круговые движения свабом по поверхности обеих щек не менее 30 раз (примерно 30 секунд). Поместите сваб в стакан ватным наконечником вверх для просушки.",
    imgSrc: "/instruction/instr_2.svg",
    step: 2,
    title: "Осуществите сбор биоматериала",
  },
  {
    description:
      "На стикере упаковки для образца укажите ФИО, дату рождения, домашний адрес, контактный телефон, дату и время сбора материала. Просушенные свабы поместите в упаковку для образца так, чтобы мягкие концы свабов находились внутри упаковки. Ножницами отрежьте концы свабов так, чтобы они полностью поместились в упаковку для образца. Утилизируйте оставшиеся концы свабов с пробками. Снимите и утилизируйте перчатки.",
    imgSrc: "/instruction/instr_3.svg",
    step: 3,
    title: "Упакуйте ваш образец",
  },
  {
    description:
      "При невозможности доставить в день взятия пробирку с крышкой можно хранить при комнатной температуре (+20...+25°C) или в холодильнике (+4…+8°C) до 10 дней.",
    imgSrc: "/instruction/instr_4.svg",
    step: 4,
    title: "Доставьте образец в лабораторию",
  },
];

export const Instruction = () => (
  <Flex flexDirection="column" pb={12}>
    <Container p={0}>
      <HeaderWBg m=" 0 -14px">Инструкиця по применению</HeaderWBg>
      <Text fontWeight="medium" p="10px 0 27px" textStyle="sm">
        Внимательно прочитайте инструкцию перед началом осуществления процедуры
        самостоятельного взятия биоматериала.
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
      Этапы забора мазка с внутренней стороны щеки (буккальные эпителий)
    </Heading>
    <Container height="100%" p={0}>
      <QuoteBox>
        Примечание: Не ешьте, не пейте, не чистите зубы, не жуйте жвачку, не
        целуйтесь и не курите минимум за 30 минут перед взятием биоматериала.
        Перед процедурой рекомендуется прополоскать рот теплой водой
      </QuoteBox>
      <Container p={0} pt={14}>
        <Flex direction="column" gap={10}>
          {stepsData.slice(0, 2).map((item, idx, arr) => (
            <StepItem
              {...item}
              border={idx !== arr.length - 1}
              reverse={!(idx % 2)}
            />
          ))}
        </Flex>
        <QuoteBox mb={10}>
          Примечание: простое прокручивание сваба в одной части щеки или
          оставление его во рту без движения является неправильной техникой и
          может привести к недостаточному количеству образца
        </QuoteBox>
        <AlertBox mb={10}>
          Внимание! Не дотрагивайтесь до мягкого конца сваба и не кладите его на
          поверхность в ходе всей процедуры взятия биоматериала!
        </AlertBox>
        <Text fontWeight="medium" mb={10} textStyle="sm">
          Повторите все вышеописанные действия с двумя оставшимися свабами в
          составе набора. Просушите все свабы в течение 1 часа
        </Text>
        <AlertBox mb={10}>
          Внимание! Не сушить под прямыми солнечными лучами! Не сушить под
          лампой!
        </AlertBox>
        <Flex direction="column" gap={10}>
          {stepsData.slice(2, 4).map((item, idx, arr) => (
            <StepItem
              {...item}
              border={idx !== arr.length - 1}
              reverse={!(idx % 2)}
            />
          ))}
        </Flex>
        <Link to={PATHS.checkout}>
          <Button mt={9} w="100%">
            Продолжить
          </Button>
        </Link>
      </Container>
    </Container>
  </Flex>
);
