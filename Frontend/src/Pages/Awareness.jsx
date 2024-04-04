import React, { useEffect } from "react";
import "../styles/awareness.css";

const AwarenessPage = () => {
  return (
    <div className="awareness-container">
        <div className="organ">
      <h1>Organ Donation Awareness</h1>
      <p>
        Welcome to our organ donation awareness page. Here, we aim to provide
        information and raise awareness about the importance of organ donation.
      </p>

      <h2>Why Organ Donation Matters</h2>
      <p>
        Organ donation is a selfless act that saves lives. By donating your
        organs, you can give others a second chance at life.
      </p>
          </div>
      <div className="awareness-content">
        <div className="myths-facts-container">
          <h2>Myths vs. Facts</h2>
          <ul>
            <li>
              <strong>Myth:</strong> Organ donation is against my religion.
              <p>
                <strong>Fact:</strong> Most major religions support organ donation
                as an act of charity and compassion.
              </p>
            </li>
            <li>
              <strong>Myth:</strong> Doctors won't work as hard to save my life if
              they know I'm an organ donor.
              <p>
                <strong>Fact:</strong> Medical professionals are dedicated to
                saving lives, and your status as an organ donor has no impact on
                the care you receive.
              </p>
            </li>
            <li>
              <strong>Myth:</strong> I'm too old or unhealthy to be an organ
              donor.
              <p>
                <strong>Fact:</strong> People of all ages and medical backgrounds
                can potentially be organ donors. Even if you have pre-existing
                health conditions, you may still be able to donate certain organs.
              </p>
            </li>
          </ul>
        </div>
     </div>

        <div className="how-to-donate-container">
          <h2>How to Become an Organ Donor</h2>
          <p>Becoming an organ donor is easy and can be done in several ways:</p>
          <ul>
            <li>
              1. Register as an organ donor with your state's organ donor
              registry.
            </li>
            <li>
              2. Indicate your wish to be an organ donor on your driver's license
              or state ID card.
            </li>
            <li>
              3. Discuss your decision with your family and loved ones so they are
              aware of your wishes.
            </li>
          </ul>
        </div>

        <div className="more-myths-facts-container">
          <h2>Organ Donation Myths Debunked</h2>
          <ul>
            <li>
              <strong>Myth:</strong> Organ donation is against my religion.
            </li>
            <li>
              <strong>Fact:</strong> Most major religions support organ donation
              as an act of charity and compassion.
            </li>
            <li>
              <strong>Myth:</strong> Doctors won't work as hard to save my life if
              they know I'm an organ donor.
            </li>
            <li>
              <strong>Fact:</strong> Medical professionals are dedicated to saving
              lives, and your status as an organ donor has no impact on the care
              you receive.
            </li>
            <li>
              <strong>Myth:</strong> I'm too old or unhealthy to be an organ
              donor.
            </li>
            <li>
              <strong>Fact:</strong> People of all ages and medical backgrounds
              can potentially be organ donors. Even if you have pre-existing
              health conditions, you may still be able to donate certain organs.
            </li>
          </ul>
        </div>

        <div className="organ-tissue-description-container">
          <h2>What is Organ and Tissue Donation?</h2>
          <div className="description-container">
            <div>
              <h3>Organ Donation</h3>
              <p>
                Organ Donation is the gift of an organ to a person with end-stage
                organ disease and who needs a transplant. The donated organ may be
                from a deceased donor or a living donor.
              </p>
            </div>
          </div>

          <h2>What is Transplantation?</h2>
          <div className="description-container">
            <div>
              <h3>Transplantation</h3>
              <p>
                Surgical operation in which a failing or damaged organ in the
                human body is removed and replaced with a functioning one.
              </p>
            </div>
          </div>

          <h2>Who Can Pledge to Donate Organs?</h2>
          <div className="description-container">
            <div>
              <h3>Pledging to Donate Organs</h3>
              <p>
                Any person not less than 18 years of age, who voluntarily
                authorizes the removal of any of his organ and/or tissue.
              </p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default AwarenessPage;
