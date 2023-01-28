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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";
import useLocalStorage from "../cart/useLocalStorage";

interface infoProduct {
  productDetail: any;
}

export default function InfoProduct({ productDetail }: infoProduct) {
  const [cartProducts, setCartProducts] = useLocalStorage("cartProducts");
  const [quantityToBuy, setQuantityToBuy] = useState(1);
  const toast = useToast();
  const getIncrementQuantity = () => {
    let findProduct = cartProducts.find(
      (product: any) => product.id === productDetail.id
    );
    if (!findProduct) {
      setCartProducts([...cartProducts, { id: productDetail.id, quantity: 1 }]);
      return toast({
        title: "Product added",
        status: "success",
        duration: 1000,
        variant: "subtle",
        position: "bottom-right",
        isClosable: true,
      });
    } else {
      let element = cartProducts.find(
        (product: any) => product.id === productDetail.id
      );
      let restProducts = cartProducts.filter(
        (product: any) => product.id !== productDetail.id
      );
      if (
        element.id === productDetail.id &&
        element.quantity < productDetail.quantity
      ) {
        element.quantity++;
        setCartProducts([...restProducts, element]);
        return toast({
          title: "Product quantity increased",
          status: "success",
          duration: 1000,
          variant: "subtle",
          position: "bottom-right",
          isClosable: true,
        });
      }
      return toast({
        title: "There is no more stock available",
        status: "success",
        duration: 1000,
        variant: "subtle",
        position: "bottom-right",
        isClosable: true,
      });
    }
  };
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
          {productDetail.brand.name}
        </Text>
        <Icon aria-label="fav" as={BsHeart} boxSize={6} />
      </Stack>
      <Text fontSize={30} fontWeight="bold" color="blackAlpha.800">
        {productDetail.model}
      </Text>
      <Divider />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Text fontSize={30} fontWeight="bold" color="blue.500">
          ${productDetail.price}
        </Text>
        <Text
          fontSize={20}
          fontWeight="bold"
          color={productDetail.quantity > 0 ? "green.400" : "red.400"}
        >
          Stock: {productDetail.quantity}
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
            {productDetail.description}
          </Text>
        </Stack>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="center" padding={5}>
        <Button
          colorScheme="blue"
          width="40%"
          onClick={() => getIncrementQuantity()}
        >
          Add to cart
        </Button>
      </Stack>
    </Stack>
  );
}
