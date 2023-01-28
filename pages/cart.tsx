import { Center, Stack, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import ListOfProductsCart from "../components/cart/listOfProductsCart";
import { ModalCart } from "../components/cart/modalCart";
import PaymentCart from "../components/cart/paymentCart";
import useLocalStorage from "../components/cart/useLocalStorage";
import Footer from "../components/footer/smallFooter";
import Layout from "../components/layout/layout";
import NavBar from "../components/navBar/navBar";
import { fetchProductsByIds } from "../features/guest/Cart/actionsCartGuest";

export default function Cart() {
  const dispatch: AppDispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cartProducts, setCartProducts] = useLocalStorage("cartProducts");
  const [idProduct, setIdProducts] = useState(0);
  const handleLeaveProduct = () => {
    onClose();
    let restOfProducts = cartProducts.filter(
      (product: { id: number; quantity: number }) => product.id !== idProduct
    );
    setCartProducts(restOfProducts);
  };

  useEffect(() => {
    let productsId = cartProducts.map(
      (product: { id: number; quantity: number }) => {
        return product.id;
      }
    );
    dispatch(fetchProductsByIds(productsId));
  }, [cartProducts]);
  return (
    <Layout>
      <NavBar />
      <Center>
        <Stack
          width="90%"
          direction="row"
          justifyContent="space-around"
          padding={7}
        >
          <ListOfProductsCart
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            handleLeaveProduct={handleLeaveProduct}
            setIdProducts={setIdProducts}
          />
          <PaymentCart />
        </Stack>
      </Center>
      <Footer />
    </Layout>
  );
}
