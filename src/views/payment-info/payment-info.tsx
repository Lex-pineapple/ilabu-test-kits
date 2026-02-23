import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Tabs,
  Text,
  Timeline,
} from "@chakra-ui/react";

import { BankCardIcon } from "#assets/icons/bank-card-icon";
import { CashIcon } from "#assets/icons/cash-icon";

const ORDER_STEPS = [
  {
    title: "Выбрать и добавить в корзину понравившийся товар.",
  },
  { title: 'Нажать "Оформить заказ".' },
  {
    title:
      "Заполнить необходимую информацию: ФИО, номер телефона и email для связи.",
  },
  {
    title:
      "Выбрать способ доставки товара. Указать адрес для доставки или выбрать пункт выдачи Европочты.",
  },
  { title: "Выбрать способ оплаты." },
  { title: 'Нажать "Подтвердить".' },
];

const ORDER_OPTIONS = [
  {
    icon: <CashIcon fill={"lab_green.800"} size="lg" />,
    text: "Наличный расчет курьеру.",
  },
  {
    icon: <BankCardIcon fill={"lab_green.800"} size="lg" />,
    text: "Оплата банковской картой курьеру.",
  },
];

export const PaymentInfo = () => (
  <Container p={4}>
    <Heading fontWeight="bold" pb={6} size="lg" textTransform="uppercase">
      Доставка и оплата товара
    </Heading>

    <Stack gap={8}>
      <Container p={0}>
        <Heading as="h2" mb={4} size="lg">
          Способы доставки товара
        </Heading>
        <Card.Root borderRadius={15}>
          <Card.Body>
            <Tabs.Root
              css={{
                "--tabs-indicator-bg": "#05AA96",
                "--tabs-indicator-shadow": "shadows.md",
                "--tabs-trigger-radius": "30px",
              }}
              defaultValue="courier"
              variant="subtle"
            >
              <Tabs.List>
                <Tabs.Trigger value="courier">Курьером</Tabs.Trigger>
                <Tabs.Trigger value="delivery">
                  Самостоятельная доставка
                </Tabs.Trigger>
                <Tabs.Indicator />
              </Tabs.List>
              <Tabs.Content value="courier">
                Курьером - доставка платная 33 BYN. Срок доставки
                согласовывается с менеджером после подтверждения заказа и
                составляет до 3 дней.
              </Tabs.Content>
              <Tabs.Content value="delivery">
                Самостоятельная доставка в лабораторию - БЕСПЛАТНО.
              </Tabs.Content>
            </Tabs.Root>
          </Card.Body>
        </Card.Root>
      </Container>

      <Container p={0}>
        <Heading as="h2" mb={4} size="lg">
          Процедура оформления заказа
        </Heading>
        <Timeline.Root>
          {ORDER_STEPS.map((item, idx) => (
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator borderColor="lab_green.900" />
                <Timeline.Indicator bg={"white"}>
                  <Text color="lab_green.900" fontWeight="bold">
                    {idx + 1}
                  </Text>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title fontWeight="semibold">
                  {item.title}
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline.Root>
        <Text pt={4}>
          Далее наш менеджер свяжется с Вами для подтверждения заказа. В
          соответствии с законами Республики Беларусь, все наши продавцы и
          курьеры работают с кассовыми аппаратами. При получении товара
          покупателю выдаются чеки следующего образца:
        </Text>
      </Container>

      <Container p={0}>
        <Heading as="h2" mb={4} size="lg">
          Способы оплаты товара
        </Heading>
        <Card.Root borderRadius={15} p={3}>
          <Card.Description>
            <Stack color="black">
              {ORDER_OPTIONS.map((item) => (
                <Flex alignItems="center" gap={5} p={2}>
                  {item.icon}
                  <Text fontWeight="semibold">{item.text}</Text>
                </Flex>
              ))}
            </Stack>
          </Card.Description>
        </Card.Root>
      </Container>

      <Container p={0}>
        <Heading as="h2" mb={4} size="lg">
          Правила оплаты и безопасность платежей
        </Heading>
        <Text pb={3}>
          Безопасный сервер WEBPAY устанавливает шифрованное соединение по
          защищенному протоколу TLS и конфиденциально принимает от клиента
          данные его платежной карты (номер карты, имя держателя, дату окончания
          действия и контрольный номер банковской карточки CVC/CVC2).
        </Text>
        <Text pb={6}>
          Обращаем Ваше внимание, что после совершения оплаты с использованием
          банковской карты необходимо сохранять полученные на электронный адрес
          карт-чеки (подтверждения об оплате) для сверки с выпиской из
          карт-счёта (с целью подтверждения совершённых операций в случае
          возникновения спорных ситуаций).
        </Text>
        <Box
          alignItems={"center"}
          bg={"white"}
          borderRadius={15}
          display={"flex"}
          gap={5}
          p={2}
        >
          <Text fontWeight={"semibold"}>Оплата через</Text>
          <Image src="/erip-icon.svg" width={100} />
        </Box>
        <Text pb={3} pt={6}>
          Оплатить заказ через систему ЕРИП Вы можете в любом банке с помощью
          интернет-банкинга, мобильного банкинга, инфокиоска, банкомата, кассы и
          т.д.
        </Text>
        <Text pb={3}>
          Совершить оплату можно с использованием наличных денежных средств,
          любых электронных денег, банковских платежных карточек.
        </Text>
        <Text pb={3}>ДЛЯ ПРОВЕДЕНИЯ ПЛАТЕЖА НЕОБХОДИМО:</Text>
        <Text pb={3}>
          Выбрать пункт ЕРИП:{"  "}
          <Text as="span" fontWeight={"semibold"}>
            Интернет-магазины/сервисы → A-Z Латинские домены → O → our-shop.by
          </Text>
        </Text>
        <Text>
          В случае, если после оплаты с Вами не связался наш менеджер или Вы не
          получили заказ, Вам необходимо обратиться в нашу службу технической
          поддержки по телефону +375 29 123 45 67 или e-mail support@our-shop.by
          для решения Вашей ситуации.
        </Text>
      </Container>

      <Container p={0}>
        <Heading as="h2" mb={4} size="lg">
          Правила возврата
        </Heading>
        <Text pb={3}>
          При оплате банковской платежной картой через систему WEBPAY возврат
          денежных средств осуществляется на ту же карточку, с которой была
          произведена оплата.
        </Text>
        <Text pb={3}>
          При оплате банковской платежной карточкой возврат наличными денежными
          средствами не допускается. Расчеты с потребителем при возврате
          уплаченной за товар денежной суммы осуществляются в той же форме, в
          которой производилась оплата товара, работы (услуги), если иное не
          предусмотрено соглашением сторон. Порядок возврата регулируется
          правилами платежных систем.
        </Text>
        <Text pb={3}>
          Процедура возврата товара регламентируется Законом Республики Беларусь
          от 9 января 2002 г. N90-З «О защите прав потребителей». Перечень
          непродовольственных товаров надлежащего качества, не подлежащих обмену
          и возврату, утверждается Правительством Республики Беларусь.
        </Text>
        <Text pb={3}>
          Для возврата денежных средств на банковскую платежную карточку
          необходимо связаться по контактным данным, указанным на
          интернет-ресурсе. По операциям, проведенным с ошибками, необходимо
          обратиться с приложением чеков/квитанций, подтверждающих ошибочное
          списание.
        </Text>
        <Text pb={3}>
          Срок возврата денежных средств на карточку, как правило, составляет 7
          (семь) календарных дней и зависит от банка-эмитента, выпустившего
          карточку. Сумма возврата будет равняться сумме покупки.
        </Text>
      </Container>
    </Stack>
  </Container>
);
