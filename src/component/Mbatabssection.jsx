import React, { useState } from "react";
import ISMRFormModal from "./forms/ISMRFormModal";
import Howtoaplydownoadform from "./forms/HowToApplyDownloadForm";
import brochurePdf from "/ISMR Brochure.pdf";
import { Link, useLocation } from "react-router-dom";

const css = `
  .mba-tabs {
    background: #ffffff;
    padding: 28px 24px;
    border-bottom: 1px solid #e2e2e2;
  }

  .mba-tabs__list {
   max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 320px);
  justify-content: center;
  gap: 16px;
  }

  .mba-tabs__item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    padding: 12px 20px;
    font-family: "Times New Roman", Times, serif;
    font-size: 27px;
    font-weight: 700;
    color: #111111;
    text-decoration: none;
    text-align: center;
    background: #f6ac03c2;
    border: none;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
  }

  .mba-tabs__item:hover {
    color: #b3122d;
    border-bottom-color: #b3122d;
    background-color: #faf3f4;
  }

  .mba-tabs__item:focus-visible {
    outline: 3px solid #b3122d;
    outline-offset: 2px;
  }

  .mba-tabs__backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .mba-tabs__modal {
    background: #ffffff;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    padding: 24px;
    border-radius: 12px;
  }

  .mba-tabs__modal h4 {
    color: #0a2240;
    margin: 0 0 16px;
  }

  .mba-tabs__close {
    margin-top: 10px;
    background: transparent;
    border: none;
    color: #d95c5c;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    .mba-tabs__item {
      font-size: 20px;
    }
  }

  @media (max-width: 640px) {
    .mba-tabs__list {
      grid-template-columns: 1fr;
      gap: 0;
    }
    .mba-tabs__item {
      min-height: 52px;
      border-bottom: 1px solid #e2e2e2;
    }
  }
    .mba-tabs__item{
    border-radius:10px;
        color: #002a5c;
    }
        @media (max-width: 1100px) {
  .mba-tabs__list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 900px;
  }
  .mba-tabs__item {
    font-size: 18px;
  }
}

@media (max-width: 640px) {
  .mba-tabs__list {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 0;
  }
  .mba-tabs__item {
    min-height: 52px;
    border-bottom: 1px solid #e2e2e2;
  }
}
`;

export default function MbaTabsSection() {
  // one state per modal (they must have different names)
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  return (
    <>
      <section className="mba-tabs" aria-label="MBA program quick links">
        <style>{css}</style>

        <nav className="mba-tabs__list">
          <Link className="mba-tabs__item" to="/academics/mba-program">
            MBA Program Features
          </Link>

          <button
            type="button"
            className="mba-tabs__item"
            onClick={() => setShowBrochureModal(true)}
          >
            Download Brochure
          </button>

          <button
            type="button"
            className="mba-tabs__item"
            onClick={() => setShowEnquiryModal(true)}
          >
            Admission Enquiry 9158000595
          </button>
        </nav>
      </section>

      {/* Admission enquiry modal */}
      {showEnquiryModal && (
        <ISMRFormModal
          open={showEnquiryModal}
          onClose={() => setShowEnquiryModal(false)}
        />
      )}

      {/* Brochure download modal */}
      {showBrochureModal && (
        <div className="mba-tabs__backdrop">
          <div className="mba-tabs__modal">
            <h4>Fill the form to download brochure</h4>

            <Howtoaplydownoadform />


          </div>
        </div>
      )}
    </>
  );
}