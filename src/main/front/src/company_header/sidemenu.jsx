import React, { useState } from 'react';
import './sidemenu.css';
import {RxHamburgerMenu} from "react-icons/rx";
import { IoPersonCircleOutline } from "react-icons/io5";
import {useNavigate} from "react-router-dom";

function SideMenu(){
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };
    const logout=() =>{
        /*로그아웃 로직*/
        navigate("/login");
    }

    return (
        <>
            <div className={`side-menu ${isOpen ? 'open' : 'closed'}`} onClick={handleMenuToggle}/>
            <div>
                <RxHamburgerMenu className="menu" size={50} onClick={handleMenuToggle} >
                    {isOpen ? '닫기' : '열기'}
                </RxHamburgerMenu>
                <nav className={`side-menu-content ${isOpen ? 'open' : 'closed'}`}>
                    <ul className="side">
                        <a href="/company/details">
                            <li><IoPersonCircleOutline size={50} className="image-logo"/> 00기업</li>
                        </a>
                        <a href="/company/modifying-information">
                            <li>정보 수정</li>
                        </a>
                        <a href="/company/payment">
                            <li>결제내역</li>
                        </a>
                        <a href="/company/report">
                            <li>신고내역</li>
                        </a>
                    </ul>
                    <button className="logout-button" onClick={logout}>로그아웃</button>
                </nav>
            </div>
        </>
    );
}

export default SideMenu;
