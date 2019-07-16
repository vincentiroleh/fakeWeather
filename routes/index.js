import express from 'express';
import Controller from '../controllers/index';

const route = express.Router();
route.get('/api/v1/weather', Controller.weather);
route.get('/api/v1/weather/cities', Controller.Allweather);


export default route;