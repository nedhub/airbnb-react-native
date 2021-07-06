import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({


    container: {
        margin: 20,







    },




    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderRadius: 10,
        // aspectRatio: 3 / 2
    },



    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
        marginVertical: 20,



    },
    prices: {
        fontSize: 18,
        marginVertical: 10,




    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
        marginRight: 5,

    },

    newPrice: {
        color: '#000000',
        fontWeight: "bold",
        fontSize: 20,
    },

    price: {

        fontWeight: 'bold',
        fontSize: 18,


    },
    totalPrice: {

        color: '#5b5b5b',
        textDecorationLine: 'underline',
    },





});

export default styles;