import React from "react";
import { Tab, Text, TabView } from "@rneui/themed";
import AddButton from "./AddButton";
import { View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { fireDB } from "../config/firebase";
import { ListItem, Avatar } from "react-native-elements";

export function DashBoard() {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          color: "white",
          height: 2,
        }}
      >
        <Tab.Item
          title="Receitas"
          titleStyle={{ fontSize: 12, color: "white" }}
          icon={{ name: "arrow-down-outline", type: "ionicon", color: "white" }}
          containerStyle={(active) => ({
            backgroundColor: active ? "#20211E" : undefined,
          })}
        />
        <Tab.Item
          title="Gastos"
          titleStyle={{ fontSize: 12, color: "white" }}
          containerStyle={(active) => ({
            backgroundColor: active ? "#20211E" : undefined,
          })}
          icon={{ name: "arrow-up-outline", type: "ionicon", color: "white" }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <Receitas></Receitas>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
         <Gastos></Gastos>
        </TabView.Item>
      </TabView>
      <AddButton />
    </>
  );
}


export function Receitas() {
  const [loading, setLoading] = useState(true);
  const [receitas, setReceitas] = useState([]);

  const getReceitas = ({ item: user }) => (
    <ListItem
      bottomDivider
      onPress={
        () => alert(user.name) /*props.navigation.navigate("UserForm", user)*/
      }
    >
      <ListItem.Content>
        <ListItem.Title>{user.titulo}</ListItem.Title>
        <ListItem.Subtitle>custo :{user.valor} MZ</ListItem.Subtitle>
        <Text>{new Date(user.data.seconds * 1000).toLocaleDateString("en-US")}</Text>
      </ListItem.Content>
    </ListItem>
  );

  useEffect(() => {
    const subscriber = fireDB
      .collection("Receitas")
      .onSnapshot((querySnapshot) => {
        const treinadores = [];

        querySnapshot.forEach((documentSnapshot) => {
          treinadores.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setReceitas(treinadores);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator color="20211E" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={receitas} renderItem={getReceitas} />
    </View>
  );
}


export function Gastos() {
  const [loading, setLoading] = useState(true);
  const [gastos, setGastos] = useState([]);

  const getGastos = ({ item: user }) => (
    <ListItem
      bottomDivider
      onPress={
      () => alert(user.titulo)/*navigation.navigate("AddMenbers", user)*/ }
    >
      <ListItem.Content>
        <ListItem.Title>{user.titulo}</ListItem.Title>
        <ListItem.Subtitle>custo :{user.valor} MZ</ListItem.Subtitle>
        <Text>{new Date(user.data.seconds * 1000).toLocaleDateString("en-US")}</Text>
      </ListItem.Content>
      
    </ListItem>
  );

  useEffect(() => {
    const subscriber = fireDB
      .collection("Gastos")
      .onSnapshot((querySnapshot) => {
        const treinadores = [];

        querySnapshot.forEach((documentSnapshot) => {
          treinadores.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setGastos(treinadores);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator color="20211E" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={gastos} renderItem={getGastos} />
    </View>
  );
}