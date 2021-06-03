import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { getScructureFromTreeMap } from '../utils/helpers/getScructureFromTreeMap';
import { parseJSON } from '../utils/helpers/parseJSON';

import treeData from '../assets/response.json';

import { TreeMapList } from './common/tree-map-list/TreeMapList';

const parsedTreeData = parseJSON(treeData);

const fileData = require('../assets/response.json');

console.log('🚀 ~ file: App.jsx ~ line 20 ~ fileData', fileData);

const App = () => {
  const treeRoot = getScructureFromTreeMap(parsedTreeData);
  const rootName = treeRoot.root.name;

  return (
    <div>
      <Router>
        <h1>
          Root:
          {' '}
          <Link to={`/${rootName}`}><span>{rootName}</span></Link>
        </h1>
        <Switch>
          <Route path="/:root/:secondPath/:thirdPath">
            <TreeMapList data={treeRoot.root.children} />
          </Route>
          <Route path="/:root/:secondPath">
            <TreeMapList data={treeRoot.root.children} />
          </Route>
          <Route path="/:root">
            <TreeMapList data={treeRoot.root.children} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
