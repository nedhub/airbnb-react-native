import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles.js';




const Post = () => {
    return (
        <View style={styles.container}>



            <Image style={styles.image} source={{ uri: "https://s3.amazonaws.com/images2-gmls-ubertor-com/FVREB/R2587462/listing_photo/873164968/original.jpg?v=1"}} />

            {/* <Text> not just a component </Text> */}

            {/* Image */}
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>



            {/* Bed & Bedroom*/}



            {/* Type & Description*/}

            <Text style={styles.description} numberOfLines={2}>
                Entire Flat. Piudur zhdywbru x dhwbwd BUVuvd dvYVduduvu Guygdy dydyg YGugug YVuvv GGdh dhhdh Ggugu Yuggd UGFfd FUFd Uffufus UFUFu

            </Text>


            <Text style={styles.prices}>

                <Text style={styles.oldPrice}>$645</Text>
                <Text style={styles.newPrice}>   $345</Text>


            </Text>




            <Text style={styles.totalPrice}>$4392 total</Text>



            {/* Old price & new price */}
            {/* Total price */}


        </View>
    )
}

export default Post
