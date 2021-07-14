import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

// Styled Components:
const PokedexIntroContainer = styled(View)`
  width: 100%;
  padding: ${(props) => props.theme.Spaces[5]};
  margin-bottom: ${(props) => props.theme.Spaces[5]};
`;
const PokedexTitle = styled(Text)`
  font-family: "SF-Pro-Display-Bold";
  font-weight: ${(props) => props.theme.FontWeights.Bold};
  font-size: ${(props) => props.theme.FontSizes.AppTitle};
  line-height: ${(props) => props.theme.LineHeights.AppTitle};
  color: ${(props) => props.theme.Colors.Texts.BlackTXT};
`;
const PokedexDescription = styled(Text)`
  font-family: "SF-Pro-Display-Regular";
  font-weight: ${(props) => props.theme.FontWeights.Regular};
  font-size: ${(props) => props.theme.FontSizes.Description};
  line-height: ${(props) => props.theme.LineHeights.Description};
  color: ${(props) => props.theme.Colors.Texts.GreyTXT};
`;

export const PokedexIntro = () => {
  return (
    <PokedexIntroContainer>
      <PokedexTitle>Pokédex</PokedexTitle>
      <PokedexDescription>
        Search for Pokémon by name or using the {"\n"} National Pokédex number
      </PokedexDescription>
    </PokedexIntroContainer>
  );
};
