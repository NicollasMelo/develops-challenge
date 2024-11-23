import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('http://localhost:3002/countries');
    const countries = response.data;
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries' });
  }
}
