import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

import Items, { Letters } from "./items";

export default function HomeScreen() {
  // arr
  const [arr, setArr] = useState([]);

  const TextChangehandler = (val) => {
    val = val.toLowerCase();
    
    var wordArr = [];
    var word = val.split(" ");
    // console.log(word.length);
    for (var i = 0; i < word.length; i++) {
      if (word[i].length > 1 && Letters.indexOf(word[i]) != -1) {
        wordArr.push(Letters.indexOf(word[i]));
      } else {
        // console.log(word[i]);
        var letter = word[i];
        for( j=0; j<letter.length; j++){
          if (Letters.indexOf(letter[j]) != -1) {
            wordArr.push(Letters.indexOf(letter[j]));
          }
        }
      wordArr.push(35);
      }
    }
    setArr(wordArr);
  };

  return (
    <View style={css.container}>
      <View style={css.textview}>
        <FlatList
          data={arr}
          numColumns={4}
          numberOfLines={5}
          persistentScrollbar
          renderItem={(val) => {
            return (
              <View>
                <Image style={css.image} source={Items[val.item].src} />
              </View>
            );
          }}
          keyExtractor={() => {
            var key = Math.random(10).toString();
            return key;
          }}
        />
      </View>
      <View style={css.textinputview}>
        <TextInput
          onChangeText={TextChangehandler}
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete={false}
          autoFocus
          multiline
          numberOfLines={3}
          style={css.textinput}
          placeholder="Та үгээ энд бичнэ үү"
        />
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  textview: {
    flex: 1,
    width: "100%",
    borderBottomWidth: 1,
    paddingTop: 10,
    flexDirection: "row",
  },
  textinputview: {
    ...Platform.select({
      android: {
        flex: 1,
      },
      ios: {
        flex: 1,
      },
    }),
    width: "100%",
    alignItems: "center",
  },
  textinput: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: "80%",
    textAlign: "center",
    fontSize: 20,
  },
  image: {
    width: 95,
    height: 95,
  },
});
