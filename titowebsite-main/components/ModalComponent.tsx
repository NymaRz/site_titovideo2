import React, { useState } from 'react';
import Modal from 'react-modal';


const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Modal Content</h2>
        <p>This is the content of the modal window.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ModalComponent;
