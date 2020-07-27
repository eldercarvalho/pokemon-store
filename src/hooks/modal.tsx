import React, { useState } from 'react';

import Modal from '../components/Modal';

type ModalContent = { children: React.ReactChild };

interface UseModal {
  show(): void;
  hide(): void;
  RenderModal(children: ModalContent): JSX.Element;
}

export const useModal = (): UseModal => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal = ({ children }: ModalContent) => (
    <>{isVisible && <Modal closeModal={hide}>{children}</Modal>}</>
  );

  return {
    show,
    hide,
    RenderModal,
  };
};
