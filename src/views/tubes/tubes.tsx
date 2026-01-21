import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import {
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useTubes } from "#/views/tubes/use-tubes";
import { QRIcon } from "#assets/icons/qr-icon";
import { InputError } from "#shared/input-error";
import { TitleCard } from "#shared/title-card";

const TUBE_COLORS = {
  red: "красный",
};

export const Tubes = () => {
  const { linkLoading, linkTubes, tubeData, tubeError } = useTubes();
  const {
    formState: { isDirty, isValid },
    getValues,
    handleSubmit,
    register,
    reset,
  } = useForm();

  useEffect(() => {
    const defaultTubeValues = tubeData.reduce(
      (acc, tube) => {
        for (let i = 0; i < tube.quantity; i++) {
          acc[`tube_input_${i}`] = tube.codes?.[i] || "";
        }
        return acc;
      },
      {} as Record<string, string>,
    );
    reset(defaultTubeValues);
  }, [tubeData.length]);

  const formHasValues = () => {
    const values = getValues();
    return Object.values(values).some((value) => value?.trim());
  };

  const onSubmit = handleSubmit(async (data) => {
    if (isValid) {
      linkTubes(Object.values(data).map((code) => code.trim()));
    }
  });

  return (
    <Container p="30px 0">
      <Flex flexDir="column" h="70vh">
        <TitleCard
          content={
            "Отсканируйте или введите вручную код используемого контейнера"
          }
          heading={"Проверка штрихкода контейнера"}
          highlight="код"
          mb={4}
        />
        <form onSubmit={onSubmit}>
          <Flex flexDir="column" h="100%" justifyContent="space-between">
            <Stack gap={8} pb={7}>
              {tubeData.map((item, idx) => (
                <div key={idx}>
                  <Text pb={2}>
                    {item.tube_name}. Цвет крышки:{" "}
                    {item.cap_color in TUBE_COLORS && (
                      <Text as="span" color={item.cap_color} fontWeight={600}>
                        {
                          TUBE_COLORS[
                            item.cap_color as keyof typeof TUBE_COLORS
                          ]
                        }
                      </Text>
                    )}
                  </Text>
                  {Array(item.quantity)
                    .fill(0)
                    .map((_, idx) => (
                      <InputGroup
                        endElement={<QRIcon color="black" size="lg" />}
                        key={idx}
                        pb={1.5}
                      >
                        <Input
                          _placeholder={{ textAlign: "start" }}
                          placeholder={`Контейнер №${idx + 1}`}
                          {...register(`tube_input_${idx}`)}
                        />
                      </InputGroup>
                    ))}
                </div>
              ))}
              <Link to={"/faq#qr-container-error"}>
                <Text fontWeight="semibold" textStyle="sm">
                  Нужна помощь?
                </Text>
              </Link>
            </Stack>
            <Button
              disabled={!isDirty && !formHasValues()}
              loading={linkLoading}
              loadingText="Отправляем..."
              textTransform="uppercase"
              type="submit"
            >
              Продолжить
            </Button>
            {tubeError && <InputError message={tubeError} />}
          </Flex>
        </form>
      </Flex>
    </Container>
  );
};
