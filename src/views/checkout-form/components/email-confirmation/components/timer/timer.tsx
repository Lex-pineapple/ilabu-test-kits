import { useEffect, useState } from "react";

import { Button, Center, Text } from "@chakra-ui/react";

type TimerProps = {
  isSendError: boolean;
  isSendSuccess: boolean;
  onResend: () => void;
};

export const Timer = ({ isSendError, isSendSuccess, onResend }: TimerProps) => {
  const [codeSentState, setCodeSentState] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(60);

  let timerInterval: NodeJS.Timeout;

  const onTimerStart = () => {
    timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
  };

  useEffect(() => {
    onTimerStart();
    return () => clearInterval(timerInterval);
  });

  useEffect(() => {
    if (isSendError || isSendSuccess) {
      setCodeSentState(true);
      setTimeout(() => {
        setCodeSentState(false);
      }, 1000);
    }
  }, [isSendError, isSendSuccess]);

  useEffect(() => {
    if (isSendSuccess) onTimerStart();
  }, [isSendSuccess]);

  const onResendClick = () => {
    setMinutes(0);
    setSeconds(60);
    onResend();
  };

  if (codeSentState)
    return (
      <Center color="#0404138c" gap={2}>
        <Text as="span" textStyle="sm">
          Код отправлен
        </Text>
      </Center>
    );

  if ((minutes === 0 && seconds === 0) || isSendError) {
    return (
      <Center>
        <Button
          borderBottom="1px solid"
          borderStyle="dashed"
          color="#0404138c"
          h="fit-content"
          m={0}
          onClick={onResendClick}
          outlineOffset="10px"
          p={0}
          textAlign="center"
          variant="plain"
          w="fit-content"
        >
          Выслать код заново
        </Button>
      </Center>
    );
  }
  return (
    <Center color="#0404138c" gap={2}>
      <Text as="span" textStyle="sm">
        Запросить новый можно через
      </Text>
      <Text as="span" textStyle="sm">
        {minutes < 10 ? `0${minutes}` : minutes}
      </Text>
      :
      <Text as="span" textStyle="sm">
        {seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </Center>
  );
};
