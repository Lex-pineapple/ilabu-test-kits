import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSwipeable } from "react-swipeable";

import {
  ActionBar,
  Button,
  CloseButton,
  Collapsible,
  Container,
  DialogBackdrop,
  Flex,
  List,
  Portal,
  ScrollArea,
  Text,
} from "@chakra-ui/react";

import { LoadingBackdrop } from "#/components/drawer-swipeable/loading-backdrop";
import { Spinner } from "#/components/spinner";
import { TrashbinIcpon } from "#assets/icons/trashbin-icon";
import { PATHS } from "#constants/paths";
import { PriceText } from "#shared/price-text";
import { TotalComponent } from "#shared/total-component";
import { usePostOrderAnalysesMutation } from "#store/api/orders-api";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import {
  clearCartItems,
  getCartItems,
  removeCartItems,
} from "#store/slices/cart-slice";
import type { AnalysisType } from "#store/types/analyses";
import { countTotal } from "#utils/count-total";

import styles from "./drawer-swipeable.module.scss";

const DrawerListItem = ({
  disabled,
  item,
  onDelete,
}: {
  item: AnalysisType;
  disabled?: boolean;
  onDelete?: () => void;
}) => (
  <List.Item p="9px 0">
    <Flex alignItems="center" gap={2.5}>
      <Flex
        alignItems="center"
        flexGrow={1}
        justifyContent="space-between"
        p={0}
      >
        <Text fontWeight="semibold" lineHeight="17px" textStyle="sm">
          {item.title}
        </Text>
        <PriceText minW="80px" price={item.price} textStyle="md" />
      </Flex>
      <CloseButton
        disabled={disabled}
        maxH="24px"
        minW="24px"
        onClick={onDelete}
        size="2xl"
      />
    </Flex>
  </List.Item>
);

export const DrawerSwipeable = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector(getCartItems);
  const dispatch = useAppDispatch();
  const [total, setTotal] = useState(countTotal(cartItems));
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [postAnalyses, { isLoading }] = usePostOrderAnalysesMutation();
  const handlers = useSwipeable({
    onSwipedDown: () => setCollapsibleOpen(false),
    onSwipedUp: () => setCollapsibleOpen(true),
  });

  useEffect(() => {
    setTotal(countTotal(cartItems));
  }, [cartItems.length]);

  useEffect(() => {
    if (collapsibleOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [collapsibleOpen]);

  useEffect(() => {
    if (cartItems.length === 0) document.body.style.overflow = "unset";
  }, [cartItems]);

  const onContinueClick = async () => {
    const analysesToUpload = {
      analyses_ids: cartItems.map((item) => item.id),
    };
    const { data } = await postAnalyses(analysesToUpload);

    if (data && data.code === 200) {
      setCollapsibleOpen(false);
      navigate(PATHS.checkout);
    }
  };

  return (
    <>
      <ActionBar.Root open={Boolean(cartItems.length)}>
        <Portal>
          <ActionBar.Positioner
            bottom={0}
            touchAction="none"
            w="100%"
            zIndex={100}
          >
            <div className={styles.thumb}></div>
            <ActionBar.Content
              backdropFilter="blur(14px)"
              bg="#FFFFFFD4"
              border="none"
              borderRadius="20px 20px 0 0"
              boxShadow="0px -1px 14px 0px #00000026"
              flexDirection="column"
              p={6}
              pr={0}
              w="100%"
              {...handlers}
            >
              <Collapsible.Root open={collapsibleOpen} w="100%">
                <Collapsible.Content>
                  <Container mb={5} p={0}>
                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                      mb={3}
                      pr={6}
                    >
                      <Text
                        fontWeight="bold"
                        lineHeight="16px"
                        textTransform="uppercase"
                      >
                        Выбранные тесты:
                      </Text>
                      <Button
                        disabled={isLoading}
                        lineHeight="14px"
                        maxW={100}
                        onClick={() => dispatch(clearCartItems())}
                        textWrap="balance"
                        variant="ghost"
                      >
                        Очистить корзину{" "}
                        <TrashbinIcpon color="lab_green.900" size="xl" />
                      </Button>
                    </Flex>
                    <ScrollArea.Root maxH="60vh" pr={6} variant="always">
                      <ScrollArea.Viewport>
                        <ScrollArea.Content>
                          <List.Root unstyled w="100%">
                            {cartItems.map((item) => (
                              <DrawerListItem
                                disabled={isLoading}
                                item={item}
                                key={item.id}
                                onDelete={() => dispatch(removeCartItems(item))}
                              />
                            ))}
                          </List.Root>
                        </ScrollArea.Content>
                      </ScrollArea.Viewport>
                    </ScrollArea.Root>
                  </Container>
                </Collapsible.Content>
              </Collapsible.Root>
              <Flex
                alignItems="center"
                flexDir="column"
                gap={4}
                justifyContent="space-between"
                pr={6}
                w="100%"
              >
                <TotalComponent total={total} />
                <Button
                  fontSize="16px"
                  loading={isLoading}
                  loadingText="Переходим к оформлению"
                  onClick={onContinueClick}
                  p="12px 28px"
                  textTransform="uppercase"
                  w="100%"
                >
                  Продолжить
                </Button>
              </Flex>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
      {isLoading && <LoadingBackdrop />}
    </>
  );
};
