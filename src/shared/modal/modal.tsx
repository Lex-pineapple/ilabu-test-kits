import { CloseButton, createOverlay, Dialog, Portal } from "@chakra-ui/react";

import { ModalTypes, type ModalTypesKeys } from "#shared/modal/consts";

type ModalProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modalData: any;
  modalType: ModalTypesKeys;
};

export const modal = createOverlay<ModalProps>(
  ({ modalData, modalType, ...rest }) => {
    const Modal = ModalTypes[modalType];
    return (
      <Dialog.Root {...rest}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content borderRadius={20}>
              <Dialog.Header>
                <Dialog.CloseTrigger asChild>
                  <CloseButton bg="bg" size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Header>

              <Dialog.Body p={0} spaceY="4">
                <Modal {...modalData} />
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    );
  },
);
