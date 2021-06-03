import React from 'react';
import PropTypes from 'prop-types';

export const TreeCount = ({ count }) => <div><em>{count}</em></div>;

TreeCount.propTypes = {
  count: PropTypes.number.isRequired,
};
