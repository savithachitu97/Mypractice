import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const dummyData = [
  {
    id: '1',
    title: 'Beautiful Beach',
    description: 'Enjoy the stunning sunset view at the beach.',
    image: 'https://source.unsplash.com/800x600/?beach',
  },
  {
    id: '2',
    title: 'Mountain Adventure',
    description: 'Hike through the mountains and enjoy fresh air.',
    image: 'https://source.unsplash.com/800x600/?mountain',
  },
  {
    id: '3',
    title: 'City Life',
    description: 'Experience the vibrant nightlife and cityscape.',
    image: 'https://source.unsplash.com/800x600/?city',
  },
  {
    id: '4',
    title: 'Forest Escape',
    description: 'Relax in the deep and peaceful forest.',
    image: 'https://source.unsplash.com/800x600/?forest',
    
  },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => alert(`You selected ${item.title}`)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome, User!</Text>
        <Icon name="notifications-none" size={28} color="#333" />
      </View>

      {/* FlatList for content */}
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 3,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
