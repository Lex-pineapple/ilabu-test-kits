import { useState } from "react";

import {
  Card,
  CheckboxCard,
  Container,
  Flex,
  Heading,
  Listbox,
  Text,
} from "@chakra-ui/react";

import type { AnalysisItemType } from "#constants/card-product-data";
import { CircleGraphic } from "#shared/circle-graphic";
import type { ColorType } from "#shared/circle-graphic/circle-graphic";

type ListCardProps = {
  color: ColorType;
  description: string;
  price: number;
  selected: boolean;
  title: string;
  handleSelect: (selected: boolean, title: string) => void;
};

export const ListCard = ({
  color,
  description,
  handleSelect,
  price,
  title,
}: ListCardProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    const checkedNew = !checked;
    setChecked(checkedNew);
    handleSelect(checkedNew, title);
  };

  return (
    <CheckboxCard.Root
      checked={checked}
      onCheckedChange={handleCheck}
      overflow="hidden"
      variant="surface"
    >
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control>
        <CircleGraphic
          color={color}
          positions={{
            x: "-11px",
            y: "-58px",
          }}
          size={156}
        />
        <Container p={0} pl={114}>
          <CheckboxCard.Label>
            <Heading fontFamily="secondary" size="lg">
              {title}
            </Heading>
          </CheckboxCard.Label>
          <CheckboxCard.Description opacity={1}>
            <Flex direction="column" gap={2}>
              <Text color="lab_grey.900" fontFamily="secondary" textStyle="xs">
                {description}
              </Text>
            </Flex>
            <Flex alignItems="center" justify="space-between">
              <Text
                color="lab_red.500"
                fontFamily="secondary"
                fontWeight="medium"
                textStyle="2xl"
              >
                €{price}
              </Text>
              <CheckboxCard.Indicator />
            </Flex>
          </CheckboxCard.Description>
        </Container>
      </CheckboxCard.Control>
    </CheckboxCard.Root>
  );
};
