import { useState } from "react";
import cn from "classnames";

import { Collapsible, Flex, Heading } from "@chakra-ui/react";

import { CollapsibleIcon } from "#assets/icons/collapsible-icon";
import { CardAnalysis } from "#shared/card-analysis";
import type { AnalysisType } from "#store/types/analyses";

import styles from "./card-collapsible.module.scss";

type CardCollapsibleProps = {
  description: string;
  items: AnalysisType[];
  title: string;
};

export const CardCollapsible = ({ items }: CardCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible.Root m={"0 -14px"} open={isOpen}>
      <Collapsible.Trigger cursor="pointer" onClick={() => setIsOpen(!isOpen)}>
        <Flex alignItems="center" gap={2} p="0 14px" pb={3}>
          <Heading size="md" textTransform="uppercase">
            Список анализов
          </Heading>
          <CollapsibleIcon
            className={cn(styles.icon, {
              [styles["icon--open"]]: isOpen,
            })}
            size="sm"
          />
        </Flex>
      </Collapsible.Trigger>
      <Collapsible.Content p="0 14px" pt={2.5}>
        <Flex direction="column" gap={2.5} pb={2.5}>
          {items.map((item) => (
            <CardAnalysis {...item} cardType="INFO" key={item.id} />
          ))}
        </Flex>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
