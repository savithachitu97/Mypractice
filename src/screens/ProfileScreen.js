import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Profile'); 
  };

  return (
    <View>
      <TouchableOpacity onPress={handleClick}>
        
        <Text>Go to SignUp</Text>       </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
