import React from 'react'
import doc1 from "../assets/undraw_doctors_hwty.svg"

const Header = () => {
  return (
    <header id="header">
      <div className="intro-logo jumbo-bg">
        <h1>Sign Language Consultation Made Easy</h1>
        <h3>Using sign language has never been easier using our product</h3>
        <img
            src= {doc1}
            alt="../assets/undraw_doctors_hwty.svg"
          />
        <div className="intro-button">
          <a href="/meet">Join Meeting</a>
        </div>
      </div>

      <style jsx>{`
        header {
          margin-bottom: 1rem;
          height: 100vh;
        }
        .intro-logo {
          display: flex;
          position: absolute;
          top: 5em;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
        }

        .intro-logo h1 {
          font-size: 1.8em;
          font-weight: 999;
          font-family: 'Roboto', sans-serif;
          color: Black;
        }
        @media (min-width: 768px) {
          .intro-logo h1 {
            font-size: 3.5em;
          }
        }
        .intro-logo h3 {
          font-size: 1rem;
          font-weight: 300;
          color: var(--gray-color-1);
          margin-bottom: 3em;
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }
        .company-icons__item + .company-icons__item {
          margin-left: 1rem;
        }
        @media (min-width: 575px) {
          .company-icons__item + .company-icons__item {
            margin-left: 2rem;
          }
        }
        .company-icons__item i {
          margin-right: 5px;
        }
        .intro-button {
          margin-top: 2.3em;
          margin-bottom: 3em;
        }
        .intro-button a {
          padding: 0.65em 2.6em;
          border-radius: 10px;
          color: white;
          background: black;
          transition: all 0.5s;
        }
        .intro-button a:hover {
          background-color: grey;
          color: white;
        }

        .company-icons {
          color: var(--gray-color-2);
          font-size: 0.95em;
        }
        .company-icons__item {
          transition: all 0.5s;
        }
        .company-icons__item:hover {
          color: var(--brand-color);
          cursor: pointer;
        }
      `}</style>
    </header>
  )
}

export default Header
