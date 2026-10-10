require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

app.get('/', (req, res) => {
  res.json({ status: "Gacor!", message: "Server Backend Toko Digital Geren Berjalan Normal" });
});

app.post('/api/payment/webhook', (req, res) => {
  console.log("Menerima Webhook dari Stenly.id:", req.body);
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
