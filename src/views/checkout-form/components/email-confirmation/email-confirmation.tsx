import { useEffect } from "react";
import { Link } from "react-router";

import { Button, Center, Flex, PinInput, Text } from "@chakra-ui/react";

import { Spinner } from "#/components/spinner";
import { OtpError } from "#/views/checkout-form/components/email-confirmation/components/otp-error";
import { Timer } from "#/views/checkout-form/components/email-confirmation/components/timer";
import { useOtp } from "#/views/checkout-form/components/email-confirmation/use-otp";
import { useFormQuery } from "#/views/checkout-form/use-form-query";
import { ArrowRight } from "#assets/icons/arrow-right";
import { PATHS } from "#constants/paths";
import { TitleCard } from "#shared/title-card";

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
  const { setStep } = useFormQuery();

  useEffect(() => {
    setStep(2);
  }, []);

  return (
    <Flex flexDir="column" h="70vh" justifyContent="space-between">
      {isError ? (
        <OtpError loading={isLoading} onResend={sendOtp} />
      ) : (
        <>
          <div>
            <Link to={`${PATHS.checkout}?step=1`}>
              <Button mb={4} variant="ghost">
                <ArrowRight transform="rotate(180deg)" /> Назад
              </Button>
            </Link>
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
  );
};
