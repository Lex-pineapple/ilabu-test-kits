import { Link } from "react-router-dom";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { ArrowRight } from "#assets/icons/arrow-right";

type ArrowButtonProps = {
  link?: string;
  type?: "FULL" | "PLAIN";
  onClick?: () => void;
};

export const ArrowButton = ({
  link,
  onClick,
  type = "FULL",
}: ArrowButtonProps) => {
  const tempElement = (
    <Flex alignItems="center" gap={4} justifyContent="flex-end" p={0}>
      <Text fontSize="14px" fontWeight="medium">
        Подробнее
      </Text>
      {type === "FULL" ? (
        <Box bg="lab_green.900" borderRadius={10} p="2px 25px">
          <ArrowRight color="white" size="md" />
        </Box>
      ) : (
        <ArrowRight size="sm" />
      )}
    </Flex>
  );
  return link ? (
    <Link to={link}>{tempElement}</Link>
  ) : (
    <Button onClick={onClick} p={0} variant="ghost">
      {tempElement}
    </Button>
  );
};
