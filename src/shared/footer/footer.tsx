import { Flex, Image, Text } from "@chakra-ui/react";

type FooterProps = {
  isDesktop: boolean;
};

export const Footer = ({ isDesktop }: FooterProps) => (
  <Flex
    alignItems="center"
    bg="lab_green.1000"
    bottom={0}
    flexDir="column"
    gap={3}
    justifyContent="center"
    mt={isDesktop ? 0 : 2.5}
    p="66px 15px 45px"
    width="100%"
  >
    <Text color="white" textAlign="center" textStyle="xs">
      2025 / Mylab.by / Все права защищены
    </Text>
    <Text color="white" textAlign="center" textStyle="xs">
      ООО «МедЭкс-Лаб» УНП 191640681 220005, г. Минск, ул. Золотая горка, д. 11,
      пом. 1Н, комн. 2
    </Text>
    <Text color="white" textAlign="center" textStyle="xs">
      Лицензия № 02040/7781 от 12.08.2014
    </Text>
    <Text color="white" textAlign="center" textStyle="xs">
      Информационные материалы, размещенные на сайте mylab.by, являются
      собственностью ООО «МедЭкс-Лаб». Любое копирование, тиражирование,
      цитирование или иное распространение информации, размещенной на сайте
      Mylab.by, допускается только с прямого согласия владельца. Разрешается
      распространение прямых ссылок на сайт и/или его разделы без согласования с
      владельцем.
    </Text>
    <Flex gap={5}>
      <Image objectFit="fill" src="/mastercard-icon.svg" w={74} />
      <Image objectFit="fill" src="/visa-icon.svg" w={112} />
      <Image objectFit="fill" src="/belcard-icon.svg" w={66} />
    </Flex>
  </Flex>
);
