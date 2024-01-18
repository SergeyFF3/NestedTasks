import { useEffect, useState } from 'react';
import { RowsList } from '../../components/RowsList';
import { getTreeRows } from '../../services';

export interface IRowProps {
  child?: IRowProps[] | null;
  id?: number;
  rowName: string;
  salary: number;
  overheads: number;
  parentId?: string | null;
  supportCosts?: number;
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary?: number;
  mainCosts?: number;
  materials?: number;
  mimExploitation?: number;
}

export const MainPage = () => {
  const [rowTree, setRowTree] = useState<IRowProps[]>([]);

  useEffect(() => {
    getTreeRows().then((res) => setRowTree(res));
  }, []);

  return <RowsList rowsList={rowTree} />;
};
