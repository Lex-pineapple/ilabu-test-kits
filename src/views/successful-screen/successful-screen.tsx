import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { MapIcon } from "#assets/icons/map-icon";
import { HeaderWBg } from "#shared/header-w-bg";
import { StepItem } from "#shared/step-item";
import { TestTubeVisual } from "#shared/test-tube-visual";

const TestTubeInfoData = [
  { code: "7385478", color: "#FF2121" },
  { code: "3999102", color: "#F2DB09" },
  { code: "4392010", color: "#FD3BDB" },
];

const stepsData = [
  {
    description:
      "Following the instructions, place the sample container in the protective bag or container provided in the kit. Complete any required forms or labels with patient information.",
    imgSrc: "/instruction/instr_order_1.svg",
    step: 1,
    title: "Packaging the Sample:",
  },
  {
    description:
      "After collecting the blood sample, use a clean gauze pad or bandage to stop any bleeding. Apply antiseptic and cover the puncture site with a bandage.",
    imgSrc: "/instruction/instr_order_2.svg",
    step: 2,
    title: "Shipping the Specimen",
  },
];

export const SuccessfulScreen = () => (
  <Container p={0}>
    <HeaderWBg p="28px 0">Thank you, your payment was successful!</HeaderWBg>
    <Container p={7}>
      <Heading color="lab_red.500" mb={6} size="2xl">
        IMPORTANT!
      </Heading>
      <Text textStyle="xl">
        Place tube XYZ123 (yellow cap) and ABC456 (green cap) in an envelope and
        give to the courier/laboratory.
      </Text>
    </Container>
    <TestTubeVisual items={TestTubeInfoData} />
    <Flex
      bg="#F2EDED"
      boxShadow="0px 0px 14px 0px #00000040"
      justifyContent="space-between"
      m="30px 0"
      p="18px 32px"
    >
      <Text fontWeight="semibold">Your order number</Text>
      <Text color="lab_red.500" fontWeight="medium">
        А-12345
      </Text>
    </Flex>
    <Container p={0}>
      <Heading
        color="lab_red.500"
        fontWeight="bold"
        p="20px 24px 48px"
        size="2xl"
        textTransform="uppercase"
      >
        What to do next?
      </Heading>
      <Flex direction="column" gap={7} p={3.5}>
        {stepsData.map((item, idx) => (
          <StepItem {...item} reverse={!(idx % 2)} />
        ))}
      </Flex>
    </Container>
    <Container mb={4} p={6}>
      <Container
        bg="lab_red.50"
        boxShadow="0px 0px 14px 0px #00000040"
        p="14px"
      >
        <Heading color="lab_red.500" size="md">
          Address of the laboratory
        </Heading>
        <Stack>
          <Flex borderBottom="1px solid #CBCBCB" justifyContent="space-between">
            <Stack>
              <Text fontWeight="medium">123 Elmwood Avenue, Apt. 4B</Text>
              <Text color="lab_red.500" fontWeight="medium">
                10:00 - 17:00
              </Text>
            </Stack>
            <MapIcon size="2xl" />
          </Flex>
          <Flex justifyContent="space-between">
            <Stack>
              <Text fontWeight="medium">456 Maple Street, Suite 200</Text>
              <Text color="lab_red.500" fontWeight="medium">
                10:00 - 15:00
              </Text>
            </Stack>
            <MapIcon size="2xl" />
          </Flex>
        </Stack>
      </Container>
    </Container>
    <Container p={6}>
      <Container
        bg="lab_red.50"
        boxShadow="0px 0px 14px 0px #00000040"
        p="14px"
      >
        <Heading color="lab_red.500" mb={3} size="md">
          Information about the courier
        </Heading>
        <Stack gap={3}>
          <Text>Shawn Reynolds</Text>
          <Text>+1 (312) 555-7834</Text>
          <Text color="lab_red.500">
            The courier will contact you to clarify the address and time
          </Text>
        </Stack>
      </Container>
    </Container>

    <Container
      boxShadow="0px 0px 14px 0px #00000040"
      m="0 auto"
      p={0}
      paddingInline={0}
      w={"90%"}
    >
      <YMaps>
        <Map
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 5,
          }}
          height={"195px"}
          width={"100%"}
        >
          <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
      </YMaps>
    </Container>
  </Container>
);
