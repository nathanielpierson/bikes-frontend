/* eslint-disable react/prop-types */

export function BikesIndex({ bikes, onShow }) {
  console.log(bikes);

  return (
    <div id="bikes-index">
      <h1>All bikes</h1>

      {bikes.map((bike) => (
        <div key={bike.id}>
          <div>
            brand: {bike.brand}
          </div>
          <div>
            model: {bike.model}
          </div>
          <div>
            <img src={bike.image_url} />
          </div>
          <button onClick={() => onShow(bike)}>More info</button>
          <br />
          <br />
          <br />
        </div>
      ))}


    </div>
  );
}
