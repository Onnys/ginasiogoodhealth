import { Text, View } from "react-native";
import * as React from "react";
import { CardViewWithIcon } from "react-native-simple-card-view";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { fireDB } from "../config/firebase";
import { useState, useEffect } from "react";

export function Home() {
  const [countEquipamentos, setEquipamentos] = useState(0);
  const [countMembros, setMembros] = useState(0);
  const [countTreinadores, setTreinadores] = useState(0);
  const [countReceitas, setReceitas] = useState(0);
  const [countGastos, setGastos] = useState(0);
  

  useEffect(() => {
    const subscriber = fireDB
      .collection("Equipamentos")
      .get()
  .then(querySnapshot => {
    setEquipamentos(querySnapshot.size);
  
  
  });
 })

useEffect(() => {
  const subscriber = fireDB
    .collection("Treinadores")
    .get()
.then(querySnapshot => {
  setTreinadores(querySnapshot.size);

 
})
})
useEffect(() => {
  const subscriber = fireDB
    .collection("Menbros")
    .get()
.then(querySnapshot => {
  setMembros(querySnapshot.size);

 
})})

  return (
    <View style={styles.container}>
      <View
        style={{ alignItems: "center", flexDirection: "row", flexWrap: "wrap" }}
      >
        <CardViewWithIcon
          withBackground={false}
          androidIcon={"cash-outline"}
          iosIcon={"cash-outline"}
          iconHeight={30}
          iconColor={"#333"}
          title={"Receita".toUpperCase()}
          contentFontSize={20}
          titleFontSize={12}
          style={{
            shadowColor: "#000000",
            shadowOffsetWidth: 2,
            shadowOffsetHeight: 2,
            shadowOpacity: 0.1,
            hadowRadius: 5,
            bgColor: "#ffffff",
            padding: 5,
            margin: 5,
            borderRadius: 3,
            elevation: 3,
            width: Dimensions.get("window").width / 2 - 10,
          }}
          content={ "20.210,21 MT"}
        />
        <CardViewWithIcon
          withBackground={false}
          androidIcon={"receipt-outline"}
          iosIcon={"receipt-outline"}
          iconHeight={30}
          iconColor={"#333"}
          title={"GASTOS"}
          contentFontSize={20}
          titleFontSize={12}
          content={ "10.210,21 MT"}
          style={{
            shadowColor: "#000000",
            shadowOffsetWidth: 2,
            shadowOffsetHeight: 2,
            shadowOpacity: 0.1,
            hadowRadius: 5,
            bgColor: "#ffffff",
            padding: 5,
            margin: 5,
            borderRadius: 3,
            elevation: 3,
            width: Dimensions.get("window").width / 2 - 10,
          }}
          
        />
        <CardViewWithIcon
          withBackground={false}
          androidIcon={"people-outline"}
          iosIcon={"people-outline"}
          iconHeight={30}
          iconColor={"#333"}
          title={"Membros".toUpperCase()}
          contentFontSize={20}
          titleFontSize={12}
          style={{
            shadowColor: "#000000",
            shadowOffsetWidth: 2,
            shadowOffsetHeight: 2,
            shadowOpacity: 0.1,
            hadowRadius: 5,
            bgColor: "#ffffff",
            padding: 5,
            margin: 5,
            borderRadius: 3,
            elevation: 3,
            width: Dimensions.get("window").width / 2 - 10,
          }}
          content={countMembros}
        />
        <CardViewWithIcon
          withBackground={false}
          androidIcon={"person-outline"}
          iosIcon={"person-outline"}
          iconHeight={30}
          iconColor={"#333"}
          title={"Treinadores".toUpperCase()}
          contentFontSize={20}
          titleFontSize={12}
          style={{
            shadowColor: "#000000",
            shadowOffsetWidth: 2,
            shadowOffsetHeight: 2,
            shadowOpacity: 0.1,
            hadowRadius: 5,
            bgColor: "#ffffff",
            padding: 5,
            margin: 5,
            borderRadius: 3,
            elevation: 3,
            width: Dimensions.get("window").width / 2 - 10,
          }}
          content={ countTreinadores}
        />
        <CardViewWithIcon
          withBackground={false}
          androidIcon={"barbell-outline"}
          iosIcon={"barbell-outline"}
          iconHeight={30}
          iconColor={"#333"}
          title={"Equipamentos".toUpperCase()}
          contentFontSize={20}
          titleFontSize={12}
          style={{
            shadowColor: "#000000",
            shadowOffsetWidth: 2,
            shadowOffsetHeight: 2,
            shadowOpacity: 0.1,
            hadowRadius: 5,
            bgColor: "#ffffff",
            padding: 5,
            margin: 5,
            borderRadius: 3,
            elevation: 3,
            width: Dimensions.get("window").width - 10,
          }}
          content={countEquipamentos}
        />
      </View>
    </View>
  );
        }
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 25,
  },
});
