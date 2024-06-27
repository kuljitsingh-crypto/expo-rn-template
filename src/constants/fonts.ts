const fontName = {
  "Poppins-Bold": "Poppins-Bold",
  "Poppins-ExtraBold": "Poppins-ExtraBold",
  "Poppins-Italic": "Poppins-Italic",
  "Poppins-Light": "Poppins-Light",
  "Poppins-Medium": "Poppins-Medium",
  "Poppins-Regular": "Poppins-Regular",
  "Poppins-SemiBold": "Poppins-SemiBold",
  "Poppins-Thin": "Poppins-Thin",
} as const;

export const fonts = {
  thin: fontName["Poppins-Thin"],
  light: fontName["Poppins-Light"],
  regluar: fontName["Poppins-Regular"],
  medium: fontName["Poppins-Medium"],
  semiBold: fontName["Poppins-SemiBold"],
  bold: fontName["Poppins-Bold"],
  extraBold: fontName["Poppins-ExtraBold"],
  italic: fontName["Poppins-Italic"],
};

// whenever you change your font,
//if you are using expo go then update the useFontLoader hook defined inside hooks folder
//if you previously used expo prebuild the add font inside expo-font of app.json 's plugins and create
// new native build
