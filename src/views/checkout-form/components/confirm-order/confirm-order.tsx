import { useNavigate } from "react-router";
import Animate from "react-smooth";

import { Button, Flex } from "@chakra-ui/react";

import { InfoCard } from "#/views/checkout-form/components/confirm-order/components/info-card";
import { usePayment } from "#/views/checkout-form/components/confirm-order/use-payment";
import { deliveryData, genderData } from "#constants/general";
import { PATHS } from "#constants/paths";
import { TitleCard } from "#shared/title-card";
import { TotalComponent } from "#shared/total-component";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import { getCartItems } from "#store/slices/cart-slice";
import { getFormData, setFormState } from "#store/slices/form-slice";
import { countTotal } from "#utils/count-total";

export const ConfirmOrder = () => {
  const formData = useAppSelector(getFormData);
  const cartData = useAppSelector(getCartItems);
  const currKitUid = localStorage.getItem("kit_id");
  const { isLoading, onPayClick } = usePayment();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const gender = genderData.find(
    (item) => item.value === formData.gender,
  )?.label;
  const deliveryInfo = deliveryData.find(
    (item) => item.value === formData.delivery,
  )?.label;
  const delivery =
    deliveryInfo === "Courier" ? "Delivery by courier" : deliveryInfo;

  const onPayOrderClick = () => {
    onPayClick();
  };

  return (
    <Animate attributeName="opacity" from="0" to="1">
      <Flex flexDir="column" h="100%">
        <TitleCard
          content={"Проверьте, что все детали заказа верны"}
          heading={"Подтверждение заказа"}
          mb={8}
        />
        <Flex
          flexDir="column"
          gap={2.5}
          h="100%"
          justifyContent="space-between"
        >
          <InfoCard
            bottomElement={
              <TotalComponent
                justifyContent="center"
                mt={2}
                total={countTotal(cartData)}
              />
            }
            items={cartData.map((item) => ({
              data: `${Number(item.price).toFixed(2)} BYN`,
              title: item.title,
            }))}
            onOrderChange={() =>
              navigate(`${PATHS._selected}/${currKitUid}`, {
                viewTransition: true,
              })
            }
            title="Выбранные тесты"
            whiteSpace="nowrap"
          />
          <InfoCard
            items={[{ data: "33.00 BYN", title: delivery }]}
            onOrderChange={() => dispatch(setFormState("orderDetails"))}
            title="Способ доставки"
            whiteSpace="nowrap"
          />
          <InfoCard
            breakWord="break-all"
            items={[
              { data: formData.email, title: "Email" },
              { data: formData.firstName, title: "Имя" },
              { data: formData.lastName, title: "Фамилия" },
              { data: formData.middleName, title: "Отчество" },
              {
                data: gender,
                title: "Пол",
              },
              { data: formData.date, title: "Дата рождения" },
            ]}
            onOrderChange={() => dispatch(setFormState("orderDetails"))}
            title="Персональная информация"
          />
        </Flex>
        <Button
          loading={isLoading}
          loadingText="Переходим к опалте..."
          mt={9}
          onClick={onPayOrderClick}
          textTransform="uppercase"
          w="100%"
        >
          Оплатить
        </Button>
      </Flex>
    </Animate>
  );
};
