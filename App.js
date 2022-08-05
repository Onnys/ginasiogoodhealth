import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DashBoard } from "./Components/DashBoard";
import { Treinadores } from "./Components/Treinadores";
import { Menbros } from "./Components/Menbros";
import { Home } from "./Components/Home";
import { Equipamentos } from "./Components/Equipamentos";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#20211E",
      }}
    >
      <Tab.Screen
        name="Treinadores"
        component={Treinadores}
        options={{
          tabBarLabel: "Treinadores",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menbros"
        component={Menbros}
        options={{
          tabBarLabel: "Menbros",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Equipamentos"
        component={Equipamentos}
        options={{
          tabBarLabel: "Equipamentos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Receitas e Gastos"
        component={DashBoard}
        options={{
          tabBarLabel: "Receitas e gastos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-box"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
