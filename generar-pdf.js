const fs = require('fs');
const path = require('path');

// Configura aquí las carpetas y archivos que deseas ignorar
const ignorar = ['node_modules', '.git', 'dist', 'build', '.vscode', 'package-lock.json', 'generar-pdf.js'];
const extensionesValidas = ['.js', '.ts', '.jsx', '.tsx', '.html', '.css', '.json', '.md', '.py', '.cs', '.java'];

let contenidoTotal = '';

function recorrerCarpeta(directorio) {
    const archivos = fs.readdirSync(directorio);
    archivos.forEach(archivo => {
        const rutaCompleta = path.join(directorio, archivo);
        const rootRelative = path.relative(process.cwd(), rutaCompleta);
        
        if (ignorar.some(i => rootRelative.split(path.sep).includes(i))) return;

        const stats = fs.statSync(rutaCompleta);
        if (stats.isDirectory()) {
            recorrerCarpeta(rutaCompleta);
        } else if (stats.isFile() && extensionesValidas.includes(path.extname(archivo))) {
            contenidoTotal += `\n\n=== ARCHIVO: ${rootRelative} ===\n\n`;
            contenidoTotal += fs.readFileSync(rutaCompleta, 'utf-8');
        }
    });
}

console.log('Analizando proyecto...');
recorrerCarpeta(process.cwd());

fs.writeFileSync('proyecto.txt', contenidoTotal, 'utf-8');
console.log('Código unificado en proyecto.txt. Generando PDF...');

// Usar PowerShell de fondo para imprimir nativamente a PDF de forma limpia
const { execSync } = require('child_process');
try {
    execSync('Start-Process notepad.exe -ArgumentList "/p proyecto.txt" -Wait');
    fs.unlinkSync('proyecto.txt');
    console.log('¡Proceso completado! Guarda el archivo desde la ventana emergente.');
} catch (error) {
    console.log('Error al generar el PDF de forma automática. El código se guardó en proyecto.txt');
}
