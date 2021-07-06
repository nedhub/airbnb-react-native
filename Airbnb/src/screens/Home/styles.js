import { StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({


    image: {
        width: Dimensions.get('screen').width,
        // width: 700,
        height: 600,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,


    },


    title: {

        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },



    button: {
        backgroundColor: "#fff",
        width: 200,
        marginLeft: 25,
        marginTop: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    buttonText: {

        fontSize: 16,
        fontWeight: 'bold',




    },

    searchButton: {
        backgroundColor: "#fff",
        // backgroundColor: "#808000",
        // width: 200,
        marginLeft: 25,
        marginTop: 25,
        flexDirection: 'row',
        height: 60,
        width: Dimensions.get('screen').width - 60,
        
        borderRadius: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 30,
        zIndex: 100,
        marginHorizontal: 10,
        // padding: 20,
    }, 

    searchButtonText: {

        fontSize: 16,
        fontWeight: 'bold',




    }






});


export default styles;