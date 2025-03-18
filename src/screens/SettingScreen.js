import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation(); 
  const handleClick = () => {
    navigation.navigate('Login'); 
   };

  return (
    <View>
      <TouchableOpacity onPress={handleClick}>
        <Text>Go to Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
