import React from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView, Platform, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { PokemonInfo } from "../components/pokemon-info.component";

const MainScreen = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  margin-top: ${Platform.OS === "android"
    ? StatusBar.currentHeight + "px"
    : "0px"};
  width: 100%;
`;
const SearchBarContainer = styled(View)`
  width: 100%;
  padding: ${(props) => props.theme.Spaces[6]};
  margin-bottom: ${(props) => props.theme.Spaces[3]};
`;
const PokemonList = styled(View)`
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.Spaces[6]};
`;

export const PokedexScreen = () => {
  return (
    <MainScreen>
      <SearchBarContainer>
        <Searchbar placeholder="Find a Pokémon!"></Searchbar>
      </SearchBarContainer>
      <PokemonList>
        <PokemonInfo></PokemonInfo>
        <PokemonInfo></PokemonInfo>
      </PokemonList>
    </MainScreen>
  );
};
