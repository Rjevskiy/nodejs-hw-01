import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const getAllContacts = async () => {
  try {
    
    const data = await fs.readFile(PATH_DB, 'utf8');
    
    
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Помилка при зчитуванні контактів:', error.message);
  }
};


getAllContacts()
  .then(contacts => {
    console.log('Контакти:', contacts);
  })
  .catch(error => {
    console.error('Не вдалося отримати контакти:', error);
  });
