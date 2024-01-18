import React, { ChangeEvent, useState } from 'react';
import { IRowProps } from 'src/pages/MainPage/MainPage';
import { createRow, deleteRow, updateRow } from '../../services';
import { RowsList } from '../RowsList';

export interface ISetDataRowProps {
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

const initialData: ISetDataRowProps = {
  overheads: 0,
  parentId: null,
  rowName: '',
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
  const [isEdit, setIsEdit] = useState(false);
  const [rowData, setRowData] = useState<IRowProps | ISetDataRowProps>(
    rowItem || initialData,
  );

  const onDoubleClickHandler = () => {
    setIsEdit((prev) => !prev);
  };

  const changeRowName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowData({ ...rowData, rowName: e.target.value });
  };

  const changeSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowData({ ...rowData, salary: +e.target.value });
  };

  const changeEquipmentCosts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowData({ ...rowData, equipmentCosts: +e.target.value });
  };

  const changeOverheads = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowData({ ...rowData, overheads: +e.target.value });
  };

  const changeEstimatedProfit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowData({ ...rowData, estimatedProfit: +e.target.value });
  };

  const addRowHandler = () => {
    initialData.parentId = String(rowItem.id);
    createRow(initialData);
  };

  const updateRowHandler = () => {
    updateRow(String(rowItem.id), rowData);
  };

  const removeRow = () => {
    deleteRow(String(rowItem.id));
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateRowHandler();
    }
  };

  const getRowField = (
    value: string | number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  ) => {
    if (isEdit) {
      return (
        <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      );
    }
    return <p>{value}</p>;
  };

  return (
    <>
      <tr
        onDoubleClick={onDoubleClickHandler}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '35px 20px',
          margin: '15px 0',
          background: 'gray',
        }}
      >
        <td>
          <button onClick={addRowHandler}>ed</button>
          <button style={{ margin: '0 10px' }} onClick={removeRow}>
            del
          </button>
        </td>
        <td>
          {getRowField(
            rowData.rowName,
            (e) => changeRowName(e),
            (e) => onKeyPress(e),
          )}
        </td>
        <td>
          {getRowField(
            rowData.salary,
            (e) => changeSalary(e),
            (e) => onKeyPress(e),
          )}
        </td>
        <td>
          {getRowField(
            rowData.equipmentCosts,
            (e) => changeEquipmentCosts(e),
            (e) => onKeyPress(e),
          )}
        </td>
        <td>
          {getRowField(
            rowData.overheads,
            (e) => changeOverheads(e),
            (e) => onKeyPress(e),
          )}
        </td>
        <td>
          {getRowField(
            rowData.estimatedProfit,
            (e) => changeEstimatedProfit(e),
            (e) => onKeyPress(e),
          )}
        </td>
      </tr>
      {rowItem.child && <RowsList rowsList={rowItem.child} />}
    </>
  );
};
