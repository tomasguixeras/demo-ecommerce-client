import { Stack, Icon, Divider, Heading, Text } from "@chakra-ui/react";
import {
  BsCart,
  BsCreditCard2Back,
  BsEmojiLaughing,
  BsTruck,
} from "react-icons/bs";

export default function StepsForBuy() {
  return (
    <Stack direction="column">
      <Heading as="h1" size="xl" textAlign="center">
        In four simple steps
      </Heading>
      <Stack
        direction="row"
        padding="6"
        boxShadow="xl"
        spacing="10"
        borderRadius="10px"
        height="100px"
      >
        <Stack
          direction="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon as={BsCart} boxSize={8}></Icon>
          <Text>Choose products</Text>
        </Stack>
        <Divider orientation="vertical" />
        <Stack
          direction="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon as={BsCreditCard2Back} boxSize={8}></Icon>
          <Text>Make payment</Text>
        </Stack>
        <Divider orientation="vertical" />
        <Stack
          direction="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon as={BsTruck} boxSize={8}></Icon>
          <Text>Product delivery</Text>
        </Stack>
        <Divider orientation="vertical" />
        <Stack
          direction="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon as={BsEmojiLaughing} boxSize={8}></Icon>
          <Text>Receive the product</Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
