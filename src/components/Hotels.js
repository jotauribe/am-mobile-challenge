import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'

import Header from './Header'
import Hotel from './Hotel'
import { getHotels } from '../services/hotelService'

const IMAGE_URL =
  'https://images.almundo.com/201/25000000/24120000/24116000/24115924/5fb80015_z.jpg'

const Hotels = ({ navigation }) => {
  const [hotels, setHotels] = React.useState([])

  React.useEffect(() => {
    const fetchHotels = async () => {
      const hotels = await getHotels()
      setHotels(hotels)
    }

    fetchHotels()
  }, [])

  return (
    <Container>
      <Header navigation={navigation} />
      <Content
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
      >
        {hotels.map(h => (
          <Hotel
            name="El hotel de Ronaldo"
            rating={400}
            price={500}
            img={IMAGE_URL}
          />
        ))}
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({ container: { padding: 10 } })

export default Hotels
