import { useEffect, useState } from 'react';
import { RowsList } from '../../components/RowsList';
import { getTreeRows } from '../../services';

export interface IRowProps {
  child?: IRowProps[] | null;
  equipmentCosts?: number;
  id?: number;
  overheads?: number;
  rowName?: string;
  salary?: number;
  supportCosts?: number;
}

export const MainPage = () => {
  const [rowTree, setRowTree] = useState<IRowProps[]>([]);

  useEffect(() => {
    getTreeRows().then((res) => setRowTree(res));
  }, []);

  return <RowsList rowsList={rowTree} />;
};
