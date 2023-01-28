import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Icon,
  Input,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { calculateTotal } from "../../features/guest/Cart/actionsCartGuest";
import productsGuestSlice from "../../features/guest/products/productsGuestSlice";
import { ModalCart } from "./modalCart";
import useLocalStorage from "./useLocalStorage";

interface CardOfCart {
  id: number;
  price: number;
  stock: number;
  image: string;
  name: string;
  brand: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setIdProducts: Dispatch<SetStateAction<number>>;
  handleLeaveProduct: () => void;
}

export default function CardOfCart({
  id,
  price,
  stock,
  image,
  name,
  brand,
  isOpen,
  onOpen,
  onClose,
  setIdProducts,
  handleLeaveProduct,
}: CardOfCart) {
  const [cartProducts, setCartProducts] = useLocalStorage("cartProducts");
  const dispatch: AppDispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const getIncrementButtonProps = () => {
    let element = cartProducts.find((product: any) => product.id === id);
    let restProducts = cartProducts.filter((product: any) => product.id !== id);
    if (element.id === id && element.quantity < stock) {
      element.quantity++;
    }
    setCartProducts([...restProducts, element]);
  };
  const getDecrementButtonProps = () => {
    let element = cartProducts.find((product: any) => product.id === id);
    let restProducts = cartProducts.filter((product: any) => product.id !== id);
    if (element.id === id && element.quantity > 1) {
      element.quantity--;
      setCartProducts([...restProducts, element]);
    } else if (element.id === id && element.quantity === 1) {
      setIdProducts(id);
      onOpen();
    }
  };

  useEffect(() => {
    let element = cartProducts.find((product: any) => product.id === id);
    element && setQuantity(element.quantity);
    dispatch(calculateTotal(price, quantity));
  }, [cartProducts]);
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <Stack direction="row" spacing="5" width="full">
        <Image
          width="120"
          height="120"
          objectFit="cover"
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
          style={{
            borderRadius: "5px",
            borderColor: "blue.300",
            borderStyle: "solid",
          }}
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">
              {brand} {name}
            </Text>
            <Text color="gray.600" fontSize="sm">
              Stock: {stock}
            </Text>
          </Stack>
        </Box>
      </Stack>
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Button
            boxSize={6}
            onClick={() => getIncrementButtonProps()}
            border="none"
            bgColor="#00000000"
          >
            +
          </Button>
          <Input
            textAlign="center"
            width={40}
            height={8}
            value={quantity}
            border="none"
          />
          <Button
            boxSize={6}
            onClick={() => getDecrementButtonProps()}
            border="none"
            bgColor="#00000000"
          >
            -
          </Button>
        </Stack>
        <Text>${price}</Text>
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() => {
            setIdProducts(id);
            onOpen();
          }}
          border="none"
          cursor="pointer"
        />
      </Flex>
      <ModalCart
        isOpen={isOpen}
        onClose={onClose}
        handleLeaveProduct={handleLeaveProduct}
      />
    </Flex>
  );
}
