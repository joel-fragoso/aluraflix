import React, { AnchorHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  outlined?: boolean;
}

const ButtonLink: React.FC<IButtonLinkProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default ButtonLink;
