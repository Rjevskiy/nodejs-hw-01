
import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (data) => {
  try {
    
    if (!Array.isArray(data)) {
      throw new Error('Невірний формат даних для запису');
    }

    
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));

    console.log('Дані успішно записані!');
  } catch (error) {
    console.error('Ошибка при запису контактов:', error.message);
    throw new Error('Не вдалося записати контакти');
  }
};
