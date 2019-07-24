import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = (props) => {
     return (
        <View style={styles.header_footer_style}>
            <Text style={styles.textStyle}> React Native - Footer</Text>
        </View>
        );
      
}

const styles = StyleSheet.create({
    header_footer_style: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
});

export default Footer;
