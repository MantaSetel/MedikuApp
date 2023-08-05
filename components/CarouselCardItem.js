import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.slide} key={index}>
            <Image source={{ uri: item.imgUrl }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 309,
        height: 146,
    },
    slide: {
        width: 309,
        height: 146,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default CarouselCardItem;
