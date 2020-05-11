import * as React from 'react';
import { ModalContentProps } from 'interfaces';
import AddDishForm from 'components/dialog/dishForm/AddDishForm';

const ModalContent: React.FunctionComponent<ModalContentProps> = ({
  onDismiss,
  onFormSubmit,
}): JSX.Element => {
  const body = document.querySelector('body');
  if (body) {
    body.style.overflow = 'hidden';
  }
  return (
    <div
      onClick={onDismiss}
      className='ui dimmer modals visible active dismiss-click-out'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard long test modal transition visible active tiny scrolling hidden'
      >
        <i className='close icon' onClick={onDismiss}></i>
        <div className='ui header orange centered'>
          <p>Add a new dish</p>
        </div>
        <div className='content'>
          <AddDishForm onFormSubmit={onFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
