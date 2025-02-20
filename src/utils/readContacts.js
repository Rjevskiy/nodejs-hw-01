
import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    
    const data = await fs.readFile(PATH_DB, 'utf8');
    
    
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Ошибка при зчитуванні контактов:', error.message);
    throw new Error('Не вдалося зчитати контакти');
  }
};
