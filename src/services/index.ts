const baseURL = 'http://185.244.172.108:8081/v1/outlay-rows/entity/124754';

export const getTreeRows = async () => {
  try {
    const response = await fetch(`${baseURL}/row/list`);

    if (!response.ok) {
      return 'Ошибка получения данных';
    }

    const result = response.json();
    return result;
  } catch (e) {
    console.log('error', e);
  }
};
