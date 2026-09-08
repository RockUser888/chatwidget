const fs = require('fs');
const path = require('path');

// Buscar el archivo index.html en la carpeta actual
const filePath = path.join(process.cwd(), 'index.html');

if (!fs.existsSync(filePath)) {
    console.error('❌ Error: No se encontró index.html en la raíz.');
    process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf-8');

// Reemplazar las variables
content = content.replace('TU_API_KEY_DE_GROQ', process.env.GROQ_API_KEY);
content = content.replace('TU_URL_DE_SUPABASE', process.env.SUPABASE_URL);
content = content.replace('TU_ANON_KEY_DE_SUPABASE', process.env.SUPABASE_KEY);

// Crear carpeta dist y escribir
const distPath = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
}
fs.writeFileSync(path.join(distPath, 'index.html'), content);

console.log('✅ Build completed successfully!');
