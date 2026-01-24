import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container, Heading } from "@chakra-ui/react";

import { FAQCollapsible } from "#/views/faq/components/faq-collapsible";
import { FAQData } from "#/views/faq/consts";

export const FAQ = () => {
  const { hash } = useLocation();

  return (
    <Container p={0} pb={14} pt={3.5}>
      <Heading fontWeight="bold" pb={6} size="lg" textTransform="uppercase">
        Часто задаваемые вопросы
      </Heading>
      {FAQData.map((item) => (
        <FAQCollapsible {...item} open={hash.replace("#", "") === item.id} />
      ))}
    </Container>
  );
};
