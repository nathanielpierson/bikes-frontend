import { BikesIndex } from "./BikesIndex";
import { BikesNew } from "./BikesNew";
import { BikesShow } from "./BikesShow";
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

  const handleCreate = (params) => {
  axios.post('http://localhost:3000/bikes.json', params).then(response => {
    console.log("hell0");
  })
  }
 
  const handleUpdate = (event) => {
    //this line is optional
    event.preventDefault()
    const params = new FormData(event.target)
    axios.patch(`https://localhost:3000/bikes/${bike.id}.json`, params).then(response => {
    window.location.href = '/'
  })
}

  const handleDestroy = () => {
    console.log ('delete happening');
    axios.delete(`https://localhost:3000/bikes/${bike.id}.json`)
    }
    const closeModal = () => {
      setIsBikesShowVisible(false);
    }
    return (
      
      // <div>
      //   <p>{bike.brand}</p>
      //   <p>{bike.model}</p>
      //   <p>{bike.image_url}</p>
      //   <form onSubmit={handleUpdate}>
      //       <p>ingredients: <input type="text" name="brand" defaultValue={bike.brand} /></p>
      //       <p>model: <input type="text" name="model" defaultValue={bike.model} /></p>
      //       <p>image_url: <input type="text" name="image_url" defaultValue={bike.image_url} /></p>
      //       <button>Update Recipe</button>
      //     </form>
      // </div>
    <div>
    <BikesNew onCreate={handleCreate} />
    <BikesIndex bikes={bikes} onShow={handleShow} />
    <Modal show={isBikesShowVisible} onClose={closeModal}>
    <BikesShow bike={currentBike} />
    </Modal>
    </div>
  )
}


