import React from 'react';
import ReactDOM from 'react-dom';

import { useTheme } from '../../hooks/theme';

import Button from '../Button';

import { Container, ModalContainer } from './style';

type Props = {
  children: React.ReactChild;
  closeModal: () => void;
};

const Modal = React.memo(({ children, closeModal }: Props) => {
  const domEl = document.getElementById('modal-root');
  const { theme } = useTheme();

  if (!domEl) return null;

  return ReactDOM.createPortal(
    <Container>
      <ModalContainer>
        <Button iconOnly onClick={closeModal}>
          <theme.icons.close size={24} />
        </Button>
        <div>{children}</div>
      </ModalContainer>
    </Container>,
    domEl,
  );
});

export default Modal;
