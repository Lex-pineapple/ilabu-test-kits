import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { useLoaderData } from "react-router";

import { Box, Container, Flex, Heading, List, Text } from "@chakra-ui/react";

import { CheckmarkIcon } from "#assets/icons/checkmark-icon";
import { CardCollapsible } from "#shared/card-collapsible";
import { ShdContainer } from "#shared/shd-container";
import type { KitType } from "#store/types/kits";

import styles from "./product-view.module.scss";

export const ProductView = () => {
  const loaderData = useLoaderData<KitType>();

  return (
    <Container p={0} pb={14} pt={10}>
      <Heading pb={2} size="md" textTransform="uppercase">
        {loaderData.title}
      </Heading>
      {/* TODO: добавить тип взятого материала в ответ */}
      {/* <Text fontWeight="medium" textStyle="sm">
        {loaderData.inputType}
      </Text> */}
      <Flex direction="column" p="26px 0 36px">
        <Box bg="lab_green.50" borderRadius={10} mb={14} p={5} pb={0}>
          {loaderData.description.split("\n").map((item) => (
            <Text
              fontWeight="semibold"
              mb={5}
              textStyle="sm"
              whiteSpace="pre-wrap"
            >
              {item}
            </Text>
          ))}
        </Box>
        <Heading pb={3} size="md" textTransform="uppercase">
          Преимущества набора
        </Heading>
        <ShdContainer mb={14} p={4.5}>
          <List.Root gap={2.5} variant="plain">
            {loaderData.benefits.map((item) => (
              <List.Item alignItems="center" lineHeight="34px">
                <List.Indicator asChild>
                  <CheckmarkIcon size="sm" />
                </List.Indicator>
                <Text
                  fontWeight="medium"
                  lineHeight="34px"
                  pl={1}
                  textStyle="sm"
                >
                  {item}
                </Text>
              </List.Item>
            ))}
          </List.Root>
        </ShdContainer>
        <Heading pb={3} size="md" textTransform="uppercase">
          Что входит в состав набора
        </Heading>
        <ShdContainer mb={12} p={4.5}>
          <List.Root className={styles.contents_list} variant="plain">
            {Object.entries(loaderData.box_contents).map(([name, count]) => (
              <List.Item
                alignItems="center"
                gap={2}
                justifyContent="space-between"
                lineHeight="34px"
              >
                <Text fontWeight="medium" lineHeight="34px" textStyle="md">
                  {name}
                </Text>
                <Text
                  color="lab_green.900"
                  fontWeight="bold"
                  lineHeight="34px"
                  textStyle="md"
                  whiteSpace="nowrap"
                >
                  {count}
                </Text>
              </List.Item>
            ))}
          </List.Root>
        </ShdContainer>
        <CardCollapsible
          description={loaderData.description_min}
          items={loaderData.analyses}
          title={loaderData.title}
        />
      </Flex>
      {loaderData.video_url && (
        <>
          <Heading pb={3} size="md" textTransform="uppercase">
            Как самостоятельно сдать анализ
          </Heading>
          <Container p={0}>
            <LiteYouTubeEmbed
              id="udz_I6QtbE0"
              poster="hqdefault"
              title="Как самостоятельно сдать анализ"
            />
          </Container>
        </>
      )}
    </Container>
  );
};
