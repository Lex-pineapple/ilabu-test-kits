import type { FC, PropsWithChildren } from "react";

import { Container, type ContainerProps } from "@chakra-ui/react";

export const ShdContainer: FC<PropsWithChildren & ContainerProps> = ({
  children,
  ...rest
}) => (
  <Container
    bg="white"
    borderRadius={10}
    boxShadow="0 0 6px 6px #0000000f"
    p={0}
    {...rest}
  >
    {children}
  </Container>
);
