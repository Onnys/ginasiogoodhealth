import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { AddMenbers } from "./Add/AddMenbers";

export function AddButton(props){
  return (
    <FAB
      icon="plus"
      color="white"
      style={styles.fab}
      onPress={() => <AddMenbers/>}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#20211E",
  },
});
export default AddButton;
