const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/flight-search', async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://skyscanner3.p.rapidapi.com/api/v1/searchFlights',
            params: {
                origin: 'SFO',
                destination: 'LAX',
                departureDate: '2024-12-01',
                adults: '1',
                cabinClass: 'economy',
                specialFare: 'senior citizn'
            },
            headers: {
                'X-RapidAPI-Key': 'd41f217a76msh1071470c4cec3fap1cba20jsnbe582cb18e11',
                'X-RapidAPI-Host': 'skyscanner3.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
