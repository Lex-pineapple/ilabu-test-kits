import reactStringReplace from "react-string-replace";

import { type ContainerProps, Heading, Text } from "@chakra-ui/react";

import { ShdContainer } from "#shared/shd-container";

type TitleCardProps = {
  content: string;
  heading: string;
  highlight?: string;
} & ContainerProps;

export const TitleCard = ({
  content,
  heading,
  highlight,
  ...rest
}: TitleCardProps) => (
  <ShdContainer p="22px 16px" {...rest}>
    <Heading fontWeight="bold" pb={3} size="xl" textTransform="uppercase">
      {heading}
    </Heading>
    <Text fontWeight="semibold" textStyle="sm">
      {reactStringReplace(content, highlight, (match) => (
        <Text as="span" color="lab_green.900">
          {match}
        </Text>
      ))}
    </Text>
  </ShdContainer>
);
