import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SearchBar = ({searchTerm, onSearchTermChange, onSearchTermSubmit}) => {
  return (
    <View style={styles.background}>
      <FeatherIcon name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 36,
    alignSelf: 'center',
    marginHorizontal: 16,
  },
});

export default SearchBar;
