import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

export const EmailConfirmation = () => (
  <Flex flexDir="column" h="100%">
    <Container mb={9} p="0 14px">
      <Heading mb={3.5} size="2xl" textTransform="uppercase">
        Email confirmations
      </Heading>
      <Text mb={4} textStyle="xl">
        We've sent you an{" "}
        <Text color="lab_red.500" display="inline">
          email
        </Text>
        .
      </Text>
      <Text textStyle="xl">Go to your email to open the link.</Text>
    </Container>
    <Image m="20px auto" src="paper-plane.svg" w={143} />
    <Flex
      alignItems="center"
      flexDir="column"
      gap={6}
      justifyContent="space-between"
    >
      <Button textTransform="uppercase" w="100%">
        Continue
      </Button>
      <Text textStyle="lg" textTransform="uppercase">
        Or
      </Text>
      <Input placeholder="Enter code" />
    </Flex>
  </Flex>
);
