import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

function MyHeader() {
  const [text, setText] = useState("");

  return (
    <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <Text
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: 24,
          marginBottom: 30,
        }}
      >
        Hello React Native
      </Text>
      <ActivityIndicator
        size="large"
        color="#c1262c"
        style={{ marginBottom: 30 }}
      />
      <TouchableOpacity onPress={() => Alert.alert(text)}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 30,
          }}
          onChangeText={(text) => setText(text)}
          value={text}
        />
      </TouchableOpacity>
    </View>
  );
}
function MyFooter() {
  const styles = StyleSheet.create({
    hello: {
      borderWidth: 2,
      borderColor: "black",
      padding: 20,
      marginBottom: 30,
    },
  });
  return (
    <View>
      <View style={styles.hello}>
        <Text>Hello again!</Text>
      </View>

      <Button
        onPress={() => Alert.alert("Learning RN is so easy")}
        title="Learn More"
        color="#c1262c"
      />
    </View>
  );
}
export default function Hello() {
  const randomNum = useRef(Math.random()).current;

  return (
    <FlatList
      ListHeaderComponent={MyHeader}
      data={[0, 1, 2, 3, 4]}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
          >
            <Image
              source={{
                uri: `https://picsum.photos/500/300?random=${randomNum + item}`,
              }}
              style={{ width: "100%", height: 160, marginBottom: 30 }}
            />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => String(item)}
      ListFooterComponent={MyFooter}
    />
  );
}
