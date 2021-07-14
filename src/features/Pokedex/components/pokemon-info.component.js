import React from "react";
import { Text } from "react-native";
import { COLORS } from "../../../infrastructure/theme/colors";

export const PokemonInfo = ({ pokemon = {} }) => {
  const {
    name = "My Pokemon",
    id,
    imageUrl = "https://pokeres.bastionbot.org/images/pokemon/4.png",
    types = "fire",
  } = pokemon;
  return (
    <Text
      style={{
        color: COLORS.PokeTypeBGs.poisonBG,
        fontFamily: "SF-Pro-Display-Regular",
      }}
    >
      {name}
    </Text>
  );
};
