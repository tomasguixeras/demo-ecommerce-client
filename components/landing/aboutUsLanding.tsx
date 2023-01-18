import { Box, Heading, SkeletonText } from "@chakra-ui/react";

export default function AboutUsLanding() {
  return (
    <Box padding="6" boxShadow="xl" width="60%" borderRadius="10px">
      <Heading textAlign="center" as="h1" size="l">
        About us
      </Heading>
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
}
