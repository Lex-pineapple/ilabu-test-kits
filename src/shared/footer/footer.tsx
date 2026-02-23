import { Link } from "react-router";

import { Button, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";

import { EmailIcon } from "#assets/icons/email-icon";
import { PhoneIcon } from "#assets/icons/phone-icon";

type FooterProps = {
  isDesktop: boolean;
};

const CONTACT_INFO = [
  {
    icon: <PhoneIcon />,
    link: "tel:+375291569956",
    text: "+375 (29) 156-99-56 (А1)",
  },
  {
    icon: <PhoneIcon />,
    link: "tel:+375172700760",
    text: "+375 (17) 270-07-60 (городской номер)",
  },
  {
    icon: <PhoneIcon />,
    link: "tel:+375297009956",
    text: "+375 (29) 700-99-56 (МТС)",
  },
  {
    icon: <EmailIcon />,
    link: "mailto:info@diaglab.by",
    text: "info@diaglab.by",
  },
];

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
      Информационные материалы, размещенные на сайте, являются собственностью
      ООО "ПрофЛабДиагностика". Любое копирование, тиражирование, цитирование
      или иное распространение информации, размещенной на сайте, допускается
      только с прямого согласия владельца. Разрешается распространение прямых
      ссылок на сайт и/или его разделы без согласования с владельцем.
    </Text>
    <Text color="white" textAlign="center" textStyle="xs">
      © ООО «ПрофЛабДиагностика», 220045, РБ, г. Минск, ул.Семашко, 12А-84. УНП
      193224050, Регистрация МНС от 18.03.2019 г., лицензия МЗ РБ №02040/8425 от
      30.09.2020 г.
    </Text>
    <Container p={0}>
      <Text
        borderBottom="2px solid #C1E5DD"
        color={"#C1E5DD"}
        fontWeight="semibold"
        pb={2}
        pl={4}
        textStyle="lg"
      >
        Контакты
      </Text>
      <Stack align="flex-start" gap={0} pt={2}>
        {CONTACT_INFO.map(({ icon, link, text }) => (
          <Button asChild color="white" variant={"plain"}>
            <Link to={link}>
              {icon} {text}
            </Link>
          </Button>
        ))}
      </Stack>
    </Container>
    <Container p={0}>
      <Text
        borderBottom="2px solid #C1E5DD"
        color={"#C1E5DD"}
        fontWeight="semibold"
        pb={2}
        pl={4}
        textStyle="lg"
      >
        Время работы
      </Text>
      <Text color="white" pl={4} pt={2}>
        пн-вс, c 5:00 до 19:00
      </Text>
    </Container>
    <Flex gap={5}>
      <Image objectFit="fill" src="/mastercard-icon.svg" w={74} />
      <Image objectFit="fill" src="/visa-icon.svg" w={112} />
      <Image objectFit="fill" src="/belcard-icon.svg" w={66} />
    </Flex>
  </Flex>
);
