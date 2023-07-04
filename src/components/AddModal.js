import React, { useState } from "react";

const AddModal = ({ onClose, onSave }) => {
  const [fieldError, setFieldError] = useState("");
  const [car, setCar] = useState("");
  const [carModel, setCarModel] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState(false);

  const handleSave = () => {
    if (car && carModel && color && year && vin && price) {
      const newData = {
        car,
        car_model: carModel,
        car_color: color,
        car_model_year: year,
        car_vin: vin,
        price,
        availability,
      };
      onSave(newData);
      setFieldError("");
    } else {
      setFieldError("Please fill in all fields.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Car</h2>

        <form>
          <label htmlFor="add-car">Car:</label>
          <input
            type="text"
            id="add-car"
            value={car}
            onChange={(e) => setCar(e.target.value)}
          />

          <label htmlFor="add-car-model">Model:</label>
          <input
            type="text"
            id="add-car-model"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
          />

          <label htmlFor="add-color">Color:</label>
          <input
            type="text"
            id="add-color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <label htmlFor="add-year">Year:</label>
          <input
            type="text"
            id="add-year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <label htmlFor="add-vin">VIN:</label>
          <input
            type="text"
            id="add-vin"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
          />

          <label htmlFor="add-price">Price:</label>
          <input
            type="text"
            id="add-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label htmlFor="add-availability">Availability:</label>
          <input
            type="checkbox"
            id="add-availability"
            checked={availability}
            onChange={() => setAvailability(!availability)}
          />

          {fieldError && <p className="error">{fieldError}</p>}

          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
