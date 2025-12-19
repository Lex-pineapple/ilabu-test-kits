import { useState } from "react";
import cn from "classnames";

import { Collapsible, Container, Flex, List, Text } from "@chakra-ui/react";

import type { FAQDataType } from "#/views/faq/consts";
import { CollapsibleIcon } from "#assets/icons/collapsible-icon";
import { ShdContainer } from "#shared/shd-container";

import styles from "./faq-collapsible.module.scss";

type FAQCollapsibleProps = {
  open?: boolean;
} & FAQDataType;

export const FAQCollapsible = ({
  content,
  id,
  open,
  title,
}: FAQCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(open ?? false);

  return (
    <Collapsible.Root
      m="0 -14px"
      onClick={() => setIsOpen(!isOpen)}
      open={isOpen}
    >
      <Collapsible.Trigger p={3.5} pb={2.5} pt={2.5} w="100%">
        <Flex
          alignItems="center"
          borderBottom="1px solid #0000004a"
          gap={10}
          justifyContent="space-between"
          pb={2.5}
        >
          <Text
            color="lab_green.900"
            fontWeight="medium"
            id={id}
            textAlign="left"
            textStyle="sm"
          >
            {title}
          </Text>
          <CollapsibleIcon
            className={cn(styles.icon, {
              [styles["icon--open"]]: isOpen,
            })}
            size="sm"
          />
        </Flex>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Container p={2.5}>
          <ShdContainer p={3}>
            {Array.isArray(content) ? (
              <List.Root as="ol" gap={5} pl={4}>
                {content.map((item) => (
                  <List.Item fontWeight="medium" pl={1} textStyle="sm">
                    {item}
                  </List.Item>
                ))}
              </List.Root>
            ) : (
              <Text fontWeight="medium" textStyle="sm">
                {content}
              </Text>
            )}
          </ShdContainer>
        </Container>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
