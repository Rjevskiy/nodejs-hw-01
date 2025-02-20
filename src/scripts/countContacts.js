import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const countContacts = async () => {
  try {
    
    const data = await fs.readFile(PATH_DB, 'utf8');
    
    
    const contacts = JSON.parse(data || '[]');
    const count = contacts.length;

    
    return count;
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error.message);
  }
};


countContacts()
  .then(count => {
    console.log(`Кількість контактів: ${count}`);
  })
  .catch(error => {
    console.error('Не вдалося підрахувати контакти:', error);
  });
