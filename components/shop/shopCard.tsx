import React from "react";
import {
  IconButton,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/legacy/image";
import { BsHeart, BsHeartFill, BsCartPlus } from "react-icons/bs";

function ShopCard() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          width="450"
          height="300"
          layout="responsive"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <IconButton
            variant="outline"
            border="none"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<BsHeart />}
          />
          <IconButton
            variant="outline"
            border="none"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<BsCartPlus />}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ShopCard;
