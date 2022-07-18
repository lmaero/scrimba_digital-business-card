import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <main className="contact">
            <header className="contact__header">
                <h1 className="contact__main-title">Luis Guzman</h1>
                <h2 className="contact__position">Fullstack Developer</h2>
                <a className="contact__website"
                   href="https://lmaero.pro">lmaero.pro</a>
                <div className="contact__buttons">
                    <a className="button"
                       href="mailto:luis.g@lmaero.pro">
                        <ion-icon name="mail-outline"></ion-icon>
                        Email</a>
                    <a className="button button--blue"
                       href="https://linkedin.com/in/lmaeropro">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        LinkedIn</a>
                </div>
            </header>

            <article className="article">
                <h2 className="article__title">About</h2>
                <p className="article__paragraph">Hi! I'm an aeronautical
                    engineer from Zipaquirá, Colombia, specialized in Design For
                    Manufacturing (DFM). I consider myself a fullstack developer
                    enthusiast and hobbyist.</p>
            </article>

            <article className="article">
                <h2 className="article__title">Interests</h2>
                <p className="article__paragraph">Interested in high-impact
                    projects to deliver new products and services for the
                    aerospace/defense field.</p>
            </article>
        </main>
    );
}

export default Contact;
