import React from "react";
import styled from "styled-components/native";
import { Text, View, Image, ImageBackground } from "react-native";
import { Colors as BgColors } from "../../../infrastructure/theme/colors";

// Styled Components
const PokemonCard = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.Sizes[3]};
  border-radius: ${(props) => props.theme.Sizes[0]};
  margin-bottom: ${(props) => props.theme.Spaces[7]};
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const PokemonCardNumber = styled(Text)`
  font-family: SF-Pro-Display-Bold;
  font-size: ${(props) => props.theme.FontSizes.PokeNumber};
  font-weight: ${(props) => props.theme.FontWeights.Bold};
  line-height: ${(props) => props.theme.LineHeights.PokeNumber};
  color: ${(props) => props.theme.Colors.Texts.NumberTXT};
  letter-spacing: ${(props) => props.theme.Spaces[0]};
  opacity: 0.6;
`;
const PokemonCardName = styled(Text)`
  font-family: SF-Pro-Display-Bold;
  font-size: ${(props) => props.theme.FontSizes.PokeName};
  font-weight: ${(props) => props.theme.FontWeights.Bold};
  line-height: ${(props) => props.theme.LineHeights.PokeName};
  color: ${(props) => props.theme.Colors.Texts.WhiteTXT};
`;
const PokemonCardDots = styled(ImageBackground).attrs({
  source: require("../../../../assets/Patterns/PokemonCardDots.png"),
})`
  width: 74px;
  height: 32px;
  position: absolute;
  right: 57%;
  top: 3px;
`;
const PokemonCardPokeball = styled(ImageBackground).attrs({
  source: require("../../../../assets/Patterns/PokemonCardPokeball.png"),
})`
  width: 145px;
  height: 145px;
  position: absolute;
  bottom: -22px;
  right: -19px;
`;
const PokemonCardImgContainer = styled(View)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
const PokemonImage = styled(Image)`
  width: 120px;
  height: 120px;
`;

export const PokedexCard = ({ pokemon = {} }) => {
  const {
    name = "Bulbasaur",
    id = 1,
    imageUrl = "https://pokeres.bastionbot.org/images/pokemon/1.png",
    types = ["grass", "poison"],
  } = pokemon;

  // Background Color:
  const cardBg = types[0] + "BG";
  const realCardBg = BgColors.PokeTypeBGs[cardBg];

  return (
    <PokemonCard style={{ backgroundColor: realCardBg }}>
      <View>
        <PokemonCardNumber>#{id}</PokemonCardNumber>
        <PokemonCardName>{name}</PokemonCardName>
        <View>
          <Text>{types}</Text>
        </View>
      </View>
      <PokemonCardDots></PokemonCardDots>
      <PokemonCardPokeball></PokemonCardPokeball>
      <PokemonCardImgContainer>
        <PokemonImage source={{ uri: imageUrl }}></PokemonImage>
      </PokemonCardImgContainer>
    </PokemonCard>
  );
};
