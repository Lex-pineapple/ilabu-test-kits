// import reactStringReplace from "react-string-replace";

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

import { AnalysisContentSkeleton } from "#shared/modal/analysis-modal/components/analysis-content-skeleton";
import { AnalysisModalError } from "#shared/modal/analysis-modal/components/analysis-modal-error";
import { ShdContainer } from "#shared/shd-container";
import { useGetAnalysisDetailsQuery } from "#store/api/analyses-api";

type AnalysisModalProps = {
  analysisId: string;
};

export const AnalysisModal = ({ analysisId }: AnalysisModalProps) => {
  const { data, error, isLoading } = useGetAnalysisDetailsQuery(analysisId, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) return <AnalysisContentSkeleton />;
  if (error) return <AnalysisModalError />;

  if (data)
    return (
      <Container p={2} position="relative">
        <Flex flexDir="column">
          <Text color="lab_grey.900" textStyle="sm">
            {data.article}
          </Text>
          <Heading
            lineHeight="14px"
            pb={4}
            pt={5}
            size="sm"
            textTransform="uppercase"
          >
            {data.title}
          </Heading>
        </Flex>
        <ShdContainer mb={10} p={3}>
          <Text color="lab_green.500" fontWeight="medium" pb={1.5}>
            Исполнитель:
          </Text>
          <Text fontWeight="semibold" pb={4}>
            {data.lab_name}
          </Text>
          <hr />
          {/* <Text color="lab_green.500" fontWeight="medium" pb={1.5} pt={2.5}>
            Тип материала:
          </Text>
          <Text fontWeight="semibold" pb={4}>
            {AnalysisData.materialType}
          </Text>
          <hr /> */}
          <Text color="lab_green.500" fontWeight="medium" pb={1.5} pt={2.5}>
            Срок исполнения (не учитывает день взятия):
          </Text>
          <Text fontWeight="semibold">{data.execution_time_days}</Text>
        </ShdContainer>
        <Box bg="lab_green.50" m="0 -8px" mb={4.5} p="16px 20px">
          <Text fontWeight="medium">Описание</Text>
        </Box>
        <Text as="p" fontWeight="semibold" pb={6} textStyle="sm">
          {data.description}
        </Text>
        {/* {AnalysisData.description.split("<SPLIT>").map((item, idx) => (
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
        ))} */}
        {/* <Box bg="lab_green.50" m="0 -8px" mb={4.5} p="16px 20px">
          <Text fontWeight="medium">Исследование включает анализ генов:</Text>
        </Box>
        <Stack pb={5} separator={<StackSeparator />}>
          {AnalysisData.analysisItems.map((item) => (
            <Flex p="10px 0">
              <Text
                as="span"
                color="lab_green.900"
                fontWeight="semibold"
                mr={2}
              >
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
        </Box> */}
        <Box
          bg="linear-gradient(90deg, #05AA96 0%, #4AB77B 100%)"
          p="0 18px 0 8px"
          position="absolute"
          right={0}
          top={2}
        >
          <Text color="white" fontWeight="semibold">
            {Number(data.price).toFixed(2)} BYN
          </Text>
        </Box>
      </Container>
    );
};
