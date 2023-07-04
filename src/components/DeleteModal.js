import React from "react";

const DeleteModal = ({ rowData, onClose, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Delete Car</h2>
        <p>Are you sure you want to delete this car?</p>
        <div className="modal-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="button" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
