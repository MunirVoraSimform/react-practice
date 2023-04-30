import { useEffect, useRef } from "react";
import ArrowWhite from "../../assets/images/arrowRightWhite.svg";
const Modal = (props) => {

  const modalRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        props.setOpenModal(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [modalRef, props.setOpenModal]);

  return (
    <div className="modal-wrapper">
      <div className="layer">
        <div className="modal" ref={modalRef}>
          <div className="close-icon" onClick={() => {props.setOpenModal(false)}}>
            <div className="line line1"></div>
            <div className="line line2"></div>
          </div>
          <h2 className="text-center">Welcome to Our Platform</h2>
          <p className="text-center">
            Thank you for choosing our platform to help you achieve your goals.
            Our platform is designed to provide you with everything you need to
            succeed, whether you're a beginner or an experienced user.
          </p>
          <div className="btns">
            <a
              href="#!"
              onClick={ ()=> {props.setOpenModal(false)} }
              className="btn btn-secondary-color close-btn"
            >
              Close
            </a>
            <a href="#!" className="btn btn-primary">
              <span>Sign Up</span>
              <img src={ArrowWhite} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
