import { IconButton, Stack, Text, useColorMode } from "@chakra-ui/react";
import { BsMoonStars, BsSun } from "react-icons/bs";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      boxShadow="lg"
      direction="row"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Text textAlign="center">NavBar</Text>
      <IconButton
        icon={colorMode === "light" ? <BsMoonStars /> : <BsSun />}
        aria-label="darkmode"
        border="none"
        bgColor={"whiteAlpha.400"}
        onClick={toggleColorMode}
      />
    </Stack>
  );
}
