/** @format */

import { MD3LightTheme } from "react-native-paper";
import { Dimensions } from "react-native";

export interface ThemeProps {
   colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      elevation: {
         level2: string;
      };
   };
   dimensions: {
      width: number;
      height: number;
   };
   fontFamily: {
      regular: string;
      semiBold: string;
      bold: string;
      medium: string;
   };
   getResponsive: (valueInPixels: number, deviceDimension: "width" | "height") => number;
}

const getResponsive = (valueInPixels: number, deviceDimension: "width" | "height"): number => {
   const dimension = Dimensions.get("window")[deviceDimension];
   const valuePercentage = valueInPixels / dimension;
   return dimension * valuePercentage;
};

export const theme: ThemeProps = {
   ...MD3LightTheme,
   colors: {
      primary: "#c7b4f7",
      secondary: "#f5f5f6",
      tertiary: "#ffffff",
      background: "#ffffff",
      elevation: {
         level2: "#ffffff",
      },
   },
   dimensions: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
   },
   fontFamily: {
      regular: "Rubik-Regular",
      semiBold: "Rubik-SemiBold",
      bold: "Rubik-Bold",
      medium: "Rubik-Medium",
   },
   getResponsive: getResponsive,
};
