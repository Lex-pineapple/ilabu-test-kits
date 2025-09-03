import { Card, Container, Flex, Heading, Text } from "@chakra-ui/react";

type CardAnalysisProps = {
  description: string;
  price: number;
  title: string;
};

export const CardAnalysis = ({
  description,
  price,
  title,
}: CardAnalysisProps) => (
  <Card.Root bg="lab_grey.400" border="none" borderRadius="none">
    <Flex alignItems="center">
      <Container p={0}>
        <Card.Header p="12px 10px 0">
          <Heading fontFamily="secondary" size="lg">
            {title}
          </Heading>
        </Card.Header>
        <Card.Body p="0 10px 12px">
          <Text color="lab_grey.900" fontFamily="secondary" textStyle="xs">
            {description}
          </Text>
        </Card.Body>
      </Container>
      <Card.Footer p="0 10px">
        <Text
          color="lab_red.500"
          fontFamily="secondary"
          fontWeight="medium"
          textStyle="2xl"
        >
          €{price}
        </Text>
      </Card.Footer>
    </Flex>
  </Card.Root>
);
