import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { Link, Navigate, useLoaderData } from "react-router";

import { Box, Container, Flex, Heading, List, Text } from "@chakra-ui/react";

import type { CardExtensiveData } from "#constants/card-extensive-data";
import { cardProductData } from "#constants/card-product-data";
import { Carousel } from "#shared/carousel";
import { CircleGraphic } from "#shared/circle-graphic";
import { DescriptionBox } from "#shared/description-box";
import { HeaderWBg } from "#shared/header-w-bg";

export const ProductView = () => {
  const loaderData = useLoaderData<CardExtensiveData | undefined>();

  if (!loaderData) return <Navigate to="*" />;

  return (
    <div>
      <HeaderWBg p={9}>Recommended kit</HeaderWBg>
      <Box height={269} position="relative" w="100%">
        <CircleGraphic
          color={loaderData.color}
          positions={{
            x: "-37px",
            y: "8px",
          }}
          size={356}
          zIndex={-1}
        />
      </Box>
      <Flex direction="column" gap={6} p="0 14px 36px">
        <DescriptionBox>
          <Text textStyle="md">
            {loaderData.description
              .split(new RegExp(`(${loaderData.title})`))
              .map((item) => (
                <Text
                  color={item === loaderData.title ? "lab_red.500" : "black"}
                  display="inline"
                >
                  {item}
                </Text>
              ))}
          </Text>
        </DescriptionBox>
        <DescriptionBox>
          <Text color="lab_red.500" textStyle="md">
            Benefits of the Kit:
          </Text>
          <List.Root pl={4}>
            {loaderData.benefits.map((item) => (
              <List.Item _marker={{ color: "black" }} lineHeight="34px">
                <Text lineHeight="34px" textStyle="md">
                  {item}
                </Text>
              </List.Item>
            ))}
          </List.Root>
        </DescriptionBox>
        <DescriptionBox>
          <Text color="lab_red.500" textStyle="md">
            What's in the box?
          </Text>
          <List.Root pl={4}>
            {loaderData.boxContents.map(([name, count]) => (
              <List.Item _marker={{ color: "black" }} lineHeight="34px" pr={9}>
                <Flex justify="space-between">
                  <Text lineHeight="34px" textStyle="md">
                    {name}
                  </Text>
                  <Text color="lab_red.500" lineHeight="34px" textStyle="md">
                    {count}
                  </Text>
                </Flex>
              </List.Item>
            ))}
          </List.Root>
        </DescriptionBox>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb={9}
        p="0 14px"
      >
        <Heading fontWeight="semibold">Recommended Kits</Heading>
        <Link to="*">
          <Text color="lab_red.500" fontWeight="semibold" textStyle="xl">
            See all
          </Text>
        </Link>
      </Flex>
      <Carousel items={cardProductData} />
      <HeaderWBg m="30px 0 45px" p={9}>
        How To Take A Self Blood Test
      </HeaderWBg>
      <Container>
        <LiteYouTubeEmbed
          id="udz_I6QtbE0"
          poster="hqdefault"
          title="How to take a self blood test"
        />
        <Text
          color="lab_red.500"
          fontFamily="secondary"
          mt={12}
          textAlign="center"
        >
          See all Products
        </Text>
      </Container>
    </div>
  );
};
