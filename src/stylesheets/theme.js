export const theme = {
  color: {
    primary: "#387833",
    secondary: "#FDB71B",
    tertiary: "#002c5b",
    white: "#ffffff",
    black: "#000000",
    titleGrey: "#0A1629",
    border: "#4c5c6d",
    grey: "#F6F6F6",
    linkGrey: "#7D8592",
    paleGrey: "#91929E",
    pallyGrey: "#626262",
    systemFail: "#ae4036",
    systemSuccess: "#219653",
    systemPending: "#2d9cdb",
    statusSuccess: "#6fcf97",
    statusRejected: "#eb5757",
    btnGreen387833: "#387833",
    btnGreen72AA6F: "#72AA6F",
    btnGreen1A5C16: "#1A5C16",
    btnGreen049A04: "#049A04",
    colorF1F7F1: "#F1F7F1",
    colorFED8E0: "#FED8E0",
    colorD2EBFC: "#D2EBFC",
    warning: "#E30505",
    tintBlue: "#37A2EB",
    tintPink: "#EF8199",
    borderStroke: "#d8e0f0",
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
    bold: 800,
  },
  fonts: {
    primary: "Work Sans, sans-serif",
    secondary: "DM Serif Display, serif",
    tertiary: "DM Serif Text, serif",
  },
  toRem: (pixelValueWithUnit) => {
    const baseValue = 16;
    const pixelValueDigit = pixelValueWithUnit.split("px")[0];
    const remValue = pixelValueDigit / baseValue;
    return remValue + "rem";
  },
};
