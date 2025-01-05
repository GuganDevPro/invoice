import React, { useState, useEffect } from "react";
import productsStyling from "../products/products.module.scss";


export default function productsTab({ openModal, isLightMode }) {

  const [isGridActive, setIsGridActive] = useState(false);
  const [isListActive, setIsListActive] = useState(true);

  const handleGridClick = () => {
    setIsListActive(false);
    setIsGridActive(true);
  };

  const handleListClick = () => {
    setIsGridActive(false);
    setIsListActive(true);
  };

  return (
    <>
      <div className={`${productsStyling['app-content-actions']} ${isLightMode ? productsStyling['light'] : ""}`}>
        <input className={`${productsStyling['search-bar']}`} placeholder="Search..." type="text" />
        <div className={`${productsStyling['app-content-actions-wrapper']}`}>
          <button className={`${productsStyling['app-content-headerButton']}`} onClick={openModal}>Add Product</button>
          <button className={`${productsStyling['action-button']} list ${isListActive ? productsStyling['active'] : ""}`} title="List View" onClick={handleListClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
          </button>
          <button className={`${productsStyling['action-button']} grid ${isGridActive ? productsStyling['active'] : ""}`} title="Grid View" onClick={handleGridClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
          </button>
        </div>
      </div>
      <div className={`${productsStyling['products-area-wrapper']} ${isGridActive ? productsStyling['gridView'] : productsStyling['tableView']}`}>
        <div className={`${productsStyling['products-header']}`}>
          <div className={`${productsStyling['product-cell']} ${productsStyling['image']}`}>
            Items
            <button className={`${productsStyling['sort-button']}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" /></svg>
            </button>
          </div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['category']}`}>Category<button className={`${productsStyling['sort-button']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" /></svg>
          </button></div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['status-cell']}`}>Status<button className={`${productsStyling['sort-button']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" /></svg>
          </button></div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['sales']}`}>Sales<button className={`${productsStyling['sort-button']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" /></svg>
          </button></div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['stock']}`}>Stock<button className={`${productsStyling['sort-button']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" /></svg>
          </button></div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['price']}`}>Price<button className={`${productsStyling['sort-button']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" /></svg>
          </button></div>
        </div>
        <div className={`${productsStyling['products-row']}`}>
          <button className={`${productsStyling['cell-more-button']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
          </button>
          <div className={`${productsStyling['product-cell']} ${productsStyling['image']}`}>
            <img src="assets/others/background.png" alt="product" />
            <span>Ocean</span>
          </div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['category']}`}><span className={`${productsStyling['cell-label']}`}>Category:</span>Furniture</div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['status-cell']}`}>
            <span className={`${productsStyling['cell-label']}`}>Status:</span>
            <span className={`${productsStyling['status']} ${productsStyling['active']}`}>Active</span>
          </div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['sales']}`}><span className={`${productsStyling['cell-label']}`}>Sales:</span>11</div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['stock']}`}><span className={`${productsStyling['cell-label']}`}>Stock:</span>36</div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['price']}`}><span className={`${productsStyling['cell-label']}`}>Price:</span>$560</div>
        </div>
        <div className={`${productsStyling['products-row']}`}>
          <button className={`${productsStyling['cell-more-button']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
          </button>
          <div className={`${productsStyling['product-cell']} ${productsStyling['image']}`}>
            <img src="assets/others/index2.jpeg" alt="product" />
            <span>Lou</span>
          </div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['category']}`}><span className={`${productsStyling['cell-label']}`}>Category:</span>Kitchen</div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['status-cell']}`}>
            <span className={`${productsStyling['cell-label']}`}>Status:</span>
            <span className={`${productsStyling['status']} ${productsStyling['disabled']}`}>Disabled</span>
          </div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['sales']}`}><span className={`${productsStyling['cell-label']}`}>Sales:</span>6</div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['stock']}`}><span className={`${productsStyling['cell-label']}`}>Stock:</span>46</div>
          <div className={`${productsStyling['product-cell']} ${productsStyling['price']}`}><span className={`${productsStyling['cell-label']}`}>Price:</span>$710</div>
        </div>
      </div>
    </>
  );
}