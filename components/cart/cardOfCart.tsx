import { CloseButton, IconButton, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import useLocalStorage from "./useLocalStorage";

interface CardOfCart {
  handleLeaveProduct: (id: number) => void;
  id: number;
  price: number;
  stock: number;
  image: string;
  name: string;
  brand: string;
  onOpen: () => void;
  setId: Dispatch<SetStateAction<number>>;
}

export default function CardOfCart({
  id,
  price,
  stock,
  image,
  name,
  brand,
  handleLeaveProduct,
  onOpen,
  setId,
}: CardOfCart) {
  return (
    <Stack
      direction="row"
      paddingX={5}
      paddingY={2}
      width="100%"
      justifyContent="space-between"
    >
      <Image
        src={image}
        alt={name}
        width="120"
        height="120"
        layout="reponsive"
        style={{
          borderRadius: "5px",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#FFFFFF80",
        }}
      />
      <Stack direction="column" width="60%">
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Text>
            {brand} {name}
          </Text>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>Quantity: {stock}</Text>
          <Text>${price}</Text>
        </Stack>
      </Stack>
      <CloseButton
        size="sm"
        onClick={() => {
          onOpen();
          setId(id);
        }}
      />
    </Stack>
  );
}
