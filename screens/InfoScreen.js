import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import Items,{Letters} from './items';

export default function InfoScreen() {

 const naizuud = [14,0,10,8,21,21,4];
 const boltsgooy = [1,15,12,25,3,15,15,6];
    return (
        <View style={css.textview}>
        <FlatList
          data={naizuud}
          scrollEnabled={false}
          numColumns={7}
          renderItem={(val) => {
            return (
                <Image
                  style={css.image}
                  source={Items[val.item].src}
                />
            );
          }}
          keyExtractor={val => val.index}
        />
        <FlatList
          data={boltsgooy}
          scrollEnabled={false}
          numColumns={9}
          renderItem={(val) => {
            return (
                <Image
                  style={css.image2}
                  source={Items[val.item].src}
                />
            );
          }}
          keyExtractor={val => val.index}
        />
        <Text style={css.text}>Найзууд болцгооё</Text>
      </View>
    )
}


const css = StyleSheet.create({
    textview: {
        alignItems: 'center',
        padding: 10,
        marginTop: '30%',
    },
    image: {
      width: 50,
      height: 50,
    },
    image2: {
      width: 40,
      height: 40,
    },
    text: {
        fontSize: 30,
    },
  });
  
