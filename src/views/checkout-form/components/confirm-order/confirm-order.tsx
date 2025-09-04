import { Link, useNavigate } from "react-router";

import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

import { InfoCard } from "#/views/checkout-form/components/confirm-order/components/info-card";
import { deliveryData, genderData } from "#constants/general";
import { PATHS } from "#constants/paths";
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
      <Container mb={9} p="0 14px">
        <Heading mb={3.5} size="2xl" textTransform="uppercase">
          confirm your order
        </Heading>
        <Text textStyle="xl">
          Please check that your order details are correct.
        </Text>
      </Container>
      <Flex
        flexDir="column"
        gap={8}
        h="100%"
        justifyContent="space-between"
        p="0 14px 30px"
      >
        <InfoCard
          bottomElement={
            <TotalComponent
              justifyContent="flex-end"
              p="0 14px"
              total={countTotal(cartData)}
            />
          }
          items={cartData.map((item) => ({
            data: Number(item.price).toFixed(2).toString(),
            title: item.title,
          }))}
          onOrderChange={() => navigate(`${PATHS._selected}/${currKitUid}`)}
          title="Selected tests:"
        />
        <InfoCard
          items={[{ data: "15.00 р", title: delivery }]}
          onOrderChange={() => dispatch(setFormState("orderDetails"))}
          title="Delivery of biomaterials"
        />
        <InfoCard
          items={[
            { data: formData.email, title: "Email:" },
            { data: formData.firstName, title: "First name:" },
            { data: formData.lastName, title: "Last name:" },
            {
              data: gender,
              title: "Gender:",
            },
            { data: formData.date, title: "Date of birth:" },
          ]}
          onOrderChange={() => dispatch(setFormState("orderDetails"))}
          title="Perconal information"
        />
      </Flex>
      <Link to={PATHS.ordered}>
        <Button
          fontSize="xl"
          fontWeight="light"
          textTransform="uppercase"
          w="100%"
        >
          Pay
        </Button>
      </Link>
    </Flex>
  );
};
