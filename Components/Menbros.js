import { View, FlatList } from "react-native";
import * as React from "react";
import { AddButton } from "./AddButton";
import { ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { fireDB } from "../config/firebase";
import { ListItem, Avatar } from "react-native-elements";

export function Menbros() {
  const [loading, setLoading] = useState(true);
  const [treinadores, setTreinadores] = useState([]);

  const getMenbros = ({ item: user }) => (
    <ListItem
      bottomDivider
      leftAvatar={<Avatar
        size="small"
        rounded
        title="MT"
        onPress={() => console.log("Works!")}
        activeOpacity={0.2}
      />}
      onPress={
        () => alert(user.name) /*props.navigation.navigate("UserForm", user)*/
      }
    >
      <ListItem.Content>
        
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>{user.contacto}</ListItem.Subtitle>
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
      .collection("Menbros")
      .onSnapshot((querySnapshot) => {
        const treinadores = [];

        querySnapshot.forEach((documentSnapshot) => {
          treinadores.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setTreinadores(treinadores);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator color="20211E" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={treinadores} renderItem={getMenbros} />
      <AddButton />
    </View>
  );
}
