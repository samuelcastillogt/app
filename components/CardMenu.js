import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const dimensions = Dimensions.get('window');
const CardMenu = (props) => {
    const {img, title} = props
    return (
        <View style={style.container}>
        <Image source={{uri:img}} style={style.image}/>
            <Text style={style.title}>{title}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        position: "absolute",
        bottom: 3,
        padding: 10

    },
    image: {
        width: dimensions.width,
        height: 200,
      },
    container:{
        position: "relative",

    }
})
export default CardMenu;