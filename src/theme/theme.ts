import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        background: "gray",
      },
      a: {
        color: "blue.500",
      },
    },
  },
});
