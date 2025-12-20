import { CloseButton, createOverlay, Dialog, Portal } from "@chakra-ui/react";

import { ModalTypes, type ModalTypesKeys } from "#shared/modal/consts";

type ModalProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modalData: any;
  modalType: ModalTypesKeys;
  placement?: "center" | "top";
};

export const modal = createOverlay<ModalProps>(
  ({ modalData, modalType, onOpenChange, placement = "center", ...rest }) => {
    const Modal = ModalTypes[modalType];
    return (
      <Dialog.Root {...rest} onOpenChange={onOpenChange} placement={placement}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content borderRadius={20} ml={2} mr={2}>
              <Dialog.Header>
                {modalData?.modalTitle && (
                  <Dialog.Title>{modalData.modalTitle}</Dialog.Title>
                )}
                <Dialog.CloseTrigger asChild>
                  <CloseButton bg="bg" size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Header>

              <Dialog.Body p={0} spaceY="4">
                <Modal
                  onClose={() => {
                    onOpenChange?.({ open: false });
                  }}
                  {...modalData}
                />
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    );
  },
);
