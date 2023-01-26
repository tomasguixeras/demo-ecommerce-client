import { theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
    },
  },
  colors: {
    primary: mode(
      {
        100: "#FFFFFF",
        200: "#F2F2F2",
        300: "#E2E2E2",
        400: "#CCCCCC",
        500: "#B9B9B9",
        600: "#A6A6A6",
        700: "#909090",
      },
      {
        100: "#7C7C7C",
        200: "#6B6B6B",
        300: "#585858",
        400: "#434343",
        500: "#303030",
        600: "#1C1C1C",
        700: "#000000",
      }
    ),
    secondary: {
      100: "#BDCFE1",
      200: "#A9BFD4",
      300: "#91ABC7",
      400: "#7190B0",
      500: "#7190B0",
      600: "#6384A6",
      700: "#55789C",
      800: "#4C7095",
      900: "#3E6286",
    },
    success: theme.colors.whatsapp,
    error: theme.colors.red,
    warning: theme.colors.orange,
  },
  sizes: {
    container: {
      xl: "1200px",
    },
  },
  fonts: {
    body: "Proxima Nova",
    heading: "Proxima Nova",
  },
  components: {
    Link: {
      variants: {
        unstyled: ({ colorScheme = "blackAlpha" }) => ({
          color: `${colorScheme}.700`,
          _hover: {
            color: `${colorScheme}.800`,
            textDecoration: "none",
          },
        }),
        color: ({ colorScheme = "secondary" }) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.600`,
            textDecoration: "none",
          },
        }),
      },
      defaultProps: {
        variant: "color",
      },
    },
    Button: {
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
      variants: {
        ghost: ({ colorScheme = "secondary" }) => ({
          backgroundColor: `${colorScheme}.50`,
          ":hover, :focus": {
            backgroundColor: `${colorScheme}.100`,
          },
        }),
      },
    },
    Input: {
      parts: ["field"],
      defaultProps: {
        focusBorderColor: "secondary.500",
      },
      variants: {
        filled: {
          field: {
            borderRadius: "sm",
            color: "blackAlpha.800",
            backgroundColor: "white",
            ":hover, :focus": {
              backgroundColor: "white",
            },
          },
        },
        outline: {
          field: {
            borderColor: "gray.300",
          },
        },
      },
    },
  },
};

export default styles;
