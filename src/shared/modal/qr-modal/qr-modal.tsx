import { type IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";

import { AbsoluteCenter, Box, Heading, Text, VStack } from "@chakra-ui/react";

import { useAppDispatch } from "#store/hooks";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";

type QRModalProps = {
  open: boolean;
  subTitle: string;
  title: string;
  onClose: () => void;
  onSuccess: (code: string) => void;
};

export const QrModal = ({
  onClose,
  onSuccess,
  open,
  subTitle,
  title,
}: QRModalProps) => {
  const dispatch = useAppDispatch();
  const handleScan = (detectedCodes: IDetectedBarcode[]) => {
    onSuccess(detectedCodes[0].rawValue);
    onClose();
  };
  return (
    <AbsoluteCenter w="80%">
      <VStack w="100%">
        <Heading textAlign="center">{title}</Heading>
        <Text mb={20} textAlign="center">
          {subTitle}
        </Text>
        <Box
          background="conic-gradient(from 90deg  at top    5px left  5px,#0000 90deg,#309E8E 0) 0    0    / 20px 20px border-box no-repeat,
    conic-gradient(from 180deg at top    5px right 5px,#0000 90deg,#309E8E 0) 100% 0    / 20px 20px border-box no-repeat,
    conic-gradient(from 0deg   at bottom 5px left  5px,#0000 90deg,#309E8E 0) 0    100% / 20px 20px border-box no-repeat,
    conic-gradient(from -90deg at bottom 5px right 5px,#0000 90deg,#309E8E 0) 100% 100% / 20px 20px border-box no-repeat;"
          padding={3}
        >
          {open && (
            <Scanner
              constraints={{
                aspectRatio: 1,
                facingMode: "environment",
                height: { ideal: 1080 },
                width: { ideal: 1920 },
              }}
              onError={() => {
                dispatch(setNotificationVisibility(true));
                dispatch(
                  setNotificationData({
                    description: "Произошла ошибка при сканировании QR-кода",
                    status: "error",
                  }),
                );
              }}
              onScan={handleScan}
            />
          )}
        </Box>
        <Text>Сканируем...</Text>
      </VStack>
    </AbsoluteCenter>
  );
};
