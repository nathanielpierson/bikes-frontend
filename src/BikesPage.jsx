import { BikesIndex } from './BikesIndex';
import { BikesNew } from "./BikesNew";
import axios from 'axios';
import { useState, useEffect } from 'react';


export function BikesPage() {
  const [bikes, setBikes] = useState([]);
const handleIndex = () => {
  console.log('fetching data...');
  axios.get('http://localhost:3000/bikes.json')
  .then(function (response) {
    console.log('inside the .then')
    console.log(response.data);
    setBikes(response.data);
  })
  console.log('after the .then') 
  }

  useEffect(handleIndex, []);

  return (
    <div>
    <BikesNew />
    <BikesIndex bikes={bikes} />
    </div>
  );
  }

