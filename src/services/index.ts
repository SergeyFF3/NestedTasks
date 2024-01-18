import { ISetDataRowProps } from '../components/SetDataRow/SetDataRow';

const baseURL = 'http://185.244.172.108:8081/v1/outlay-rows/entity/124983';

export const getTreeRows = async () => {
  try {
    const response = await fetch(`${baseURL}/row/list`);

    if (!response.ok) {
      console.log('Ошибка получения данных');
      return null;
    }

    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createRow = async (data: ISetDataRowProps) => {
  try {
    const response = await fetch(`${baseURL}/row/create`, {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({
        ...data,
      }),
    });

    if (!response.ok) {
      console.log('Ошибка получения данных');
      return null;
    }

    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateRow = async (rID: string, data: ISetDataRowProps) => {
  try {
    const response = await fetch(`${baseURL}/row/${rID}/update`, {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({
        ...data,
      }),
    });

    if (!response.ok) {
      console.log('Ошибка получения данных');
      return null;
    }

    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteRow = async (rID: string) => {
  try {
    const response = await fetch(`${baseURL}/row/${rID}/delete`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.log('Ошибка получения данных');
      return null;
    }

    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
