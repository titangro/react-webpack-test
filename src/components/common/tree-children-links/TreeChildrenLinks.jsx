import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export const TreeChildrenLinks = ({ treeLinks, currentPath, pathname }) => (
  <div>
    <ul>
      {treeLinks.map(
        ({ name }) => (
          <li key={name}>
            <Link to={`/${pathname}/${currentPath}/${name}`}>{name}</Link>
          </li>
        ),
      )}
    </ul>
  </div>
);

TreeChildrenLinks.propTypes = {
  currentPath: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  treeLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
  })).isRequired,
};
