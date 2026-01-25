import Animate from "react-smooth";

import { Button, Center, Flex, PinInput, Text } from "@chakra-ui/react";

import { Spinner } from "#/components/spinner";
import { OtpError } from "#/views/checkout-form/components/email-confirmation/components/otp-error";
import { Timer } from "#/views/checkout-form/components/email-confirmation/components/timer";
import { useOtp } from "#/views/checkout-form/components/email-confirmation/use-otp";
import { ArrowRight } from "#assets/icons/arrow-right";
import { TitleCard } from "#shared/title-card";
import { useAppDispatch } from "#store/hooks";
import { setFormState } from "#store/slices/form-slice";

export const EmailConfirmation = () => {
  const {
    isConfirmLoading,
    isError,
    isLoading,
    isSendSuccess,
    otp,
    sendOtp,
    setOtp,
  } = useOtp();
  const dispatch = useAppDispatch();

  return (
    <Animate attributeName="opacity" from="0" to="1">
      <Flex flexDir="column" h="70vh" justifyContent="space-between">
        {isError ? (
          <OtpError loading={isLoading} onResend={sendOtp} />
        ) : (
          <>
            <div>
              <Button
                mb={4}
                onClick={() => dispatch(setFormState("orderDetails"))}
                variant="ghost"
              >
                <ArrowRight transform="rotate(180deg)" /> Назад
              </Button>
              <TitleCard
                content={
                  "Мы отправили письмо-подтверждение на ваш e-mail. Перейдите по ссылке либо введите код из письма вручную"
                }
                heading={"Подтверждение email"}
                highlight="e-mail"
                mb={8}
              />
              <Text
                fontWeight="semibold"
                mb={4}
                textAlign="center"
                textStyle="sm"
              >
                введите код
              </Text>
              <Center
                bg="lab_green.50"
                borderRadius={10}
                justifyContent="center"
                mb={4}
                p={4}
              >
                <PinInput.Root
                  onValueChange={(e) => setOtp(e.value)}
                  otp
                  size="lg"
                  value={otp}
                >
                  <PinInput.HiddenInput />
                  <PinInput.Control>
                    <PinInput.Input borderColor="lab_green.900" index={0} />
                    <PinInput.Input borderColor="lab_green.900" index={1} />
                    <PinInput.Input borderColor="lab_green.900" index={2} />
                    <PinInput.Input borderColor="lab_green.900" index={3} />
                  </PinInput.Control>
                </PinInput.Root>
              </Center>

              <Timer
                isSendError={isError}
                isSendSuccess={isSendSuccess}
                onResend={() => sendOtp()}
              />
            </div>
          </>
        )}
        {isConfirmLoading && <Spinner text="Отправка кода" />}
      </Flex>
    </Animate>
  );
};
