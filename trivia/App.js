// Option 2: New Project, 3 components



import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import List from './components/ListofItems';
import Footer from './Components/footer';

export default function App() {
  let [createList, setCreateList] = useState([
    { text: 'Wake Up', key: '1' },
    { text: 'Go for a Walk', key: '2' },
    { text: 'Check online for new Tires', key: '3' },
    { text: 'Go to work', key: '4' },
    { text: 'Buy Lunch', key: '5' },
    { text: 'go Workout', key: '6' },
    { text: 'Go Party', key: '7' },
    { text: 'Eat a late night snack', key: '8' },
    { text: 'Go to bed', key: '9' }
  ]);

  const press = (key) => {
    setCreateList(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={createList}
            renderItem={({ item }) => (
              <List item={item} pressHandler={press} />
            )}
            
          />
          <Footer></Footer>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});