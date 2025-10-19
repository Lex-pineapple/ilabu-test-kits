import { CloseButton, createOverlay, Drawer, Portal } from "@chakra-ui/react";

import {
  BottomSheetModals,
  type BottomSheetModalsKeys,
} from "#shared/bottom-sheet-modal/consts";

type BottomSheetModalProps = {
  title: string;
  type: BottomSheetModalsKeys;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modalData?: any;
};

export const bottomSheetModal = createOverlay<BottomSheetModalProps>(
  ({ modalData, onOpenChange, title, type, ...rest }) => {
    const Modal = BottomSheetModals[type];

    return (
      <Drawer.Root placement="bottom" {...rest} onOpenChange={onOpenChange}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content borderRadius="20px 20px 0 0 ">
              <Drawer.Header justifyContent="center">
                <Drawer.Title
                  fontSize="20px"
                  lineHeight="20px"
                  maxW={230}
                  textAlign="center"
                  textTransform="uppercase"
                >
                  {title}
                </Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <CloseButton />
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body>
                <Modal
                  onClose={() => {
                    onOpenChange?.({ open: false });
                  }}
                  {...modalData}
                />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    );
  },
);
