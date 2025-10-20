import type { PropsWithChildren } from "react";

import { type ContainerProps, Text } from "@chakra-ui/react";

import { ShdContainer } from "#shared/shd-container";

import styles from "./alert-box.module.scss";

export const AlertBox = ({
  children,
  ...rest
}: PropsWithChildren & ContainerProps) => (
  <ShdContainer
    borderRadius={10}
    p="18px 11px"
    {...rest}
    className={styles.root}
  >
    <Text
      className={styles.content}
      color="lab_red.500"
      fontWeight="semibold"
      textStyle="sm"
    >
      {children}
    </Text>
  </ShdContainer>
);
