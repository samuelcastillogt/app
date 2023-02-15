import React from "react";
import { View, Text, Button  } from "react-native";
import CardMenu from "../components/CardMenu";
import { Entypo } from '@expo/vector-icons'; 
import { Link } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ListBusiness from "./ListBusiness";
import Post from "./Post";
const Stack = createStackNavigator();
const HomeMenu = ({ navigation }) => {
    return (
    <View>
          <CardMenu 
                img="https://www.elpais.com.co/files/article_main/uploads/2019/08/16/5d56c674cba56.jpeg"
                title="A Domicilio" 
                // onPress={}
                
            />
<Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('business')}
    />
            <CardMenu 
                img="https://www.diegocoquillat.com/wp-content/uploads/2015/12/Los-espa%C3%B1oles-quieren-men%C3%BAs-cerrados-caseros-y-m%C3%A1s-econ%C3%B3micos-en-los-restaurantes.jpg"
                title="Restaurantes" 
            />
    </View>
          

          
    );
};

export default HomeMenu;