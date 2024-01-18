import { FC } from 'react';
import { IRowProps } from '../../pages/MainPage/MainPage';
import { SetDataRow } from '../SetDataRow/SetDataRow';

interface IRowsListProps {
  rowsList: IRowProps[];
  parent?: number;
}

export const RowsList: FC<IRowsListProps> = ({ rowsList }) => (
  <>
    {rowsList.map((rowItem) => (
      <SetDataRow key={rowItem.id} rowItem={rowItem} />
    ))}
  </>
);
