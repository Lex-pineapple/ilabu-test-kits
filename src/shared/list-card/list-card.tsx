import { useEffect, useState } from "react";

import { CheckboxCard, Container, Flex, Heading, Text } from "@chakra-ui/react";

import { CircleGraphic } from "#shared/circle-graphic";
import type { ColorType } from "#shared/circle-graphic/circle-graphic";
import { PriceText } from "#shared/price-text";

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
  selected,
  title,
}: ListCardProps) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(selected);
  }, [selected]);

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
              <PriceText price={price} />
              <CheckboxCard.Indicator />
            </Flex>
          </CheckboxCard.Description>
        </Container>
      </CheckboxCard.Control>
    </CheckboxCard.Root>
  );
};
