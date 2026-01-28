import { Link } from "react-router";

import { Button, Container, Heading, Text } from "@chakra-ui/react";

import { PATHS } from "#constants/paths";

export const NotFound = () => (
  <Container pb={16} pt={24} textAlign="center">
    <Heading color="lab_grey.600" fontSize="32px" textTransform="uppercase">
      Ошибка
    </Heading>
    <Text color="lab_green.900" fontSize="128px" fontWeight="bold">
      404
    </Text>
    <Text fontWeight="semibold" pb={7} whiteSpace="nowrap">
      Страница не найдена, <br /> проверьте ваш запрос и попробуйте <br />
      еще раз
    </Text>
    <Link to={PATHS.root} viewTransition>
      <Button w="100%">Вернуться на главную</Button>
    </Link>
  </Container>
);
