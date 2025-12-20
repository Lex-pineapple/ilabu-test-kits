import reactStringReplace from "react-string-replace";

import {
  Box,
  Container,
  Flex,
  Heading,
  SkeletonText,
  Stack,
  StackSeparator,
  Text,
} from "@chakra-ui/react";

import { ShdContainer } from "#shared/shd-container";

export const AnalysisContentSkeleton = () => (
  <Container p={2} position="relative">
    <Flex flexDir="column">
      <Text color="lab_grey.900" textStyle="sm">
        <SkeletonText noOfLines={1} w="30%" />
      </Text>
      <Heading
        lineHeight="14px"
        pb={4}
        pt={5}
        size="sm"
        textTransform="uppercase"
      >
        <SkeletonText noOfLines={1} p={3} />
      </Heading>
    </Flex>
    <ShdContainer mb={10} p={3}>
      <Text color="lab_green.500" fontWeight="medium" pb={1.5}>
        Исполнитель:
      </Text>
      <Text fontWeight="semibold" pb={4}>
        <SkeletonText />
      </Text>
      <hr />
      <Text color="lab_green.500" fontWeight="medium" pb={1.5} pt={2.5}>
        Тип материала:
      </Text>
      <Text fontWeight="semibold" pb={4}>
        <SkeletonText noOfLines={2} />
      </Text>
      <hr />
      <Text color="lab_green.500" fontWeight="medium" pb={1.5} pt={2.5}>
        Срок исполнения (не учитывает день взятия):
      </Text>
      <Text fontWeight="semibold">
        <SkeletonText noOfLines={1} />
      </Text>
    </ShdContainer>
    <Box bg="lab_green.50" m="0 -8px" mb={4.5} p="16px 20px">
      <Text fontWeight="medium">Описание</Text>
    </Box>
    <Container p={0} pb={6}>
      <SkeletonText noOfLines={6} />
    </Container>
    <Box bg="lab_green.50" m="0 -8px" mb={4.5} p="16px 20px">
      <Text fontWeight="medium">Исследование включает анализ генов:</Text>
    </Box>
    <Stack pb={5} separator={<StackSeparator />}>
      <SkeletonText noOfLines={1} w="80%" />
      <SkeletonText noOfLines={1} w="85%" />
      <SkeletonText noOfLines={1} w="82%" />
    </Stack>
    <Box bg="lab_green.50" borderRadius={10} mb={10} overflow="hidden">
      <Text fontWeight="semibold" p="16px" pb={2}>
        Подготовка
      </Text>
      {[0, 0, 0].map((_, idx) => (
        <Text
          bg={idx % 2 ? "lab_green.50" : "lab_green.100"}
          fontWeight="medium"
          p={2.5}
        >
          <SkeletonText />
        </Text>
      ))}
    </Box>
  </Container>
);
