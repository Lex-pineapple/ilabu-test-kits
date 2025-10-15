import { type ReactNode, useState } from "react";

import { Button, Drawer, Portal } from "@chakra-ui/react";

type BottomSheetProps = {
  children: ReactNode;
  primaryButton: string;
  title: string;
  trigger: ReactNode;
  onPrimaryButtonClick?: () => void;
};

export const BottomSheet = ({
  children,
  onPrimaryButtonClick,
  primaryButton,
  title,
  trigger,
}: BottomSheetProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer.Root
      onOpenChange={(e) => setOpen(e.open)}
      open={open}
      placement="bottom"
    >
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content borderRadius="20px 20px 0 0 ">
            <Drawer.Header>
              <Drawer.Title>{title}</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>{children}</Drawer.Body>
            <Drawer.Footer>
              <Button
                onClick={onPrimaryButtonClick ?? (() => setOpen(false))}
                width="100%"
              >
                {primaryButton}
              </Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
