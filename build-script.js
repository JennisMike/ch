const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

// Files to process
const filesToProcess = [
  'ai-chat.js',
  'city-map.html',
  'neon-admin.html'
];

// Environment variables to replace
const envVars = {
  '%%AI_API_KEY%%': process.env.AI_API_KEY || '',
  '%%BAIDU_MAPS_API_KEY%%': process.env.BAIDU_MAPS_API_KEY || '',
  '%%NEON_DB_CONNECTION_STRING%%': process.env.NEON_DB_CONNECTION_STRING || ''
};

// Process each file
filesToProcess.forEach(filename => {
  const filePath = path.join(__dirname, filename);
  
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: ${filename} not found, skipping...`);
    return;
  }
  
  console.log(`Processing ${filename}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace placeholders
  Object.entries(envVars).forEach(([placeholder, value]) => {
    content = content.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value || '');
  });
  
  // Write the processed content back
  fs.writeFileSync(filePath, content);
  console.log(`✓ ${filename} processed successfully`);
});

console.log('Build process completed!');

// For Vercel deployment, create a vercel.json build hook
if (process.env.VERCEL) {
  console.log('Running on Vercel - environment variables will be injected automatically');
}
