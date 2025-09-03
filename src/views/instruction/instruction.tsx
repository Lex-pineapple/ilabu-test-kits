import { Link } from "react-router";

import { Button, Container, Flex, Heading } from "@chakra-ui/react";

import { PATHS } from "#constants/paths";
import { HeaderWBg } from "#shared/header-w-bg";
import { StepItem } from "#shared/step-item";
import { TestTubeVisual } from "#shared/test-tube-visual";

const TestTubeInfoData = [
  {
    code: "xxxxxxx",
    color: "#FF2121",
  },
  {
    code: "xxxxxxx",
    color: "#F2DB09",
  },
  {
    code: "xxxxxxx",
    color: "#FD3BDB",
  },
];

const stepsData = [
  {
    description:
      "The customer should carefully pull each tube out of the container, ensuring they are removed safely and without damage.",
    imgSrc: "/instruction/instr_1.svg",
    step: 1,
    title: "Remove Tubes from the Container",
  },
  {
    description:
      "Select a finger for the blood sample, typically the ring finger. Clean the area with an alcohol swab and wait for the skin to dry.",
    imgSrc: "/instruction/instr_2.svg",
    step: 2,
    title: "Preparing Your Finger",
  },
  {
    description:
      "Use the lancet from the kit to make a small puncture on the side of your fingertip. Gently press the finger to produce a drop of blood.",
    imgSrc: "/instruction/instr_3.svg",
    step: 3,
    title: "Pricking Your Finger",
  },
  {
    description:
      "Following the kit’s guidelines, collect the drop of blood into the appropriate container. Usually, this involves touching the blood drop to a test strip or container.",
    imgSrc: "/instruction/instr_4.svg",
    step: 4,
    title: "Collecting the Blood Sample",
  },
  {
    description:
      "Once you’ve collected the blood sample, use a clean gauze or bandage to stop any bleeding. Apply antiseptic and cover the area with a bandage.",
    imgSrc: "/instruction/instr_5.svg",
    step: 5,
    title: "Caring for the Puncture Site",
  },
];

export const Instruction = () => (
  <Flex flexDirection="column">
    <Container p="48px 14px 14px">
      <Heading color="lab_red.500" mb={9} size="2xl" textTransform="uppercase">
        It is important to collect the bm now to determine the exact time of
        take.
      </Heading>
      <TestTubeVisual items={TestTubeInfoData} />
    </Container>
    <HeaderWBg p={10}>Choose your test</HeaderWBg>
    <Container
      _before={{
        // bg: "red",
        background: "url('/backgrounds/bg-instr.png') center/cover no-repeat",
        content: '""',
        display: "block",
        height: "calc(100% + 65px)",
        left: 0,
        margin: "0 auto",
        position: "absolute",
        right: 0,
        width: "90%",
      }}
      height="100%"
      p={0}
    >
      <Container p="36px 14px">
        <Flex direction="column" gap={7} pb={20}>
          {stepsData.map((item, idx) => (
            <StepItem {...item} reverse={Boolean(idx % 2)} />
          ))}
        </Flex>
        <Link to={PATHS.checkout}>
          <Button
            fontSize="xl"
            fontWeight="light"
            textTransform="uppercase"
            w="100%"
          >
            Continue
          </Button>
        </Link>
      </Container>
    </Container>
  </Flex>
);
