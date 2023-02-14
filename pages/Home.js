import React from "react";
import { View, Text, Button  } from "react-native";
import CardMenu from "../components/CardMenu";
import { Entypo } from '@expo/vector-icons'; 
import { Audio } from 'expo-av';
const Home = () => {
    const [sound, setSound] = React.useState();
    async function playSound() {
        console.log('Loading Sound');
        const sound = await Audio.Sound.createAsync('https://stream-38.zeno.fm/vs325dhm8ueuv?zs=X9oTygwySY-cNyWhVym5fA');
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
      }
      React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);
    return (
        <View>
            <CardMenu 
                img="https://www.elpais.com.co/files/article_main/uploads/2019/08/16/5d56c674cba56.jpeg"
                title="A Domicilio" 
            />
            <CardMenu 
                img="https://www.diegocoquillat.com/wp-content/uploads/2015/12/Los-espa%C3%B1oles-quieren-men%C3%BAs-cerrados-caseros-y-m%C3%A1s-econ%C3%B3micos-en-los-restaurantes.jpg"
                title="Restaurantes" 
            />
<Entypo name="shop" size={24} color="black" />
<Button title="Play Sound" onPress={playSound} />
        </View>
    );
};

export default Home;