import React from "react";
import styles from './Header.module.scss';
import classNames from "classnames";

export default function Header() {

    return (
        <header className={styles.header} id="header">

            <div className={styles.container}>
                
                <nav className={styles.header__nav}>
                    <div className={styles.header__links}>
                        <div className="header__logo">
                            <a href="#"><img src="img/logo-real.png" alt=""/></a>
                        </div>
                        <ul>
                            <li><a className={classNames(styles.header__link, styles.linksetting)} href="dcs">Каталог</a></li>
                            <li><a className={classNames(styles.header__link, styles.linksetting)} href="#mip-about-us">О нас</a></li>
                            <li><a className={classNames(styles.header__link, styles.linksetting)} href="#contact">Контакты</a></li>
                        </ul>
                    </div>
                    <div className={styles.header__contact}>
                        <div className={styles.header__tel}><a className="linksetting" href="tel:+380670000077">+38 068 391 18 05</a></div>
                        <div className={styles.header__call}><a href="#myModal" data-hystmodal="#myModal" class="modal-open">Заказать звонок</a></div>
                    </div>
                </nav>
            </div>

            <div class={styles.hamburger}>
                <div class={styles.hamburger__menu}>
                    <h3 class="hamburger__h3">Mari i Poll</h3>
                    <div class="hamburger__links">
                        <ul>
                            <li><a class="ham-link" href="#c" onclick="closeMenu()">Каталог</a></li>
                            <li><a class="ham-link" href="#mip-about-us" onclick="closeMenu()">О нас</a></li>
                            <li><a class="ham-link" href="#contact" onclick="closeMenu()">Контакты</a></li>
                            <li><a href="#myModal" data-hystmodal="#myModal" class="modal-open">Заказать звонок</a></li>
                        </ul>
                    </div>
                </div>
                <button class="hamburger__btn hamburger-line">
                    <span>Menu</span>
                </button>
            </div>


        </header>
    )
}



{/* <div className="header__content">
<h1 class="animate__animated animate__bounceInUp">мари и поль - <br/> игрушки с душой 
    <svg class="bob" width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5721 1.66367C15.6403 0.590857 14.3617 0 12.9717 0C11.9327 0 10.9811 0.348712 10.1434 1.03637C9.7207 1.38348 9.33769 1.80814 9 2.3038C8.66245 1.80829 8.2793 1.38348 7.85646 1.03637C7.01889 0.348712 6.06734 0 5.02831 0C3.63826 0 2.35959 0.590857 1.42781 1.66367C0.507156 2.72395 0 4.17244 0 5.74252C0 7.35852 0.567307 8.83778 1.78528 10.3979C2.87485 11.7935 4.44081 13.2102 6.25424 14.8507C6.87346 15.411 7.57535 16.046 8.30415 16.7224C8.49669 16.9015 8.74374 17 9 17C9.25612 17 9.50331 16.9015 9.69557 16.7227C10.4244 16.0461 11.1267 15.4108 11.7462 14.8503C13.5593 13.2101 15.1253 11.7935 16.2149 10.3978C17.4328 8.83778 18 7.35852 18 5.74238C18 4.17244 17.4928 2.72395 16.5721 1.66367Z" fill="white"/>
    </svg>
</h1>
<p>Качественные мягкие игрушки любых размеров  от украинского производителя. Порадуйте самых дорогих и любимых людей плюшевым любимцем!</p>
<button class="header__btn" type="button">Узнать больше</button>
</div> */}