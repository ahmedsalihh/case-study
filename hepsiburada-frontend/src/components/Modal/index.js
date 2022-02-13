import { useEffect, useRef } from 'react';
import './index.css';

const Modal = ({ onClose, show, children, header, footer }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = e => {
      if (modalRef.current.contains(e.target)) onClose();
    };

    if (!show) {
      document.addEventListener('click', handleOutsideClick, false);
    } else {
      document.removeEventListener('click', handleOutsideClick, false);
    }
  }, [onClose, show]);

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName} ref={modalRef}>
      <section className='modal-main'>
        {header && <div className='modal-header'>{header}</div>}
        <div className='modal-content'>{children}</div>
        {footer && <div className='modal-footer'>{footer}</div>}
      </section>
    </div>
  );
};

export default Modal;
