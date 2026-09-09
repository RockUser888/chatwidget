const fs = require('fs');
const path = require('path');

// Buscar el archivo index.html en la carpeta actual
const filePath = path.join(process.cwd(), 'index.html');

if (!fs.existsSync(filePath)) {
    console.error('❌ Error: No se encontró index.html en la raíz.');
    process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf-8');

// Crear carpeta dist y escribir
const distPath = path.join(process.cwd(), 'dist');

if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(
    path.join(distPath, 'index.html'),
    content
);

console.log('✅ Build completed successfully!');
