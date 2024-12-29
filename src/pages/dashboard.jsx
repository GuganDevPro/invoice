import Dashboard from "@/components/dashboard/dashboard"
// import Popup from "../components/popup/popup";
import React, { useState, useEffect } from "react";

export default function Home() {
  // const [isOpen, setIsOpen] = useState(false);
  
  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);
  return (
    <>
    {/* <Popup isOpen={isOpen} closeModal={closeModal}/> */}
    <Dashboard/>
    </>
  );
}
