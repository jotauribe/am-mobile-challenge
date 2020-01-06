import axios from 'axios'

export const getHotels = async () => {
  const { data } = await axios.get('http://localhost:3000/api/hotel')
  return data.hotel
}
