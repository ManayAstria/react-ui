import React, { FC } from 'react';

import { Label } from '@rebass/forms/styled-components';
import { pick } from '@styled-system/props';
import { Box, BoxProps } from 'rebass/styled-components';
// import { useId } from '@storyofams/react-helpers';

import { status, StatusMessage } from '~components';

export interface InputWrapperProps extends BoxProps {
  statusMessage?: string;
  label?: string;
  status?: status;
  error?: string;
}

export const InputWrapper: FC<InputWrapperProps & { id?: string }> = ({
  label,
  status,
  statusMessage,
  error,
  id: givenId,
  children,
  ...props
}) => {
  const autoId = 'random-id'; /** @todo replace with useId() */
  const id = givenId || `input-${autoId}`;

  return (
    <Box {...pick(props)}>
      {label && (
        <Label mb={1} htmlFor={id}>
          {label}
        </Label>
      )}

      {children}

      {(!!statusMessage || !!error) && (
        <StatusMessage mt="1/2" status={error ? 'error' : status}>
          {error || statusMessage}
        </StatusMessage>
      )}
    </Box>
  );
};