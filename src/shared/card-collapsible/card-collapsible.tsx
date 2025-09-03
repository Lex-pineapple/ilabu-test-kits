import { useState } from "react";
import cn from "classnames";

import {
  Button,
  Card,
  Collapsible,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

import { ArrowDownIcon } from "#assets/icons/arrow-down";
import type { AnalysisItemType } from "#constants/card-product-data";
import { CardAnalysis } from "#shared/card-collapsible/components/card-analysis";

import styles from "./card-collapsible.module.scss";

type CardCollapsibleProps = {
  description: string;
  items: AnalysisItemType[];
  title: string;
};

export const CardCollapsible = ({
  description,
  items,
  title,
}: CardCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible.Root onClick={() => setIsOpen(!isOpen)} open={isOpen}>
      <Collapsible.Trigger>
        <Card.Root bg="lab_grey.400" border="none" borderRadius="none" pl={135}>
          <Flex alignItems="center" gap={3} p="0 14px 0 0">
            <Container p={0}>
              <Card.Header p="12px 0">
                <Heading fontFamily="secondary" size="lg">
                  {title}
                </Heading>
              </Card.Header>
              <Card.Body p={0} pb={3}>
                <Text
                  color="lab_grey.900"
                  fontFamily="secondary"
                  textStyle="xs"
                >
                  {description}
                </Text>
              </Card.Body>
            </Container>
            <ArrowDownIcon
              className={cn(styles.icon, {
                [styles["icon--open"]]: isOpen,
              })}
              size="2xl"
            />
          </Flex>
        </Card.Root>
      </Collapsible.Trigger>
      <Collapsible.Content pt={2.5}>
        <Flex direction="column" gap={2.5}>
          {items.map((item) => (
            <CardAnalysis {...item} />
          ))}
        </Flex>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
