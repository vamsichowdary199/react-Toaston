import React from 'react';
import './style.css';
import Toast from './Toast';
export default function App() {
  const [isOpen, setisOpen] = React.useState();

  const openSideModal = () => {
    setisOpen(true);
  };
  const closeModal = () => {
    setisOpen(false);
  };
  const onToastClose = () => {
    setisOpen(false);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <button onClick={openSideModal}>Open Alert</button>
      {isOpen ? (
        <Toast onClose={onToastClose} toastType="danger">
          Lorem Ipsum er ganske enkelt fyldtekst fra print- og
          typografiindustrien. Lorem Ipsum har været standard fyldtekst siden
          1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte at
          trykke en bog til sammenligning af forskellige
        </Toast>
      ) : null}
    </div>
  );
}
