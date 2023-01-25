import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const TestimonialBubble = ({ heading, text }: any) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Heading as={"h3"} fontSize={"xl"}>
        {heading}
      </Heading>
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.600", "gray.400")}
        fontSize={"sm"}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default function CardOfReviews({
  src,
  name,
  title,
  heading,
  text,
}: {
  src: string;
  name: string;
  title: string;
  heading: string;
  text: string;
}) {
  return (
    <Stack>
      <TestimonialBubble heading={heading} text={text}></TestimonialBubble>
      <Flex align={"center"} mt={8} direction={"column"}>
        <Avatar src={src} mb={2} />
        <Stack spacing={-1} align={"center"}>
          <Text fontWeight={600}>{name}</Text>
          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {title}
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}
