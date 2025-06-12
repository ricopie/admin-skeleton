import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadModuleConfig() {
    const configPath = path.join(__dirname, 'module.json');

    try {
        const data = await fs.readFile(configPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error loading module.json at ${configPath}:`, error);
        return {};
    }
}

const moduleConfig = await loadModuleConfig();

// console.log(moduleConfig.name);

export const paths = [
    'Modules/' + moduleConfig.name + '/resources/assets/js/app.js',
];
