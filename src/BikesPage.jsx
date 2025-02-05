import { BikesIndex } from './BikesIndex';
import { BikesNew } from "./BikesNew";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Modal } from "./Modal";


export function BikesPage() {
  const [bikes, setBikes] = useState([]);
  const [isBikesShowVisible, setIsBikesShowVisible] = useState(false);
const [currentBike, setCurrentBike] = useState({});

const handleIndex = () => {
  console.log('fetching data...');
  axios.get('http://localhost:3000/bikes.json')
  
  .then(function (response) {
    console.log('inside the .then');
    console.log(response.data);
    setBikes(response.data);
  })
  console.log('after the .then');
  }

  useEffect(handleIndex, []);

  const handleShow = (bike) => {
    console.log(bike);
    setCurrentBike(bike);
    setIsBikesShowVisible(true);
  }

  const closeModal = () => {
    setIsBikesShowVisible(false);
  }

  return (
    <div>
    <BikesNew />
    <BikesIndex bikes={bikes} onShow={handleShow} />
    <Modal show={isBikesShowVisible} onClose={closeModal}>
      <BikesShow bike={currentBike} />
    </Modal>
    </div>
  );
  }

