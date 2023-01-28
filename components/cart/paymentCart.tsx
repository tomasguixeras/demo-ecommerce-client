import {
  Button,
  Divider,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function PaymentCart() {
  const total = useSelector((state: RootState) => state.cartGuest.total);
  return (
    <Stack
      direction="column"
      height="60vh"
      width="30%"
      backgroundColor="#7190B066"
      borderRadius={10}
      borderWidth={1}
      boxShadow="xl"
      padding={5}
      spacing={5}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <HStack>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Button border="none" boxShadow="lg" cursor="pointer">
          Apply
        </Button>
      </Stack>
      <Divider />
      <Stack height="50%">
        <Stack direction="row" justifyContent="space-between">
          <Text>Subtotal: </Text>
          <Text>{total}</Text>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Text>Delivery: </Text>
          <Text>$500</Text>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Text>Discount: </Text>
          <Text>$0</Text>
        </Stack>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between">
        <Text>Total: </Text>
        <Text>$500</Text>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Button width={60} border="none" boxShadow="lg" cursor="pointer">
          Proceed to Checkout
        </Button>
        <Button width={60} border="none" boxShadow="lg" cursor="pointer">
          Continue Shopping
        </Button>
      </Stack>
    </Stack>
  );
}
