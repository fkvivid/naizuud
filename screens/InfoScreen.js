import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Items, { Letters } from "./items";

export default function InfoScreen() {
  const naizuud = [14, 0, 10, 8, 21, 21, 4];
  const boltsgooy = [1, 15, 12, 25, 3, 15, 15, 6];
  return (
    <View style={css.textview}>
      <FlatList
        data={naizuud}
        scrollEnabled={false}
        numColumns={7}
        renderItem={(val) => {
          return <Image style={css.image} source={Items[val.item].src} />;
        }}
        keyExtractor={(val) => val.index}
      />
      <FlatList
        data={boltsgooy}
        scrollEnabled={false}
        numColumns={9}
        renderItem={(val) => {
          return <Image style={css.image2} source={Items[val.item].src} />;
        }}
        keyExtractor={(val) => val.index}
      />
      <Text style={css.text}>Найзууд болцгооё</Text>
      <Text style={css.text2}>Манай дэмжиж бүй үгнүүд:</Text>
      <ScrollView style={css.scroll}>
        <View style={css.cont}>
          <View>
            {Letters.map((val, index) => {
              if (index > 35 && index <= 53) {
                return <Text key={index}>{val}</Text>;
              }
            })}
          </View>
          <View>
            {Letters.map((val, index) => {
              if (index > 53 && index <= 71) {
                return <Text key={index}>{val}</Text>;
              }
            })}
          </View>
          <View>
            {Letters.map((val, index) => {
              if (index > 71) {
                return <Text key={index}>{val}</Text>;
              }
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const css = StyleSheet.create({
  textview: {
    alignItems: "center",
    padding: 10,
    marginTop: "10%",
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
  text2: {
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  scroll:{
    width: '100%',
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10,
  }
});
