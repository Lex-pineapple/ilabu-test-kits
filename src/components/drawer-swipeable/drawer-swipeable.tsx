import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import {
  ActionBar,
  Button,
  Collapsible,
  Container,
  Flex,
  List,
  Portal,
  Text,
} from "@chakra-ui/react";

import type { AnalysisItemType } from "#constants/card-product-data";
import { countTotal } from "#utils/count-total";

import styles from "./drawer-swipeable.module.scss";

type DrawerSwipeableProps = {
  items: AnalysisItemType[];
};

const DrawerListItem = ({
  item,
  onDelete,
}: {
  item: AnalysisItemType;
  onDelete?: (item: AnalysisItemType) => void;
}) => (
  <List.Item borderBottom="1px solid #CBCBCB" p="9px 0">
    <Flex justifyContent="space-between">
      <Text fontWeight="medium">{item.title}</Text>
      <Text color="lab_red.500" fontWeight="medium">
        {item.price}
      </Text>
    </Flex>
  </List.Item>
);

export const DrawerSwipeable = ({ items }: DrawerSwipeableProps) => {
  const [total, setTotal] = useState(countTotal(items));
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const handlers = useSwipeable({
    onSwipedDown: () => setCollapsibleOpen(false),
    onSwipedUp: () => setCollapsibleOpen(true),
  });

  useEffect(() => {
    setTotal(countTotal(items));
  }, [items.length]);

  return (
    <ActionBar.Root open={Boolean(items.length)}>
      <Portal>
        <ActionBar.Positioner bottom={0} touchAction="none" w="100%">
          <div className={styles.thumb}></div>
          <ActionBar.Content
            backdropFilter="blur(14px)"
            bg="#FFFFFFD4"
            border="none"
            borderRadius="none"
            boxShadow="0px -1px 14px 0px #00000026"
            flexDirection="column"
            p={6}
            w="100%"
            {...handlers}
          >
            <Collapsible.Root open={collapsibleOpen}>
              <Collapsible.Content>
                <Container mb={20} p={0}>
                  <Text fontWeight="bold" mb={3}>
                    Selected tests:
                  </Text>
                  <List.Root unstyled w="100%">
                    {items.map((item) => (
                      <DrawerListItem item={item} />
                    ))}
                  </List.Root>
                </Container>
              </Collapsible.Content>
            </Collapsible.Root>
            <Flex alignItems="center" justifyContent="space-between" w="100%">
              <Button fontSize="16px" p="12px 28px" textTransform="uppercase">
                continue
              </Button>
              <Flex alignItems="center" gap={2.5}>
                <Text fontWeight="medium" textStyle="md">
                  Total:{" "}
                </Text>
                <Text color="lab_red.500" fontWeight="medium" textStyle="2xl">
                  € {total}
                </Text>
              </Flex>
            </Flex>
          </ActionBar.Content>
        </ActionBar.Positioner>
      </Portal>
    </ActionBar.Root>
  );
};
