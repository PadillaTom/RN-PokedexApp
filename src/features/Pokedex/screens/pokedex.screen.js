import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { PokemonInfo } from "../components/pokemon-info.component";

export const PokedexScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar placeholder="What Pokémon are you looking for?"></Searchbar>
      </View>
      <View style={styles.list}>
        <PokemonInfo></PokemonInfo>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    width: "100%",
    padding: 16,
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
  },
});
