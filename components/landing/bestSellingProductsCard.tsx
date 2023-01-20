import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/legacy/image";

interface BestSellingProductsCardInterface {
  image: string;
  heading: string;
  text: string;
}

export default function BestSellingProductsCard({
  image,
  heading,
  text,
}: BestSellingProductsCardInterface) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={image}
          alt="Most Selled Product"
          width="450"
          height="300"
          layout="responsive"
          style={{ borderRadius: "8px" }}
        />
        <Stack spacing="1">
          <Heading textAlign="center" size="md">
            {heading}
          </Heading>
          <Text textAlign="center" color="blue.600" fontSize="l">
            {text}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
