const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/route', async (req, res) => {
  const { startLocation, destination } = req.body;

  try {
    // Replace this with real coordinates using geocoding or route API like OpenRouteService
    // Dummy response
    const distance = "5.4 km";
    const mode = "Bicycle"; // Based on low carbon emission

    res.json({ distance, mode });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to get route data");
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));