import { Link, useNavigate } from "react-router";

import { Button, Flex } from "@chakra-ui/react";

import { InfoCard } from "#/views/checkout-form/components/confirm-order/components/info-card";
import { deliveryData, genderData } from "#constants/general";
import { PATHS } from "#constants/paths";
import { TitleCard } from "#shared/title-card";
import { TotalComponent } from "#shared/total-component";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import { getCartItems } from "#store/slices/cart-slice";
import { getFormData, setFormState } from "#store/slices/form-slice";
import { getCyrrKitUid } from "#store/slices/main-slice";
import { countTotal } from "#utils/count-total";

export const ConfirmOrder = () => {
  const formData = useAppSelector(getFormData);
  const cartData = useAppSelector(getCartItems);
  const currKitUid = useAppSelector(getCyrrKitUid);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const gender = genderData.items.find(
    (item) => item.value === formData.gender[0],
  )?.label;
  const deliveryInfo = deliveryData.items.find(
    (item) => item.value === formData.delivery[0],
  )?.label;
  const delivery =
    deliveryInfo === "Courier" ? "Delivery by courier" : deliveryInfo;

  return (
    <Flex flexDir="column" h="100%">
      <TitleCard
        content={"Проверьте, что все детали заказа верны"}
        heading={"Подтверждение заказа"}
        mb={8}
      />
      <Flex flexDir="column" gap={2.5} h="100%" justifyContent="space-between">
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
          onOrderChange={() => navigate(`${PATHS._selected}/${currKitUid}`)}
          title="Выбранные тесты"
          whiteSpace="nowrap"
        />
        <InfoCard
          items={[{ data: "15.00 BYN", title: delivery }]}
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
      <Link to={PATHS.ordered}>
        <Button mt={9} textTransform="uppercase" w="100%">
          Оплатить
        </Button>
      </Link>
    </Flex>
  );
};
