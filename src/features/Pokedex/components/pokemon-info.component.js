import React from "react";
import styled from "styled-components/native";
import { Text, View, Image, ImageBackground } from "react-native";

// Styled Components
const PokemonCard = styled(View)`
  background-color: ${(props) => props.theme.Colors.PokeTypeBGs.fireBG};
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
const PokemonCardImgContainer = styled(View)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const PokemonInfo = ({ pokemon = {} }) => {
  const {
    name = "Charmander",
    id = 1,
    imageUrl = "https://pokeres.bastionbot.org/images/pokemon/4.png",
    types = ["fire"],
  } = pokemon;

  return (
    <PokemonCard style={{ elevation: 7 }}>
      <View>
        <PokemonCardNumber>#{id}</PokemonCardNumber>
        <PokemonCardName>{name}</PokemonCardName>
        <View>
          <Text>{types}</Text>
        </View>
      </View>
      <ImageBackground
        source={require("../../../../assets/Patterns/PokemonCardDots.png")}
        style={{
          width: 74,
          height: 32,
          position: "absolute",
          right: "57%",
          top: 3,
        }}
      ></ImageBackground>
      <ImageBackground
        source={require("../../../../assets/Patterns/PokemonCardPokeball.png")}
        style={{
          width: 145,
          height: 145,
          position: "absolute",
          bottom: -22,
          right: -19,
        }}
      ></ImageBackground>
      <PokemonCardImgContainer>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 120, height: 120, zIndex: 500 }}
        ></Image>
      </PokemonCardImgContainer>
    </PokemonCard>
  );
};
