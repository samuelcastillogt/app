import React from "react";
import { View, Text, Button  } from "react-native";
import CardMenu from "../components/CardMenu";
import { Entypo } from '@expo/vector-icons'; 
import { Link } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const ListBusiness = ({navigation, route}) => {
    return (
        <View>
            <Text>Este es el {route.params.categorie}</Text>
        </View>
    );
};

export default ListBusiness;