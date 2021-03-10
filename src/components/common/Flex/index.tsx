import React, { FC } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { Box } from '~components/common/Box';
import { SystemProps } from '~types/system';

const variants = {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const sizes = {
  fullWidth: {
    flex: 1,
  },
};

type CustomProps = SystemProps & {
  variant?: ResponsiveValue<keyof typeof variants>;
  sizes?: ResponsiveValue<keyof typeof sizes>;
};

const StyledFlex = styled(Box)<CustomProps>`
  ${variant({ prop: 'sizes', variants: sizes })}
  ${variant({ variants })}
`;

export const Flex: FC<CustomProps> = (props) => (
  <StyledFlex display="flex" {...props} />
);