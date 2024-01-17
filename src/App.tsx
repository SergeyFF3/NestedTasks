import { useEffect, useState } from 'react';

import './App.css';
import { getTreeRows } from './services';

export const App = () => {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    getTreeRows().then((res) => setTree(res));
  }, []);

  return <>new project</>;
};
