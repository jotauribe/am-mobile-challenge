import React from 'react'
import { Button, Text, Body, Title, Left, Right, Header } from 'native-base'

const CustomHeader = ({ navigation }) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={navigation.goBack}>
          <Text>Go Back</Text>
        </Button>
      </Left>
      <Body>
        <Title>Hotels</Title>
      </Body>
      <Right />
    </Header>
  )
}

export default CustomHeader
