import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";

export default extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  styles,
});
