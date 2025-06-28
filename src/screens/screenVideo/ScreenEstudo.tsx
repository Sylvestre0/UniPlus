// MeuVideoScreen.js

import React, { useRef } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function MeuVideoScreen() {
  const playerRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Assista ao vídeo</Text>

      <View style={styles.playerWrapper}>
        <YoutubePlayer
          ref={playerRef}
          height={230}
          play={true}
          videoId={'mKMMScAV2JU'} // ID do vídeo do YouTube
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // fundo escuro como YouTube
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  playerWrapper: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
});
