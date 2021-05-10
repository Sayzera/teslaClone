import React from 'react';
import {View, Text, FlatList, Dimensions, ScrollView} from 'react-native';
import styles from './styles';

import CarItem from "../Carlitem";

import cars from './cars';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
    <ScrollView>
        <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car={item}
            snapToAligment={'start'}
            decelerationRate={'slow'}
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}
            />}
        />

    </ScrollView>
  
    </View>
  );
};

export default CarsList;