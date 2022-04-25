import { createTheme } from "@mui/material/styles";

import { RESOURCES } from "./Resources";

export const THEMESOURCE = createTheme({
  palette: {
    primary: {
      main: RESOURCES.THEME.PURPLE_MID,
    },
    secondary: {
      main: RESOURCES.THEME.WHITE,
    },
  },
});
