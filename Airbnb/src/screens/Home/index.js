import React from 'react';
import { View, ImageBackground, Text, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from "react-native-vector-icons/Fontisto";
import { Dimensions } from 'react-native';



// const image = {uri: "https://images.unsplash.com/photo-1489370321024-e0410ad08da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"};

const Home = (props) => {
    return (
        <View>
            <Pressable style={styles.searchButton} onPress={() => console.log("explore")}>





<Fontisto  name="search" size={25} color={"#f15454"}/>



<Text style={styles.searchButtonText}>


    Where are you going?

</Text>
</Pressable>


            <ImageBackground source={require('../../../assets/images/homescreen.jpg')} style={styles.image}>





                <Text style={styles.title}> Not sure where to go? Perfect.</Text>
                {/* Title*/}
                {/* Button */}


                <Pressable style={styles.button} onPress={() => console.log("explore")}>



                    <Text style={styles.buttonText}>


                        Explore nearby stays

                    </Text>
                </Pressable>




            </ImageBackground>
        </View>
    );




    
};

export default Home;
