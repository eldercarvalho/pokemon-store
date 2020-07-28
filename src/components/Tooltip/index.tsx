import React, { useRef, useState } from 'react';
import { useMedia } from 'react-media';

import { Container, TooltipContainer } from './style';

interface TooltipProps {
  title: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, title }) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isSmallScreen = useMedia({ query: '(max-width: 1023px)' });

  return (
    <Container
      ref={nodeRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>{children}</div>
      {isVisible && !isSmallScreen && <TooltipContainer>{title}</TooltipContainer>}
    </Container>
  );
};

export default Tooltip;
