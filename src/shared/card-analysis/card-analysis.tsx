import { useEffect, useState } from "react";

import { Box, Card, Container, Heading, Text } from "@chakra-ui/react";

import type { AnalysisItemType } from "#constants/card-product-data";
import { ArrowButton } from "#shared/arrow-button";
import { CheckboxButton } from "#shared/card-analysis/components/checkbox-button";
import { modal } from "#shared/modal";
import type { AnalysisType } from "#store/types/analyses";

type CardAnalysisProps = AnalysisType & {
  cardType: "CHECK" | "INFO";
  disabled?: boolean;
  selected?: boolean;
  handleSelect?: (selected: boolean, title: string) => void;
};

export const CardAnalysis = ({
  cardType = "INFO",
  description,
  disabled,
  handleSelect,
  id,
  lab_name,
  price,
  selected,
  title,
}: CardAnalysisProps) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(!!selected);
  }, [selected]);

  const handleCheck = () => {
    const checkedNew = !checked;
    setChecked(checkedNew);
    handleSelect?.(checkedNew, id);
  };

  return (
    <Card.Root
      bg={"url('/lab_apparel.svg') 10px 0 no-repeat, #fff"}
      border="none"
      borderRadius={10}
      boxShadow="0 0 10px 2px #0000000f"
      filter={disabled ? "brightness(70%)" : "none"}
      p={4.5}
      pointerEvents={disabled ? "none" : "auto"}
    >
      <Container p={0}>
        <Card.Header m="0 -18px" p={0} pb={2}>
          <Box
            bg={cardType === "CHECK" ? "#05aa9638" : undefined}
            p="12px 18px 0"
          >
            {/* TODO: добавить код набора */}
            {/* <Text color="lab_grey.900" textStyle="sm">
              {testId}
            </Text> */}
            {cardType === "CHECK" && (
              <Text
                fontStyle="italic"
                fontWeight="medium"
                pb={3.5}
                pt={1}
                textStyle="xs"
              >
                Исполнитель: {lab_name}
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
          <ArrowButton
            btnType={"PLAIN" as const}
            disabled={disabled}
            onClick={() =>
              modal.open("analysis", {
                modalData: {
                  analysisId: id,
                },
                modalType: "ANALYSIS-ITEM",
                placement: "top",
              })
            }
          />
          <CheckboxButton
            checked={checked}
            disabled={disabled}
            onCheckedChange={handleCheck}
          />
        </Card.Footer>
      ) : (
        <Card.Footer justifyContent="flex-end" p="0">
          <ArrowButton
            disabled={disabled}
            onClick={() =>
              modal.open("analysis", {
                modalData: {
                  analysisId: id,
                },
                modalType: "ANALYSIS-ITEM",
                placement: "top",
              })
            }
          />
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
