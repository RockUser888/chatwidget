const fs = require('fs');
const path = require('path');

// Ruta del archivo original
const inputPath = path.join(__dirname, 'index.html');

// Leer el contenido
let content = fs.readFileSync(inputPath, 'utf-8');

// Reemplazar las variables de entorno por las claves secretas
content = content.replace('TU_API_KEY_DE_GROQ', process.env.GROQ_API_KEY);
content = content.replace('TU_URL_DE_SUPABASE', process.env.SUPABASE_URL);
content = content.replace('TU_ANON_KEY_DE_SUPABASE', process.env.SUPABASE_KEY);

// Crear carpeta de salida si no existe
fs.mkdirSync('dist', { recursive: true });

// Escribir el nuevo archivo HTML en la carpeta dist
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), content);

console.log('✅ Build completed successfully!');
