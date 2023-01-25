import { BsCart, BsMoonStars, BsSun } from "react-icons/bs";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Button onClick={() => router.push("/")} border="none">
            Demo
          </Button>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <IconButton
                icon={colorMode === "light" ? <BsMoonStars /> : <BsSun />}
                aria-label="darkmode"
                border="none"
                borderRadius="50%"
                onClick={toggleColorMode}
              />
              <IconButton
                icon={<BsCart />}
                aria-label="cart"
                border="none"
                color={colorMode === "light" ? "#000000" : "#FFFFFF"}
                borderRadius="50%"
                onClick={() => router.push("/cart")}
              />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
