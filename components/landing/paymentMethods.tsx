import { Stack, Icon, Divider, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import {
  BsCreditCard2Back,
  BsCreditCard2Front,
  BsCashCoin,
} from "react-icons/bs";

export default function PaymentMethods() {
  return (
    <Stack direction="column">
      <Heading as="h1" size="xl" textAlign="center">
        Payment methods
      </Heading>
      <Stack
        direction="row"
        padding="12"
        boxShadow="xl"
        spacing="20"
        borderRadius="10px"
        height="100px"
      >
        <Stack
          direction="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            borderRadius="50px"
            padding="15px"
            borderWidth="1px"
            borderColor="black.400"
            borderStyle="solid"
          >
            <Icon as={BsCreditCard2Back} boxSize={8}></Icon>
          </Stack>
          <Text>Credit</Text>
        </Stack>
        <Stack
          direction="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            borderRadius="50px"
            padding="15px"
            borderWidth="1px"
            borderColor="black.400"
            borderStyle="solid"
          >
            <Icon as={BsCreditCard2Front} boxSize={8}></Icon>
          </Stack>
          <Text>Debit</Text>
        </Stack>
        <Stack
          direction="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            borderRadius="50px"
            padding="15px"
            borderWidth="1px"
            borderColor="black.400"
            borderStyle="solid"
          >
            <Icon as={BsCashCoin} boxSize={8}></Icon>
          </Stack>
          <Text>Cash</Text>
        </Stack>
        <Stack
          direction="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            borderRadius="50px"
            padding="10px"
            borderWidth="1px"
            borderColor="black.400"
            borderStyle="solid"
          >
            <Image
              src="https://logospng.org/download/mercado-pago/logo-mercado-pago-icone-1024.png"
              width="40"
              height="40"
              alt="mercadopago"
            />
          </Stack>
          <Text>Mercado Pago</Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
