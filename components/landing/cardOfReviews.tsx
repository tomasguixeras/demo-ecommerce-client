import {
  Avatar,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

interface CardOfReviews {
  avatar: string;
  name: string;
  title: string;
  text: string;
}

export default function CardOfReviews({
  avatar,
  name,
  title,
  text,
}: CardOfReviews) {
  return (
    <Card
      minW="sm"
      maxW="sm"
      minH={200}
      maxH={350}
      padding="6"
      borderRadius={10}
    >
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Wrap>
          <WrapItem>
            <Avatar size="lg" name={name} src={avatar} />
          </WrapItem>
        </Wrap>
        <Heading textAlign="center" size="md" mt={1}>
          {name}
        </Heading>
      </Stack>
      <CardBody>
        <Stack spacing="1">
          <Heading textAlign="center" size="md" fontWeight="normal" mt={1}>
            {title}
          </Heading>
          <Text textAlign="center" color="blue.600" fontSize="l">
            "{text}"
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
