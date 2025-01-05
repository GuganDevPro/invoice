import headerStyling from "../../common/header/header.module.scss"
import { useGlobalContext } from "@/utils/GlobalProvider";
import React, { useState, useEffect } from "react";

export default function Header({activeIndex,toggleModeSwitch,isLightMode,handleClick,isDropdownVisible,isUserDropdownVisible,toggleDropdown,toggleUserDropdown}) {
  const { sideBarOptions } = useGlobalContext();


   const profileOptions =[{iconPath:"assets/others/user.svg",options:'Admin'},{iconPath:"assets/others/logout.svg",options:'Logout'}]
    return (
      <>
       <div className={`${headerStyling['app-content-header']}`}>
            <h1 className={`${headerStyling['app-content-headerText']}`} >{sideBarOptions[activeIndex]?.options}</h1>&nbsp;
            {isDropdownVisible ? (<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={toggleDropdown}
              className={`${headerStyling["up-arrow"]}`}
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>) : (<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={toggleDropdown}
              className={`${headerStyling["down-arrow"]}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>)}
            {isDropdownVisible && (
              <ul className={`${headerStyling['drpdwnUl']}`}>
                {sideBarOptions.map((item, index) => (
                  <li className={`${headerStyling['drpdwnli']} ${activeIndex === index ? headerStyling['active'] : ""}`} onClick={() => handleClick(index)} style={{ padding: '8px 16px', cursor: 'pointer' }} >{item.options}</li>
                ))}
              </ul>
            )}
            <button className={`${headerStyling['mode-switch']} ${isLightMode ? headerStyling['active'] : ""}`} title="Switch Theme" onClick={toggleModeSwitch}>
              <svg className={`${headerStyling['moon']}`} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </button>
            <div className={`${headerStyling['account-info']}`}>
            <div className={`${headerStyling['account-info-picture']}`} >
              <img className={`${headerStyling['profile-icon']}`} src="assets/others/profile.jpeg" alt="Account" onClick={toggleUserDropdown}/>
              {isUserDropdownVisible && (
              <ul className={`${headerStyling['drpdwnUl']}`}>
              {profileOptions.map((item,index) =>(
                <div className={`${headerStyling['profile-popup']}`}>
                  <img src={item.iconPath} className={`${headerStyling["user-icon"]}`}></img>
                  <li className={`${headerStyling['drpdwnli']}`} style={{ padding: '0px 16px', cursor: 'pointer' }} >{item.options}</li>
                </div>
                  ))}
              </ul>
            )}
            </div>
          </div>
          </div>
      </>
    );
  }
  //  #506b88