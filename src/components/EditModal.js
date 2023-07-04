import React from "react";

const EditModal = ({ rowData, onClose, onSave }) => {
  const handleSave = () => {
    const updatedData = {
      ...rowData,
      car_color: document.getElementById("edit-color").value,
      price: document.getElementById("edit-price").value,
      availability: document.getElementById("edit-availability").checked,
    };
    onSave(updatedData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Car</h2>
        <form>
          <label htmlFor="edit-car">Company:</label>
          <input type="text" id="edit-car" defaultValue={rowData.car} disabled />
          <label htmlFor="edit-model">Model:</label>
          <input type="text" id="edit-model" defaultValue={rowData.car_model} disabled />
          <label htmlFor="edit-vin">VIN:</label>
          <input type="text" id="edit-vin" defaultValue={rowData.car_vin} disabled />
          <label htmlFor="edit-year">Year:</label>
          <input type="text" id="edit-year" defaultValue={rowData.car_model_year} disabled />

          <label htmlFor="edit-color">Color:</label>
          <input type="text" id="edit-color" defaultValue={rowData.car_color} />
          <label htmlFor="edit-price">Price:</label>
          <input type="text" id="edit-price" defaultValue={rowData.price} />
          <label htmlFor="edit-availability">Availability:</label>
          <input
            type="checkbox"
            id="edit-availability"
            defaultChecked={rowData.availability}
          />

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

export default EditModal;
