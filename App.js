import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.listItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
              { people.map(item => (
        <View key={item.key}>
          <Text style={styles.listItem}>{item.name}</Text>
        </View>
    ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#777",
    padding: 30,
    margin: 10,
    width: 200,
  },
  listItem: {
    backgroundColor: '#657',
    width: 150,
    height: 150,
    margin: 5,
    fontSize: 24,
    padding: 30,
  }
});
