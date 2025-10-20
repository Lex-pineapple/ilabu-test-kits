import reactStringReplace from "react-string-replace";

import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  StackSeparator,
  Text,
} from "@chakra-ui/react";

import { ShdContainer } from "#shared/shd-container";

// type AnalysisModalProps = {
//   analysisUid: string;
// };

const AnalysisData = {
  analysisItems: [
    ["LCT (T-13910C)", "ген фермента лактазы"],
    ["VDR (ApaI)", "ген рецептора витамина D"],
    ["VDR (BsmI)", "ген рецептора витамина D"],
    ["VDR (Cdx2)", "ген рецептора витамина D"],
    ["VDR (TaqI)", "ген рецептора витамина D"],
    ["COL1A1 (G441T)", "ген альфа 1 цепи коллагена 1"],
    ["COL1A2 (A18162G)", "ген альфа 2 цепи коллагена 1"],
  ],
  description:
    "Остеопороз (ОП) – системное заболевание скелета, характеризующееся снижением прочности костной массы, изменением ее структуры и повышенным риском переломов. По данным Всемирной организации здравоохранения, у 15–20% людей старше 50 лет выявляются остеопоротические изменения, причем у 30% из них это может привести к переломам.<SPLIT>Костная ткань является важнейшим источником кальция для поддержания его нормального физиологического уровня в организме. При нарушении «баланса» под влиянием ряда факторов, к которым относятся особенности питания, курение, прием лекарственных средств, гормональные нарушения и т.д., количество резорбируемой (отдающей кальций) костной ткани превышает количество формируемой, и плотность костной ткани снижается, что ведет к развитию остеопороза.<SPLIT>Среди значимых генов изучаются полиморфизмы в гене рецептора витамина D (VDR) и в гене СOL1A1 альфа 1 цепи коллагена 1 типа. Присоединив к себе активную форму витамина D3 (кальцитриол), молекула рецептора (VDR) запускает работу важнейших компонентов кальциевого гомеостаза организма. Коллаген 1 типа составляет до 90% матрикса костной ткани. У обладателей аллеля риска 1546Т отмечено снижение костной массы и риск более частых переломов костей. Важными для определения предрасположенности к остеопорозу является также ген LCT.",
  id: "INSG48",
  interestingFact:
    "Исследования показали, что минеральная плотность кости на 60–85% зависит от генотипа человека и природа этой наследственности закодирована во многих генах.",
  keywords: [
    "у 15–20% людей старше 50 лет",
    "особенности питания, курение, прием лекарственных средств, гормональные нарушения",
  ],
  lab: "Институт генетики и цитологии НАН Беларуси",
  materialType: "Буккальный эпителий",
  prepareSteps: [
    "За полчаса до сбора материала запрещено:\n– есть, пить, жевать жвачку, чистить зубы, курить и целоваться",
    "Непосредственно перед процедурой прополощите рот теплой водой",
    "Для сбора биоматериала следуйте инструкции в составе набора",
  ],
  price: 140.0,
  timePeriod: 35,
  title: "ДНК-анализ предрасположенности к остеопорозу",
};

export const AnalysisModal = () => (
  // TODO: request for analysisn data
  <Container p={2} position="relative">
    <Flex flexDir="column">
      <Text color="lab_grey.900" textStyle="sm">
        {AnalysisData.id}
      </Text>
      <Heading
        lineHeight="14px"
        pb={4}
        pt={5}
        size="sm"
        textTransform="uppercase"
      >
        {AnalysisData.title}
      </Heading>
    </Flex>
    <ShdContainer mb={10} p={3}>
      <Text color="lab_green.500" fontWeight="medium" pb={1.5}>
        Исполнитель:
      </Text>
      <Text fontWeight="semibold" pb={4}>
        {AnalysisData.lab}
      </Text>
      <hr />
      <Text color="lab_green.500" fontWeight="medium" pb={1.5} pt={2.5}>
        Тип материала:
      </Text>
      <Text fontWeight="semibold" pb={4}>
        {AnalysisData.materialType}
      </Text>
      <hr />
      <Text color="lab_green.500" fontWeight="medium" pb={1.5} pt={2.5}>
        Срок исполнения (не учитывает день взятия):
      </Text>
      <Text fontWeight="semibold">
        До {AnalysisData.timePeriod} рабочих дней
      </Text>
    </ShdContainer>
    <Box bg="lab_green.50" m="0 -8px" mb={4.5} p="16px 20px">
      <Text fontWeight="medium">Описание</Text>
    </Box>
    {AnalysisData.description.split("<SPLIT>").map((item, idx) => (
      <>
        {idx === 2 && AnalysisData.interestingFact && (
          <ShdContainer
            color="lab_green.900"
            fontWeight="semibold"
            mb={6}
            p="14px 10px"
          >
            {AnalysisData.interestingFact}
          </ShdContainer>
        )}
        <Text as="p" fontWeight="semibold" pb={6} textStyle="sm">
          {reactStringReplace(
            item,
            AnalysisData.keywords.find((keyword) => item.includes(keyword)),
            (match) => (
              <Text as="span" color="lab_green.900">
                {match}
              </Text>
            ),
          )}
        </Text>
      </>
    ))}
    <Box bg="lab_green.50" m="0 -8px" mb={4.5} p="16px 20px">
      <Text fontWeight="medium">Исследование включает анализ генов:</Text>
    </Box>
    <Stack pb={5} separator={<StackSeparator />}>
      {AnalysisData.analysisItems.map((item) => (
        <Flex p="10px 0">
          <Text as="span" color="lab_green.900" fontWeight="semibold" mr={2}>
            {item[0]}
          </Text>
          <Text as="span" fontWeight="medium">
            {item[1]}
          </Text>
        </Flex>
      ))}
    </Stack>
    <Box bg="lab_green.50" borderRadius={10} mb={10} overflow="hidden">
      <Text fontWeight="semibold" p="16px" pb={2}>
        Подготовка
      </Text>
      {AnalysisData.prepareSteps.map((item, idx) => (
        <Text
          bg={idx % 2 ? "lab_green.50" : "lab_green.100"}
          fontWeight="medium"
          p={2.5}
        >
          {item}
        </Text>
      ))}
    </Box>
    <Box
      bg="linear-gradient(90deg, #05AA96 0%, #4AB77B 100%)"
      p="0 18px 0 8px"
      position="absolute"
      right={0}
      top={2}
    >
      <Text color="white" fontWeight="semibold">
        {Number(AnalysisData.price).toFixed(2)} BYN
      </Text>
    </Box>
  </Container>
);
