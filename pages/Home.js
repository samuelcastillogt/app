import React from "react";
import { View, Text, Button  } from "react-native";
import CardMenu from "../components/CardMenu";
import { Entypo } from '@expo/vector-icons'; 
import { Link } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ListBusiness from "./ListBusiness";
import HomeMenu from "./HomeMenu";
import Post from "./Post";
const Stack = createStackNavigator();
const Home = () => {

    return (
           <NavigationContainer independent={true} initialRouteName="Home">
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeMenu} options={{headerShown: false}}/>
                <Stack.Screen name="business" component={ListBusiness} />
              </Stack.Navigator>
           </NavigationContainer>
          
    );
};

export default Home;