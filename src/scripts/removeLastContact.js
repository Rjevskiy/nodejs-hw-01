import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const removeLastContact = async () => {
  try {
    
    const data = await fs.readFile(PATH_DB, 'utf8');
    
    
    const contacts = JSON.parse(data || '[]');

    
    if (contacts.length > 0) {
      
      contacts.pop();

    
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

      console.log('Останній контакт був успішно видалений!');
    } else {
      console.log('У масиві немає контактів для видалення.');
    }
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error.message);
  }
};


removeLastContact();
