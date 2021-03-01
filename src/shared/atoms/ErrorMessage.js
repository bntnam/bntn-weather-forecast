import React from 'react';

import PropTypes from 'prop-types';

export const ErrorMessage = ({ children }) => <p>{children}</p>;

ErrorMessage.propTypes = {
  children: PropTypes.string,
};
