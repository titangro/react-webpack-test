import React from 'react';
import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';
import { TreeCount } from '../tree-count/TreeCount';
import { TreeChildrenLinks } from '../tree-children-links/TreeChildrenLinks';

const getCurrentData = (data, secondPath, thirdPath) => {
  const currentData = data;

  if (!secondPath && !thirdPath) {
    return currentData;
  }

  // if (secondPath) {
  //   currentData = currentData.find((item) => item.name === secondPath).children;
  // }

  // if (thirdPath) {
  //   currentData = currentData.find((item) => item.name === thirdPath).children;
  // }

  return currentData;
};

export const TreeMapList = ({ data }) => {
  const location = useLocation();
  const [rootPath, secondPath, thirdPath] = location.pathname.slice(1).split('/');

  const currentData = getCurrentData(data, secondPath, thirdPath);

  return (
    <ul>
      {(currentData || []).map(
        ({ name, children, count }) => (
          <li key={name}>
            <h2>
              Name route &quot;
              <Link to={`/${rootPath}/${name}`}>{name}</Link>
              &quot;
            </h2>
            {Boolean(children.length) && (
              <TreeChildrenLinks
                treeLinks={children}
                pathname={rootPath}
                currentPath={name}
              />
            )}
            {count !== undefined && <TreeCount count={count} />}
          </li>
        ),
      )}
    </ul>
  );
};

TreeMapList.defaultProps = {
  data: [],
};

TreeMapList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
    count: PropTypes.number,
  })),
};
