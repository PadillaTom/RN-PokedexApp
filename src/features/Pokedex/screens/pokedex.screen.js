import React from "react";
import styled from "styled-components/native";
import {
  StatusBar,
  SafeAreaView,
  Platform,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Searchbar } from "react-native-paper";

import { PokedexCard } from "../components/pokedex-card.component";
import { SafeArea } from "../../../components/SafeArea/safe-area.component";
import { PokedexIntro } from "../components/pokedex-intro.component";

// Dimensions:
const myWidth = Dimensions.get("window").width;

// Styled Components:
const MainScreen = styled(SafeAreaView)`
  width: 100%;
`;
const PokeballBg = styled(ImageBackground).attrs({
  source: require("../../../../assets/Patterns/PokedexPokeball.png"),
})`
  width: ${myWidth}px;
  height: 207px;
  position: absolute;
  top: 0;
  right: 0;
`;
const SearchBarContainer = styled(View)`
  width: 100%;
  padding-left: ${(props) => props.theme.Spaces[5]};
  padding-right: ${(props) => props.theme.Spaces[5]};
  margin-bottom: ${(props) => props.theme.Spaces[8]};
`;
const PokemonList = styled(View)`
  align-items: center;
  width: 100%;
  padding-left: ${(props) => props.theme.Spaces[5]};
  padding-right: ${(props) => props.theme.Spaces[5]};
`;

export const PokedexScreen = () => {
  return (
    <SafeArea>
      <MainScreen>
        <PokeballBg resizeMode="contain"></PokeballBg>
        <PokedexIntro></PokedexIntro>
        <SearchBarContainer>
          <Searchbar placeholder="Find a Pokémon!"></Searchbar>
        </SearchBarContainer>
        <PokemonList>
          <PokedexCard></PokedexCard>
          <PokedexCard></PokedexCard>
        </PokemonList>
      </MainScreen>
    </SafeArea>
  );
};
