import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const removeAllContacts = async () => {
  try {
    
    const data = await fs.readFile(PATH_DB, 'utf8');
    
    
    const contacts = JSON.parse(data || '[]');

    
    const updatedContacts = [];

    
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log('Усі контакти були успішно видалені!');
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error.message);
  }
};


removeAllContacts();
