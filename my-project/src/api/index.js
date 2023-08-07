const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Örnek bir veritabanı
const economoyClass = [
  {
    "row": 1,
    "seats": [
      { "seat": "1A", "isSelected": false, "status": true },
      { "seat": "1B", "isSelected": false, "status": true },
      { "seat": "1C", "isSelected": false, "status": true },
      { "seat": "1D", "isSelected": false, "status": true },
      { "seat": "1E", "isSelected": false, "status": true },
      { "seat": "1F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 2,
    "seats": [
      { "seat": "2A", "isSelected": false, "status": true },
      { "seat": "2B", "isSelected": false, "status": true },
      { "seat": "2C", "isSelected": false, "status": true },
      { "seat": "2D", "isSelected": false, "status": true },
      { "seat": "2E", "isSelected": false, "status": false },
      { "seat": "2F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 3,
    "seats": [
      { "seat": "3A", "isSelected": false, "status": true },
      { "seat": "3B", "isSelected": false, "status": true },
      { "seat": "3C", "isSelected": false, "status": true },
      { "seat": "3D", "isSelected": false, "status": true },
      { "seat": "3E", "isSelected": false, "status": true },
      { "seat": "3F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 4,
    "seats": [
      { "seat": "4A", "isSelected": false, "status": true },
      { "seat": "4B", "isSelected": false, "status": true },
      { "seat": "4C", "isSelected": false, "status": true },
      { "seat": "4D", "isSelected": false, "status": true },
      { "seat": "4E", "isSelected": false, "status": true },
      { "seat": "4F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 5,
    "seats": [
      { "seat": "5A", "isSelected": false, "status": true },
      { "seat": "5B", "isSelected": false, "status": true },
      { "seat": "5C", "isSelected": false, "status": true },
      { "seat": "5D", "isSelected": false, "status": false },
      { "seat": "5E", "isSelected": false, "status": true },
      { "seat": "5F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 6,
    "seats": [
      { "seat": "6A", "isSelected": false, "status": true },
      { "seat": "6B", "isSelected": false, "status": true },
      { "seat": "6C", "isSelected": false, "status": true },
      { "seat": "6D", "isSelected": false, "status": true },
      { "seat": "6E", "isSelected": false, "status": true },
      { "seat": "6F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 7,
    "seats": [
      { "seat": "7A", "isSelected": false, "status": true },
      { "seat": "7B", "isSelected": false, "status": false },
      { "seat": "7C", "isSelected": false, "status": false },
      { "seat": "7D", "isSelected": false, "status": false },
      { "seat": "7E", "isSelected": false, "status": true },
      { "seat": "7F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 8,
    "seats": [
      { "seat": "8A", "isSelected": false, "status": true },
      { "seat": "8B", "isSelected": false, "status": true },
      { "seat": "8C", "isSelected": false, "status": true },
      { "seat": "8D", "isSelected": false, "status": true },
      { "seat": "8E", "isSelected": false, "status": true },
      { "seat": "8F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 9,
    "seats": [
      { "seat": "9A", "isSelected": false, "status": true },
      { "seat": "9B", "isSelected": false, "status": false },
      { "seat": "9C", "isSelected": false, "status": true },
      { "seat": "9D", "isSelected": false, "status": false },
      { "seat": "9E", "isSelected": false, "status": true },
      { "seat": "9F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 10,
    "seats": [
      { "seat": "10A", "isSelected": false, "status": true },
      { "seat": "10B", "isSelected": false, "status": true },
      { "seat": "10C", "isSelected": false, "status": true },
      { "seat": "10D", "isSelected": false, "status": true },
      { "seat": "10E", "isSelected": false, "status": true },
      { "seat": "10F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 11,
    "seats": [
      { "seat": "11A", "isSelected": false, "status": true },
      { "seat": "11B", "isSelected": false, "status": true },
      { "seat": "11C", "isSelected": false, "status": true },
      { "seat": "11D", "isSelected": false, "status": true },
      { "seat": "11E", "isSelected": false, "status": true },
      { "seat": "11F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 12,
    "seats": [
      { "seat": "12A", "isSelected": false, "status": true },
      { "seat": "12B", "isSelected": false, "status": false },
      { "seat": "12C", "isSelected": false, "status": true },
      { "seat": "12D", "isSelected": false, "status": true },
      { "seat": "12E", "isSelected": false, "status": false },
      { "seat": "12F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 13,
    "seats": [
      { "seat": "13A", "isSelected": false, "status": true },
      { "seat": "13B", "isSelected": false, "status": true },
      { "seat": "13C", "isSelected": false, "status": true },
      { "seat": "13D", "isSelected": false, "status": true },
      { "seat": "13E", "isSelected": false, "status": true },
      { "seat": "13F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 14,
    "seats": [
      { "seat": "14A", "isSelected": false, "status": true },
      { "seat": "14B", "isSelected": false, "status": false },
      { "seat": "14C", "isSelected": false, "status": true },
      { "seat": "14D", "isSelected": false, "status": true },
      { "seat": "14E", "isSelected": false, "status": true },
      { "seat": "14F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 15,
    "seats": [
      { "seat": "15A", "isSelected": false, "status": true },
      { "seat": "15B", "isSelected": false, "status": true },
      { "seat": "15C", "isSelected": false, "status": true },
      { "seat": "15D", "isSelected": false, "status": true },
      { "seat": "15E", "isSelected": false, "status": false },
      { "seat": "15F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 16,
    "seats": [
      { "seat": "16A", "isSelected": false, "status": true },
      { "seat": "16B", "isSelected": false, "status": true },
      { "seat": "16C", "isSelected": false, "status": true },
      { "seat": "16D", "isSelected": false, "status": true },
      { "seat": "16E", "isSelected": false, "status": true },
      { "seat": "16F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 17,
    "seats": [
      { "seat": "17A", "isSelected": false, "status": true },
      { "seat": "17B", "isSelected": false, "status": true },
      { "seat": "17C", "isSelected": false, "status": true },
      { "seat": "17D", "isSelected": false, "status": true },
      { "seat": "17E", "isSelected": false, "status": true },
      { "seat": "17F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 18,
    "seats": [
      { "seat": "18A", "isSelected": false, "status": true },
      { "seat": "18B", "isSelected": false, "status": true },
      { "seat": "18C", "isSelected": false, "status": true },
      { "seat": "18D", "isSelected": false, "status": true },
      { "seat": "18E", "isSelected": false, "status": true },
      { "seat": "18F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 19,
    "seats": [
      { "seat": "19A", "isSelected": false, "status": true },
      { "seat": "19B", "isSelected": false, "status": true },
      { "seat": "19C", "isSelected": false, "status": true },
      { "seat": "19D", "isSelected": false, "status": true },
      { "seat": "19E", "isSelected": false, "status": true },
      { "seat": "19F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 20,
    "seats": [
      { "seat": "20A", "isSelected": false, "status": true },
      { "seat": "20B", "isSelected": false, "status": true },
      { "seat": "20C", "isSelected": false, "status": true },
      { "seat": "20D", "isSelected": false, "status": true },
      { "seat": "20E", "isSelected": false, "status": true },
      { "seat": "20F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 21,
    "seats": [
      { "seat": "21A", "isSelected": false, "status": true },
      { "seat": "21B", "isSelected": false, "status": true },
      { "seat": "21C", "isSelected": false, "status": true },
      { "seat": "21D", "isSelected": false, "status": true },
      { "seat": "21E", "isSelected": false, "status": true },
      { "seat": "21F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 22,
    "seats": [
      { "seat": "22A", "isSelected": false, "status": true },
      { "seat": "22B", "isSelected": false, "status": true },
      { "seat": "22C", "isSelected": false, "status": false },
      { "seat": "22D", "isSelected": false, "status": true },
      { "seat": "22E", "isSelected": false, "status": true },
      { "seat": "22F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 23,
    "seats": [
      { "seat": "23A", "isSelected": false, "status": true },
      { "seat": "23B", "isSelected": false, "status": true },
      { "seat": "23C", "isSelected": false, "status": true },
      { "seat": "23D", "isSelected": false, "status": true },
      { "seat": "23E", "isSelected": false, "status": true },
      { "seat": "23F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 24,
    "seats": [
      { "seat": "24A", "isSelected": false, "status": true },
      { "seat": "24B", "isSelected": false, "status": true },
      { "seat": "24C", "isSelected": false, "status": true },
      { "seat": "24D", "isSelected": false, "status": true },
      { "seat": "24E", "isSelected": false, "status": true },
      { "seat": "24F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 25,
    "seats": [
      { "seat": "25A", "isSelected": false, "status": false },
      { "seat": "25B", "isSelected": false, "status": false },
      { "seat": "25C", "isSelected": false, "status": false },
      { "seat": "25D", "isSelected": false, "status": false },
      { "seat": "25E", "isSelected": false, "status": false },
      { "seat": "25F", "isSelected": false, "status": false }
    ]
  },
  {
    "row": 26,
    "seats": [
      { "seat": "26A", "isSelected": false, "status": true },
      { "seat": "26B", "isSelected": false, "status": true },
      { "seat": "26C", "isSelected": false, "status": true },
      { "seat": "26D", "isSelected": false, "status": true },
      { "seat": "26E", "isSelected": false, "status": true },
      { "seat": "26F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 27,
    "seats": [
      { "seat": "27A", "isSelected": false, "status": false },
      { "seat": "27B", "isSelected": false, "status": false },
      { "seat": "27C", "isSelected": false, "status": true },
      { "seat": "27D", "isSelected": false, "status": true },
      { "seat": "27E", "isSelected": false, "status": true },
      { "seat": "27F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 28,
    "seats": [
      { "seat": "28A", "isSelected": false, "status": true },
      { "seat": "28B", "isSelected": false, "status": true },
      { "seat": "28C", "isSelected": false, "status": true },
      { "seat": "28D", "isSelected": false, "status": true },
      { "seat": "28E", "isSelected": false, "status": true },
      { "seat": "28F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 29,
    "seats": [
      { "seat": "29A", "isSelected": false, "status": true },
      { "seat": "29B", "isSelected": false, "status": true },
      { "seat": "29C", "isSelected": false, "status": true },
      { "seat": "29D", "isSelected": false, "status": true },
      { "seat": "29E", "isSelected": false, "status": true },
      { "seat": "29F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 30,
    "seats": [
      { "seat": "30A", "isSelected": false, "status": true },
      { "seat": "30B", "isSelected": false, "status": true },
      { "seat": "30C", "isSelected": false, "status": true },
      { "seat": "30D", "isSelected": false, "status": true },
      { "seat": "30E", "isSelected": false, "status": true },
      { "seat": "30F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 31,
    "seats": [
      { "seat": "31A", "isSelected": false, "status": true },
      { "seat": "31B", "isSelected": false, "status": true },
      { "seat": "31C", "isSelected": false, "status": true },
      { "seat": "31D", "isSelected": false, "status": true },
      { "seat": "31E", "isSelected": false, "status": true },
      { "seat": "31F", "isSelected": false, "status": false }
    ]
  },
  {
    "row": 32,
    "seats": [
      { "seat": "32A", "isSelected": false, "status": true },
      { "seat": "32B", "isSelected": false, "status": true },
      { "seat": "32C", "isSelected": false, "status": true },
      { "seat": "32D", "isSelected": false, "status": true },
      { "seat": "32E", "isSelected": false, "status": true },
      { "seat": "32F", "isSelected": false, "status": true }
    ]
  },
  {
    "row": 33,
    "seats": [
      { "seat": "33A", "isSelected": false, "status": true },
      { "seat": "33B", "isSelected": false, "status": true },
      { "seat": "33C", "isSelected": false, "status": true },
      { "seat": "33D", "isSelected": false, "status": false },
      { "seat": "33E", "isSelected": false, "status": true },
      { "seat": "33F", "isSelected": false, "status": true }
    ]
  }
];
    
  

// Tüm görevleri getiren endpoint
app.get('/api/economoyClass', (req, res) => {
  res.json(economoyClass);
});

// Yeni görev ekleyen endpoint
app.post('/api/economoyClass', (req, res) => {
  const { title } = req.body;
  const newTodo = { id: economoyClass.length + 1, title, completed: false };
  economoyClass.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
