import { Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

interface GaleryProps {
  image: any;
}

export default function Galery({ image }: GaleryProps) {
  const [images, setImages] = useState({
    img: "",
    key: "",
  });

  return (
    <Stack direction="column">
      <Box>
        <Image
          height="500"
          width="500"
          alt="product"
          style={{ borderRadius: "10px" }}
          src={image}
        />
      </Box>
      <Stack direction="row">
        <Stack
          borderRadius={5}
          borderColor="blackAlpha.600"
          _hover={{ borderColor: "blue.300" }}
          borderWidth={2}
          borderStyle="solid"
        >
          <Image height="50" width="50" alt="product" key="1" src={image} />
        </Stack>
        <Stack
          borderRadius={5}
          borderColor="blackAlpha.600"
          _hover={{ borderColor: "blue.300" }}
          borderWidth={2}
          borderStyle="solid"
        >
          <Image height="50" width="50" alt="product" key="1" src={image} />
        </Stack>
        <Stack
          borderRadius={5}
          borderColor="blackAlpha.600"
          _hover={{ borderColor: "blue.300" }}
          borderWidth={2}
          borderStyle="solid"
        >
          <Image height="50" width="50" alt="product" key="1" src={image} />
        </Stack>
      </Stack>
    </Stack>
  );
}
