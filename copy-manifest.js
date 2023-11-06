// Import the required function from the 'url' module
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// Use `fileURLToPath` to convert the URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Now you can use __dirname to resolve paths
const source = path.resolve(__dirname, './public/manifest.json');
const destination = path.resolve(__dirname, './dist/manifest.json');

// Your copy logic here...
fs.copyFileSync(source, destination);
