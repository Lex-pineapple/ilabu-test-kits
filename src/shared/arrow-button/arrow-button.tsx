import { Link } from "react-router-dom";

import { Box, Button, type ButtonProps, Flex, Text } from "@chakra-ui/react";

import { ArrowRight } from "#assets/icons/arrow-right";

type ArrowButtonProps = {
  btnType?: "FULL" | "PLAIN";
  disabled?: boolean;
  link?: string;
  onClick?: () => void;
} & ButtonProps;

export const ArrowButton = ({
  btnType = "PLAIN",
  disabled,
  link,
  onClick,
}: ArrowButtonProps) => {
  const tempElement = (
    <Flex alignItems="center" gap={4} justifyContent="flex-end" p="0 10px">
      <Text fontSize="14px" fontWeight="medium">
        Подробнее
      </Text>
      {btnType === "FULL" ? (
        <Box bg="lab_green.900" borderRadius={10} p="2px 25px">
          <ArrowRight color="white" size="md" />
        </Box>
      ) : (
        <ArrowRight size="sm" />
      )}
    </Flex>
  );
  return link ? (
    <Link to={link} viewTransition>
      {tempElement}
    </Link>
  ) : (
    <Button
      borderRadius="10px"
      disabled={disabled}
      onClick={onClick}
      p={0}
      variant="ghost"
    >
      {tempElement}
    </Button>
  );
};
