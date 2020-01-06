/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const Hotel = ({ name, img, price, rating }) => {
  console.log(img)
  return (
    <View>
      {img && (
        <Image
          style={{ width: '100%', height: 200 }}
          source={{ uri: img }}
        ></Image>
      )}
      <Text>{name}</Text>
      <Text>{rating}</Text>
      <Text>{price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Hotel
