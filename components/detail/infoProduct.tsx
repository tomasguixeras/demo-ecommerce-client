import {
  Button,
  Divider,
  Icon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";

interface infoProduct {
  brand: string;
  model: string;
  price: number;
  quantity: number;
  description: string;
}

export default function InfoProduct({
  brand,
  model,
  price,
  quantity,
  description,
}: infoProduct) {
  const [quantityToBuy, setQuantityToBuy] = useState(1);
  return (
    <Stack
      direction="column"
      width="40%"
      paddingX={20}
      spacing={1}
      borderStyle="solid"
      borderColor="blackAlpha.200"
      borderWidth={1}
      borderRadius={5}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Text fontSize={20} fontWeight="bold" color="blackAlpha.600">
          {brand}
        </Text>
        <Icon aria-label="fav" as={BsHeart} boxSize={6} />
      </Stack>
      <Text fontSize={30} fontWeight="bold" color="blackAlpha.800">
        {model}
      </Text>
      <Divider />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Text fontSize={30} fontWeight="bold" color="blue.500">
          ${price}
        </Text>
        <Text
          fontSize={20}
          fontWeight="bold"
          color={quantity > 0 ? "green.400" : "red.400"}
        >
          Stock: {quantity}
        </Text>
      </Stack>
      <Divider />
      <Stack direction="column">
        <Text
          fontSize={20}
          fontWeight="semibold"
          color="blackAlpha.700"
          textAlign="center"
          height={1}
          margin={1}
        >
          Description
        </Text>
        <Stack direction="column" minHeight={200}>
          <Text
            fontSize={15}
            fontWeight="normal"
            color="blackAlpha.600"
            textAlign="center"
          >
            {description}
          </Text>
        </Stack>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Text fontWeight="bold" color="blackAlpha.700" textAlign="center">
          Quantity:{" "}
        </Text>
        <NumberInput
          size="sm"
          defaultValue={quantityToBuy}
          max={quantity}
          min={0}
          maxW="100px"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper
              onChange={() => setQuantityToBuy(quantity + 1)}
            />
            <NumberDecrementStepper
              onChange={() => setQuantityToBuy(quantity - 1)}
            />
          </NumberInputStepper>
        </NumberInput>
      </Stack>
      <Stack direction="row" justifyContent="center">
        <Button colorScheme="blue" width="40%" mt={5}>
          Add to cart
        </Button>
      </Stack>
    </Stack>
  );
}
