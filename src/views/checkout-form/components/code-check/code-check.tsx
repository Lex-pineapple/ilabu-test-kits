import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Flex, Input, InputGroup, Stack, Text } from "@chakra-ui/react";

import { QRIcon } from "#assets/icons/qr-icon";
import { TitleCard } from "#shared/title-card";
import { useAppDispatch } from "#store/hooks";
import { setFormState, setTubes } from "#store/slices/form-slice";

export const CodeCheck = () => {
  const [inputCount] = useState(2);
  const [inputData, setInputData] = useState("");
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(setTubes([inputData]));
    dispatch(setFormState("orderDetails"));
  };

  return (
    <Flex flexDir="column" h="70vh">
      <TitleCard
        content={
          "Отсканируйте или введите вручную код используемого контейнера"
        }
        heading={"Проверка штрихкода контейнера"}
        highlight="код"
        mb={4}
      />
      <Flex flexDir="column" h="100%" justifyContent="space-between">
        <Stack gap={8} pb={7}>
          {Array(inputCount)
            .fill(0)
            .map((_, idx) => (
              <div>
                <InputGroup
                  color={idx === 0 ? "lab_red.error" : ""}
                  endElement={<QRIcon color="black" size="lg" />}
                  key="idx"
                  pb={1.5}
                >
                  <Input
                    _placeholder={{ textAlign: "start" }}
                    bg={idx === 0 ? "" : "lab_green.10"}
                    onChange={(e) => setInputData(e.target.value)}
                    onInput={(e) =>
                      setInputData((e.target as HTMLInputElement).value)
                    }
                    placeholder={`Контейнер №${idx + 1}`}
                    value={inputData}
                  />
                </InputGroup>
                {idx === 0 && (
                  <Text color="lab_red.error" textStyle="xs">
                    Введённый вами код недействителен. Пожалуйста, проверьте
                    информацию ещё раз и повторите попытку.
                  </Text>
                )}
              </div>
            ))}
          <Link to={"/faq#qr-container-error"}>
            <Text fontWeight="semibold" textStyle="sm">
              Нужна помощь?
            </Text>
          </Link>
        </Stack>
        <Button
          disabled={!inputData}
          onClick={handleButtonClick}
          textTransform="uppercase"
        >
          Продолжить
        </Button>
      </Flex>
    </Flex>
  );
};
