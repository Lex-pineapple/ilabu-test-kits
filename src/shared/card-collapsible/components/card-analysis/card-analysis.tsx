import { Box, Card, Container, Flex, Heading, Text } from "@chakra-ui/react";

import { ArrowButton } from "#shared/arrow-button";
import { PriceText } from "#shared/price-text";

type CardAnalysisProps = {
  description: string;
  price: number;
  testId: string;
  title: string;
};

export const CardAnalysis = ({
  description,
  price,
  testId,
  title,
}: CardAnalysisProps) => (
  <Card.Root
    bg="url('/lab_apparel.svg') 10px 0 no-repeat"
    border="none"
    borderRadius={10}
    boxShadow="0 0 10px 2px #0000000f"
    p={4.5}
  >
    <Container p={0}>
      <Card.Header p={0} pb={2.5}>
        <Text color="lab_grey.900" pb={5} textStyle="sm">
          {testId}
        </Text>
        <Heading lineHeight="14px" size="sm">
          {title}
        </Heading>
      </Card.Header>
      <Card.Body p="0" pb={3}>
        <Text fontWeight="medium" textStyle="xs">
          {description}
        </Text>
      </Card.Body>
    </Container>
    <Card.Footer justifyContent="flex-end" p="0">
      <ArrowButton onClick={() => {}} />
    </Card.Footer>
    <Box
      bg="linear-gradient(90deg, #05AA96 0%, #4AB77B 100%)"
      p="0 18px 0 8px"
      position="absolute"
      right={0}
    >
      <Text color="white" fontWeight="semibold">
        {Number(price).toFixed(2)} BYN
      </Text>
    </Box>
  </Card.Root>
);
