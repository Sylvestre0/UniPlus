import React, { useRef, useState } from 'react';
import {View,StyleSheet,SafeAreaView,Text,TextInput,TouchableOpacity,FlatList,KeyboardAvoidingView,Platform,} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
}

export default function MeuVideoChatScreen() {
  const playerRef = useRef<any>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSend = async () => {
    if (!inputText.trim()) return;

    // Pausa o vídeo
    playerRef.current?.pauseVideo?.();

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputText,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');

    try {
      // Chamada à sua API que responde com texto da IA
        const response = await axios.post('https://suaapi.com/ia', {
        question: userMessage.content,
        conversation_history: formattedHistory,
        });

      const botReply: Message = {
        id: Date.now().toString() + '-bot',
        content: response.data.reply || 'Desculpe, não entendi.',
        sender: 'bot',
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.error('Erro na IA:', error);
      const botReply: Message = {
        id: Date.now().toString() + '-error',
        content: 'Erro ao consultar a IA.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botReply]);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === 'user';
    return (
      <View
        style={[
          styles.messageBubble,
          isUser ? styles.userBubble : styles.botBubble,
        ]}
      >
        <Text style={styles.messageText}>{item.content}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Assista ao vídeo</Text>

      <View style={styles.playerWrapper}>
        <YoutubePlayer
          ref={playerRef}
          height={230}
          play={true}
          videoId={'mKMMScAV2JU'}
        />
      </View>

      <FlatList
        style={styles.messageList}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ paddingBottom: 10 }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Digite sua pergunta..."
            placeholderTextColor="#ccc"
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
