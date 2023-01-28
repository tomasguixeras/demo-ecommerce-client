import { Divider, Stack } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CardOfCart from "./cardOfCart";

interface ListOfProductsCartInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setIdProducts: Dispatch<SetStateAction<number>>;
  handleLeaveProduct: () => void;
}

export default function ListOfProductsCart({
  isOpen,
  onOpen,
  onClose,
  setIdProducts,
  handleLeaveProduct,
}: ListOfProductsCartInterface) {
  const productsForCart = useSelector(
    (state: RootState) => state.cartGuest.cartProducts
  );

  return (
    <Stack
      direction="column"
      height="80vh"
      overflowY="auto"
      width="50%"
      backgroundColor="#7190B066"
      borderRadius={10}
      borderWidth={1}
      boxShadow="xl"
      padding={5}
      sx={{
        "&::-webkit-scrollbar": {
          width: "10px",
          borderRadius: "10px",
          backgroundColor: "blue.300",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "12px",
          backgroundColor: "blue.500",
        },
      }}
      spacing={2}
    >
      {productsForCart &&
        productsForCart.map((product: any) => (
          <Stack key={product.id}>
            <CardOfCart
              id={product.id}
              price={product.price}
              stock={product.quantity}
              image={product.image}
              name={product.model}
              brand={product.brand.name}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              setIdProducts={setIdProducts}
              handleLeaveProduct={handleLeaveProduct}
            />
            <Divider />
          </Stack>
        ))}
    </Stack>
  );
}
