import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";

import {
  Button,
  Container,
  Flex,
  Group,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useTubes } from "#/views/tubes/use-tubes";
import { ArrowRight } from "#assets/icons/arrow-right";
import { QRIcon } from "#assets/icons/qr-icon";
import { PATHS } from "#constants/paths";
import { InputError } from "#shared/input-error";
import { modal } from "#shared/modal";
import { TitleCard } from "#shared/title-card";

const TUBE_COLORS = {
  red: "красный",
};

const tubeDataMock = [
  {
    cap_color: "red",
    quantity: 3,
    tube_id: "12345",
    tube_name: "lala",
  },
];

export const Tubes = () => {
  const { linkLoading, linkTubes, tubeData, tubeError } = useTubes();
  const {
    control,
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
      <Link to={PATHS.instruction}>
        <Button mb={4} variant="ghost">
          <ArrowRight transform="rotate(180deg)" /> К инструкции
        </Button>
      </Link>
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
              {tubeDataMock.map((item, idx) => (
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
                      <Controller
                        control={control}
                        name={`tube_input_${idx}`}
                        render={({ field }) => (
                          <Group attached key={idx} pb={1.5} w="100%">
                            <Input
                              _placeholder={{ textAlign: "start" }}
                              placeholder={`Контейнер №${idx + 1}`}
                              {...field}
                            />
                            <Button
                              bg="white"
                              borderBottom="3px solid #048B78"
                              borderEndEndRadius="8px"
                              onClick={() =>
                                modal.open("QR", {
                                  modalData: {
                                    onSuccess: (code: string) =>
                                      field.onChange(code),
                                    subTitle:
                                      "QR-код находится на пробирке с соответствуюшей крышкой",
                                    title: "Отсканируйте QR-код",
                                  },
                                  modalType: "QR",
                                })
                              }
                              variant="plain"
                            >
                              <QRIcon color="black" size="lg" />
                            </Button>
                          </Group>
                        )}
                      />
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
