import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

let dbInstance: SQLiteDatabase | null = null;

// Tipagem da mensagem
export interface Message {
  id: number;
  content: string;
  sender: string;
  timestamp: string;
}

export const openDatabase = async (): Promise<SQLiteDatabase> => {
  if (dbInstance) return dbInstance;

  dbInstance = await SQLite.openDatabase({ name: 'messages.db', location: 'default' });
  await dbInstance.executeSql(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      sender TEXT,
      timestamp TEXT DEFAULT (datetime('now'))
    );
  `);
  return dbInstance;
};

// Adiciona uma nova mensagem
export const addMessage = async (content: string, sender: string = 'user'): Promise<void> => {
  const db = await openDatabase();
  await db.executeSql(
    'INSERT INTO messages (content, sender) VALUES (?, ?);',
    [content, sender]
  );
};

// Recupera todas as mensagens
export const getAllMessages = async (): Promise<Message[]> => {
  const db = await openDatabase();
  const [results] = await db.executeSql('SELECT content,sender FROM messages ORDER BY timestamp ASC;');

  const messages: Message[] = [];
  for (let i = 0; i < results.rows.length; i++) {
    messages.push(results.rows.item(i));
  }
  return messages;
};


// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// import { addMessage, getAllMessages, Message } from './database';

// const App: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);

//   const loadMessages = async () => {
//     const all = await getAllMessages();
//     setMessages(all);
//   };

//   const handleAdd = async () => {
//     await addMessage('Nova mensagem!', 'user');
//     await loadMessages();
//   };

//   useEffect(() => {
//     loadMessages();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Button title="Adicionar mensagem" onPress={handleAdd} />
//       <FlatList
//         data={messages}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <Text>{`${item.sender}: ${item.content} (${item.timestamp})`}</Text>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//   },
// });

// export default App;
