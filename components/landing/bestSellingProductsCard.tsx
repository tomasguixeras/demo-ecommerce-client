import {
  Card,
  CardBody,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/legacy/image";
import { useRouter } from "next/router";

interface BestSellingProductsCardInterface {
  id: number;
  image: string;
  heading: string;
  text: string;
}

export default function BestSellingProductsCard({
  id,
  image,
  heading,
  text,
}: BestSellingProductsCardInterface) {
  const router = useRouter();
  let limitedText = text.substring(0, 150);
  return (
    <Card
      maxW="sm"
      onClick={() => router.push(`/${id}`)}
      _hover={{
        cursor: "pointer",
        boxShadow: "1px 2px 6px #bcbcbc",
        transition: "0.3s",
      }}
    >
      <CardBody>
        <Stack padding={2} minHeight="320px">
          <Image
            src={image}
            alt={heading}
            width="150"
            height="180"
            layout="responsive"
            objectFit="fill"
            style={{ borderRadius: "8px" }}
          />
        </Stack>
        <Divider />
        <Stack spacing="1">
          <Heading textAlign="center" size="md" margin={2}>
            {heading}
          </Heading>
          <Text textAlign="center" color="blue.600" fontSize="l">
            {`${limitedText}...`}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
