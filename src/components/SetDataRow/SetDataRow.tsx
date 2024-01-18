import { useState } from 'react';
import { IRowProps } from 'src/pages/MainPage/MainPage';
import { createRow, deleteRow, updateRow } from '../../services';
import { RowsList } from '../RowsList';

export interface ISetDataRowProps {
  rowName: string;
  salary?: number | null;
  overheads?: number | null;
  parentId?: string | null;
  supportCosts: number | null;
  equipmentCosts?: number;
  estimatedProfit: number | null;
  machineOperatorSalary?: number;
  mainCosts?: number;
  materials?: number;
  mimExploitation?: number;
}

const initialData: ISetDataRowProps = {
  overheads: 0,
  parentId: null,
  rowName: 'second 2',
  salary: 0,
  supportCosts: 0,
  equipmentCosts: 0,
  estimatedProfit: 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
};

export const SetDataRow = ({ rowItem }: { rowItem: IRowProps }) => {
  const [rowData, setRowData] = useState<IRowProps | ISetDataRowProps>(
    rowItem || initialData,
  );

  const removeRow = () => {
    deleteRow(String(rowItem.id));
  };

  const addRowHandler = () => {
    initialData.parentId = String(rowItem.id);
    createRow(initialData);
  };

  const updateRowHandler = () => {
    delete initialData.parentId;
    updateRow(String(rowItem.id), initialData);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '35px 20px',
          margin: '15px 0',
          background: 'gray',
        }}
      >
        <div>
          <button onClick={addRowHandler}>ed</button>
          <button style={{ margin: '0 10px' }} onClick={removeRow}>
            del
          </button>
          <button onClick={updateRowHandler}>upd</button>
        </div>
        <div>{rowData.rowName}</div>
        <div>{rowData.salary}</div>
        <div>{rowData.equipmentCosts}</div>
        <div>{rowData.supportCosts}</div>
        <div>{rowData.overheads}</div>
      </div>
      {rowItem.child && <RowsList rowsList={rowItem.child} />}
    </>
  );
};
