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

import Items,{Letters} from "./items";

export default function HomeScreen() {

//   const [arr, setArr] = useState([]);

//   const TextChangehandler = (text) => {
//     var textArr = [];
//     for (var i = 0; i < text.length; i++) {
//       textArr.push(Items.indexOf(text[i]));
//     }
//     setArr(textArr);
//   };
//   //   console.log(arr);

  return (
    <View style={css.container}>
      <View style={css.textview}>
          {/* <Image source={Items[0].url}/> */}
        <FlatList
          data={Items}
          horizontal
          renderItem={(val) => {
            return (
              <View>
                <Text>{val.item.letter}</Text>
                <Image
                  style={css.image}
                  source={Items[0].src}
                />
              </View>
            );
          }}
        />
      </View>
      <View style={css.textinputview}>
        {/* <TextInput
          onChangeText={TextChangehandler}
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete={false}
          autoFocus
          multiline
          numberOfLines={3}
          style={css.textinput}
          placeholder="Та үгээ энд бичнэ үү"
        /> */}
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
    padding: 10,
    flexDirection: "row",
  },
  textinputview: {
    ...Platform.select({
      android: {
        flex: 1,
      },
      ios: {
        flex: 2,
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
    width: 40,
    height: 40,
  },
});
