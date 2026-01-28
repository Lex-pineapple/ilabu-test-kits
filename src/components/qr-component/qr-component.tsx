import { Button, Flex, Image, Text } from "@chakra-ui/react";

import { modal } from "#shared/modal";

import imgUrl from "#assets/qr-icon.svg";

type QRComponentProps = {
  onScanSuccess: (code: string) => void;
};

export const QRComponent = ({ onScanSuccess }: QRComponentProps) => (
  <Button
    h="fit-content"
    onClick={() =>
      modal.open("QR", {
        modalData: {
          onSuccess: onScanSuccess,
          subTitle: "QR-код находится на коробке с тестом",
          title: "Отсканируйте QR-код",
        },
        modalType: "QR",
      })
    }
    variant="plain"
    w="100%"
  >
    <Flex
      alignItems="center"
      bg="lab_green.50"
      borderRadius={10}
      gap={7}
      p={5}
      w="100%"
    >
      <Image h={73} src={imgUrl} w={73} />
      <Text fontWeight="semibold" textStyle="sm">
        Отсканируйте <br /> QR-код на коробке
      </Text>
    </Flex>
  </Button>
);
