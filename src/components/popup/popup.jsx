import React, { useState, useEffect } from "react";
import Modal from "react-modal";
Modal.setAppElement("#__next");
import { charOnly,numAndChar,numOnly } from '@/utils/common';

import PopupStyling from "../popup/popup.module.scss"

export default function Popup({ isOpen, closeModal }) {
    
    const [formData, setFormData] = useState({
        product_name: "",
        product_price: "",
        image: null,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleImageChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          image: e.target.files[0],
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data: ", formData);
        closeModal();
      };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Form Popup"
        className={`${PopupStyling["modal-content"]}`}
        overlayClassName={`${PopupStyling["modal-overlay"]}`}
      >
        <form onSubmit={handleSubmit} className={`${PopupStyling["form-container"]}`}>
          <h2 className={`${PopupStyling["modal-title"]}`}>Add Product Details</h2>
          <div className={`${PopupStyling["form-group"]}`}>
            <label htmlFor="ProductName" className={`${PopupStyling["form-label"]}`}>
              Product Name
            </label>
          <input
            type="text"
            name="product_name"
            placeholder="Enter the product name"
            value={formData.input1}
            onChange={handleChange}
            onKeyDown={numAndChar}
            required
            className={`${PopupStyling["form-input"]}`}
          />
          </div>
          <div className={`${PopupStyling["form-group"]}`}>
            <label htmlFor="ProductPrice" className={`${PopupStyling["form-label"]}`}>
            Product Price
            </label>
          <input
            type="text"
            name="product_price"
            placeholder="Enter the product price"
            value={formData.input2}
            onChange={handleChange}
            onKeyDown={numOnly}
            required
            className={`${PopupStyling["form-input"]}`}
          />
          </div>
          <div className={`${PopupStyling["form-group"]}`}>
            <label htmlFor="prodcutImg" className={`${PopupStyling["form-label"]}`}>
              Product Image
            </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className={`${PopupStyling["file-input"]}`}
          />
          </div>
          <div className={`${PopupStyling['button-group']}`}>
            <button type="button" onClick={closeModal} className={`${PopupStyling["cancel-btn"]}`}>
              Cancel
            </button>
            <button type="submit" className={`${PopupStyling["submit-btn"]}`}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

