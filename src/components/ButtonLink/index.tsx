import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ComponentType<IconBaseProps>;
  outlined?: boolean;
}

const ButtonLink: React.FC<IButtonLinkProps> = ({
  children,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  );
};

export default ButtonLink;
