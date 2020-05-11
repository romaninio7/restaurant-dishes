import React, { useState } from 'react';
import Modal from 'components/dialog/Modal';
import { IDishesList } from 'interfaces';
import { connect } from 'react-redux';
import { addNewDish } from 'actions';

const AddDishesPanel = ({ addNewDish }): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onFormSubmit = (formValues: IDishesList): void => {
    // Form a valid object;
    //Call action creator;
    console.log(formValues, 'newDish');
    addNewDish(formValues);
    onDismiss();
  };
  const onDismiss = (): void => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflowY = 'visible';
      setOpenModal(false);
    }
  };
  return (
    <div className='ui'>
      <h2 className='ui left floated orange header'>Dishes</h2>
      <button
        className='ui button orange ui right floated right labeled icon'
        onClick={() => setOpenModal(true)}
      >
        <i className='right plus icon'></i>Add new dish
      </button>
      <div className='ui clearing divider'></div>
      <Modal
        openModal={openModal}
        onDismiss={onDismiss}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
};

export default connect(null, { addNewDish })(AddDishesPanel);
