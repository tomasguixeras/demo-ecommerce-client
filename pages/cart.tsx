import {
  Button,
  Center,
  Divider,
  HStack,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardOfCart from "../components/cart/cardOfCart";
import useLocalStorage from "../components/cart/useLocalStorage";
import Footer from "../components/footer/smallFooter";
import Layout from "../components/layout/layout";
import NavBar from "../components/navBar/navBar";

export default function Cart() {
  const [cartProducts, setCartProducts] = useLocalStorage("cartProducts");
  const [total, setTotal] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState(0);
  const handleLeaveProduct = () => {
    onClose();
    let restOfProducts = cartProducts.filter(
      (product: any) => product.id !== id
    );
    setCartProducts(restOfProducts);
  };
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
          <Stack
            direction="column"
            height="80vh"
            overflowY="auto"
            width="50%"
            backgroundColor="blue.200"
            borderRadius={10}
            borderColor="blue.300"
            borderStyle="solid"
            borderWidth={1}
            boxShadow="lg"
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
            {cartProducts &&
              cartProducts.map((product: any) => (
                <Stack key={product.id}>
                  <CardOfCart
                    id={product.id}
                    handleLeaveProduct={handleLeaveProduct}
                    price={product.price}
                    stock={product.quantity}
                    image={product.image}
                    name={product.model}
                    brand={product.brand.name}
                    onOpen={onOpen}
                    setId={setId}
                  />
                  <Divider />
                </Stack>
              ))}
          </Stack>
          <Stack
            direction="column"
            height="60vh"
            width="30%"
            backgroundColor="blue.200"
            borderRadius={10}
            borderColor="blue.300"
            borderStyle="solid"
            borderWidth={1}
            boxShadow="lg"
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
              <Button>Apply</Button>
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
            <Button>Proceed to Checkout</Button>
            <Button>Continue Shopping</Button>
          </Stack>
        </Stack>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure to delete the product?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleLeaveProduct()}
            >
              Yes
            </Button>
            <Button variant="ghost" onClick={() => onClose()}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </Layout>
  );
}
