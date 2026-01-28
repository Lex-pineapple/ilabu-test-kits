import { createToaster } from "@chakra-ui/react";

export const toaster = createToaster({
  max: 1,
  pauseOnPageIdle: true,
  placement: "bottom-end",
});
