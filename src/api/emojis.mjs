// const express = require('express');
import express from 'express';


const router = express.Router();

router.get('/', async(req, res) => {
  try {
    const response = await fetch('https://api.n2yo.com/rest/v1/satellite/above/91.702/-40.014/0/70/18/&apiKey=PHYRDT-U9G4PG-5LS74C-5269');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



export default router;

// module.exports = router;
