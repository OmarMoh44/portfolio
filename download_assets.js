import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'social-network.jpg',
    url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop',
    description: 'Modern messaging interface representing the Whisper/Telegram clone'
  },
  {
    name: 'missing-things.jpg',
    url: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1000&auto=format&fit=crop',
    description: 'Lost and found concept image'
  },
  {
    name: 'search-engine.jpg',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    description: 'Search engine concept with magnifying glass'
  },
  {
    name: 'os-scheduler.jpg',
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    description: 'CPU and process scheduling visualization'
  },
  {
    name: 'resume-builder.jpg',
    url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop',
    description: 'Professional resume and document concept'
  }
];

async function downloadImage(url, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download ${filename}: ${response.statusText}`);
    }
    const buffer = await response.buffer();
    fs.writeFileSync(path.join(__dirname, 'public', 'images', 'projects', filename), buffer);
    console.log(`Downloaded ${filename}`);
  } catch (error) {
    console.error(`Error downloading ${filename}:`, error.message);
  }
}

async function downloadAllImages() {
  for (const image of images) {
    await downloadImage(image.url, image.name);
  }
}

downloadAllImages(); 