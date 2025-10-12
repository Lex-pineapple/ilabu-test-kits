import { useEffect, useState } from "react";

import {
  Box,
  Card,
  Checkbox,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

import type { AnalysisItemType } from "#constants/card-product-data";
import { ArrowButton } from "#shared/arrow-button";
import { CheckboxButton } from "#shared/card-analysis/components/checkbox-button";

type CardAnalysisProps = AnalysisItemType & {
  cardType: "CHECK" | "INFO";
  selected: boolean;
  handleSelect: (selected: boolean, title: string) => void;
};

export const CardAnalysis = ({
  cardType = "INFO",
  description,
  handleSelect,
  labName,
  price,
  selected,
  testId,
  title,
  uid,
}: CardAnalysisProps) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(selected);
  }, [selected]);

  const handleCheck = () => {
    const checkedNew = !checked;
    setChecked(checkedNew);
    handleSelect(checkedNew, uid);
  };

  return (
    <Card.Root
      bg="url('/lab_apparel.svg') 10px 0 no-repeat, #fff"
      border="none"
      borderRadius={10}
      boxShadow="0 0 10px 2px #0000000f"
      p={4.5}
    >
      <Container p={0}>
        <Card.Header m="0 -18px" p={0} pb={2}>
          <Box
            bg={cardType === "CHECK" ? "#05aa9638" : undefined}
            p="12px 18px 0"
          >
            <Text color="lab_grey.900" textStyle="sm">
              {testId}
            </Text>
            {cardType === "CHECK" && (
              <Text
                fontStyle="italic"
                fontWeight="medium"
                pb={3.5}
                pt={1}
                textStyle="xs"
              >
                Исполнитель: {labName}
              </Text>
            )}
          </Box>
        </Card.Header>
        <Card.Body p="0" pb={3}>
          <Heading lineHeight="14px" pb={2.5} size="sm">
            {title}
          </Heading>
          <Text fontWeight="medium" textStyle="xs">
            {description}
          </Text>
        </Card.Body>
      </Container>
      {cardType === "CHECK" ? (
        <Card.Footer alignItems="flex-end" justifyContent="space-between" p="0">
          <ArrowButton onClick={() => {}} type="PLAIN" />
          <CheckboxButton checked={checked} onCheckedChange={handleCheck} />
        </Card.Footer>
      ) : (
        <Card.Footer justifyContent="flex-end" p="0">
          <ArrowButton onClick={() => {}} />
        </Card.Footer>
      )}
      <Box
        bg="linear-gradient(90deg, #05AA96 0%, #4AB77B 100%)"
        p="0 18px 0 8px"
        position="absolute"
        right={0}
        top={6}
      >
        <Text color="white" fontWeight="semibold">
          {Number(price).toFixed(2)} BYN
        </Text>
      </Box>
    </Card.Root>
  );
};
