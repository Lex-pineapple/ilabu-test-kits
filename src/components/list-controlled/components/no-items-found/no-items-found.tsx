import { Box, Text } from "@chakra-ui/react";

export const NoItemsFound = () => (
  <Box alignItems="center" display="flex" justifyContent="center" py={8}>
    <Text color="gray.500" fontSize="lg">
      Ничего не найдено
    </Text>
  </Box>
);
