import { Text, View, FlatList } from "react-native";
import * as React from "react";
import { AddButton } from "./AddButton";
import { ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { fireDB } from "../config/firebase";
import { ListItem, Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-web";

export function Equipamentos() {
  const [loading, setLoading] = useState(true);
  const [equipamentos, setTreinadores] = useState([]);

  const getEquipamentos = ({ item: user }) => (
    <ListItem
      bottomDivider
      onPress={
        () => alert(user.name) /*props.navigation.navigate("UserForm", user)*/
      }
    >
      <ListItem.Content>
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>Unidades : {user.quantidade}</ListItem.Subtitle>
        <Text
          style={{
            fontSize: 12,
            color: "#000",
            opacity: 0.4,
          }}
        >
          Categoria : {user.categoria}
        </Text>
       
      </ListItem.Content>
      <ListItem.Chevron
        name="update"
        size={25}
        color="black"
        onPress={() => equipamentos.pop()/* props.navigation.navigate('UserForm', user)*/}
      />
      <ListItem.Chevron
        name="delete"
        size={25}
        color="black"
        onPress={() => props.navigation.navigate('UserForm', user)}
      />
      
    </ListItem>
  );

  useEffect(() => {
    const subscriber = fireDB
      .collection("Equipamentos")
      .onSnapshot((querySnapshot) => {
        const equipamentos = [];

        querySnapshot.forEach((documentSnapshot) => {
          equipamentos.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setTreinadores(equipamentos);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator color="20211E" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={equipamentos} renderItem={getEquipamentos} />
      <AddButton />
    </View>
  );
}
