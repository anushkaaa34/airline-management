const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = 3000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Somee@123",
    database:"flightdb",
    port:3306
  });
  
  db.connect(function(err) {
    if (err) console.log(err);
    else console.log("Connected!");
  //   con.query("CREATE DATABASE mydb", function (err, result) {
  //     if (err) throw err;
  //     console.log("Database created");
  //   });
  });

app.use(cors());
app.use(express.json());


//post endpoint to recieve from data

app.post('/api/userSearchDetails', (req, res) => {
    const { from, to, departure, cabinClass, adults, children } = req.body;

    const query = 'INSERT INTO userSearchDetails (origin, destination, departureDate, cabinclass, adults, children) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [from, to, departure, cabinClass, adults, children], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        res.status(200).send('Data inserted successfully');
    });
});

// Serve static files from the React app
//app.use(express.static(path.join(__dirname, 'client/build')));

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

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
