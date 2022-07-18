import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <a href="https://twitter.com">
                <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://facebook.com">
                <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://instagram.com">
                <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://github.com/lmaero">
                <ion-icon name="logo-github"></ion-icon>
            </a>
        </footer>
    );
}

export default Footer;
