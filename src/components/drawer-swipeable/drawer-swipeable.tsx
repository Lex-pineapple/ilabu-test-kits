import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSwipeable } from "react-swipeable";

import {
  ActionBar,
  Button,
  CloseButton,
  Collapsible,
  Container,
  Flex,
  List,
  Portal,
  Text,
} from "@chakra-ui/react";

import type { AnalysisItemType } from "#constants/card-product-data";
import { PATHS } from "#constants/paths";
import { PriceText } from "#shared/price-text";
import { TotalComponent } from "#shared/total-component";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import { getCartItems, removeCartItems } from "#store/slices/cart-slice";
import { countTotal } from "#utils/count-total";

import styles from "./drawer-swipeable.module.scss";

const DrawerListItem = ({
  item,
  onDelete,
}: {
  item: AnalysisItemType;
  onDelete?: () => void;
}) => (
  <List.Item borderBottom="1px solid #CBCBCB" p="9px 0">
    <Flex gap={2.5} justifyContent="space-between">
      <Container p={0}>
        <Text fontWeight="medium">{item.title}</Text>
        <PriceText minW="80px" price={item.price} textStyle="md" />
      </Container>
      <CloseButton onClick={onDelete} />
    </Flex>
  </List.Item>
);

export const DrawerSwipeable = () => {
  const cartItems = useAppSelector(getCartItems);
  const dispatch = useAppDispatch();
  const [total, setTotal] = useState(countTotal(cartItems));
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const handlers = useSwipeable({
    onSwipedDown: () => setCollapsibleOpen(false),
    onSwipedUp: () => setCollapsibleOpen(true),
  });

  useEffect(() => {
    setTotal(countTotal(cartItems));
  }, [cartItems.length]);

  return (
    <ActionBar.Root open={Boolean(cartItems.length)}>
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
            <Collapsible.Root open={collapsibleOpen} w="100%">
              <Collapsible.Content>
                <Container mb={20} p={0}>
                  <Text fontWeight="bold" mb={3}>
                    Selected tests:
                  </Text>
                  <List.Root unstyled w="100%">
                    {cartItems.map((item) => (
                      <DrawerListItem
                        item={item}
                        key={item.uid}
                        onDelete={() => dispatch(removeCartItems(item))}
                      />
                    ))}
                  </List.Root>
                </Container>
              </Collapsible.Content>
            </Collapsible.Root>
            <Flex alignItems="center" justifyContent="space-between" w="100%">
              <Link to={PATHS.instruction}>
                <Button fontSize="16px" p="12px 28px" textTransform="uppercase">
                  continue
                </Button>
              </Link>
              <TotalComponent total={total} />
            </Flex>
          </ActionBar.Content>
        </ActionBar.Positioner>
      </Portal>
    </ActionBar.Root>
  );
};
