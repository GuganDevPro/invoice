import Products from "@/components/products/products"
import Header from "../components/common/header/header";
import React, { useState, useEffect } from "react";
import DashboardStyling from "../components/products/products.module.scss";
import Popup from "../components/popup/popup";
import Sidebar from "@/components/sidebar/sidebar";
import HomePage from "@/components/home/home";


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightMode, setIsLightMode] = useState(true);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isUserDropdownVisible, setUserDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleUserDropdown = () => {
    setUserDropdownVisible(!isUserDropdownVisible);
  };
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleClick = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const toggleModeSwitch = () => {
    setIsLightMode((prev) => !prev);
  };

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isLightMode) {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
    } else {
      htmlElement.classList.remove("light");
      htmlElement.classList.add("dark");
    }
  }, [isLightMode]);

  useEffect(() => {
        console.log('test')
        setDropdownVisible(false);
  }, [activeIndex]);

  return (
    <>
      <title>Dashboard | Invoice</title>
      <Popup isOpen={isOpen} closeModal={closeModal} />
      <div className={`${DashboardStyling['app-container']}`}>
        <Sidebar activeIndex={activeIndex} handleClick={handleClick} />
        <div className={`${DashboardStyling['app-content']}`}>
          <Header activeIndex={activeIndex} toggleModeSwitch={toggleModeSwitch} isLightMode={isLightMode} handleClick={handleClick} isDropdownVisible={isDropdownVisible} isUserDropdownVisible={isUserDropdownVisible} toggleDropdown={toggleDropdown} toggleUserDropdown={toggleUserDropdown}/>
          {activeIndex ==0 && <HomePage/>}
          {activeIndex ==1 && <Products openModal={openModal} isLightMode={isLightMode} />}
        </div>
      </div>
    </>
  );
}
