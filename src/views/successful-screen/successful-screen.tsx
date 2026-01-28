import { useLoaderData } from "react-router";

import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

import { useAuth } from "#/hooks/use-auth";
import { HeaderWBg } from "#shared/header-w-bg";
import { ShdContainer } from "#shared/shd-container";
import { StepItem } from "#shared/step-item";
import { TestTubeVisual } from "#shared/test-tube-visual";
import type { SuccessDataType } from "#store/types/orders";

export const SuccessfulScreen = () => {
  const { instruction, labAddressData, orderId, tubes } =
    useLoaderData<SuccessDataType>();
  const { logout } = useAuth();

  return (
    <Container p={0} pb={14}>
      <HeaderWBg m="0 -14px 32px">Спасибо, заказ оформлен успешно!</HeaderWBg>
      {tubes && <TestTubeVisual items={tubes} />}
      {orderId && (
        <Box bg="lab_green.50" m="0 -14px" mt={8} p="28px 14px">
          <Text fontWeight="medium">
            Номер вашего заказа:{" "}
            <Text as="span" fontWeight="semibold">
              {orderId}
            </Text>
          </Text>
        </Box>
      )}
      <Container p={0}>
        <Heading
          color="lab_green.900"
          fontWeight="bold"
          mb={7}
          mt={7}
          size="md"
          textTransform="uppercase"
        >
          Что делать дальше?
        </Heading>
        <Flex direction="column" gap={7} p={3.5}>
          <StepItem
            border
            description={instruction}
            side={"right"}
            step={1}
            title={
              "Храните образец в соответствии с правилами хранения, указанными в инструкции."
            }
          />
          <StepItem
            border={false}
            side={"left"}
            step={2}
            title={"Доставьте образец в лабораторию."}
          />
        </Flex>
      </Container>
      <ShdContainer
        bg="url('/location-img.svg') 110% -120% / 40% no-repeat, #fff"
        mb={8}
        p={4}
      >
        {labAddressData ? (
          <>
            <Heading color="lab_green.900" maxW="70%" mb={4} size="sm">
              Адрес лаборатории для самостоятельной доставки
            </Heading>
            <Text textStyle="sm">
              <Text as="span" color="lab_green.900" fontWeight="semibold">
                {labAddressData.name} •
              </Text>
              <Text as="span" fontWeight="semibold">
                {" "}
                {labAddressData.time}
              </Text>
              <Text>{labAddressData.address}</Text>
            </Text>
          </>
        ) : (
          <>
            <Heading color="lab_green.900" maxW="70%" mb={4} size="sm">
              Информация о курьерской доставке Mylab
            </Heading>
            <Text>
              Администратор свяжется с вами для уточнения адреса и времени
              доставки
            </Text>
          </>
        )}
      </ShdContainer>
      <Button onClick={() => logout()} width="100%">
        Вернуться на главную
      </Button>
    </Container>
  );
};
