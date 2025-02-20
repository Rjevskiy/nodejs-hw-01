import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  try {
    
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data || '[]');

    
    const newContacts = Array.from({ length: number }, () => createFakeContact());

    
    const updatedContacts = [...contacts, ...newContacts];

    
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(`Добавлено ${number} нових контактів!`);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

generateContacts(5); 
