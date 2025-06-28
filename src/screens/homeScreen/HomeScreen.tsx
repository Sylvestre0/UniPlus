import { router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./homeStyle";
import ImageCard from "@/components/card/card";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require("../../assets/images/unifecaf-removebg-preview.png")} style={styles.logo} />
      </View>
      <ImageCard
        imageSource={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'}}
        onPress={() => router.push('/router/login')}
        caption="Gatinho estiloso com styled-components 😻"
      />
    </View>
  );
}



