import { Portal, Spinner, Stack, Toast, Toaster } from "@chakra-ui/react";

import { toaster } from "#/components/toaster/toaster-use";

export const CustomToaster = () => (
  <Portal>
    <Toaster insetInline={{ mdDown: "4" }} toaster={toaster}>
      {(toast) => (
        <Toast.Root borderRadius={15} width={{ md: "sm" }}>
          {toast.type === "loading" ? (
            <Spinner color="blue.solid" size="sm" />
          ) : (
            <Toast.Indicator />
          )}
          <Stack flex="1" gap="1" maxWidth="100%">
            {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
            {toast.description && (
              <Toast.Description fontWeight={700}>
                {toast.description}
              </Toast.Description>
            )}
          </Stack>
          {toast.action && (
            <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
          )}
          {toast.closable && <Toast.CloseTrigger w="24px" />}
        </Toast.Root>
      )}
    </Toaster>
  </Portal>
);
