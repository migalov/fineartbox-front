
import sanitizeHtml from 'sanitize-html';
const cleanHtml = (rawHtml) => sanitizeHtml(rawHtml, {
       allowedTags: ['p', 'h1', 'h2' ,'br', 'strong', 'ol', 'ul', 'li', 'br', 'table', 'tbody', 'tr', 'td'], // Разрешенные теги
       allowedAttributes: {
        'a': ['href']
       } // Разрешенные атрибуты
   });

export default cleanHtml;