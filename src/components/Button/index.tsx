import React, { ButtonHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ComponentType<IconBaseProps>;
  outlined?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, icon: Icon, ...rest }) => {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  );
};

export default Button;
