/**
 * Script untuk cek ukuran gambar sebelum kompres
 * Run: node check-images.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const INPUT_DIR = './public';
const SKIP_FOLDERS = ['node_modules', '.git', '.next'];

async function getFilesRecursively(dir, fileList = []) {
  const files = await readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);

    if (stats.isDirectory()) {
      if (!SKIP_FOLDERS.includes(file)) {
        await getFilesRecursively(filePath, fileList);
      }
    } else if (/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(file)) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

async function checkImages() {
  console.log('🔍 Mencari gambar...\n');

  const allFiles = await getFilesRecursively(INPUT_DIR);

  if (allFiles.length === 0) {
    console.log('⚠️  Tidak ada gambar ditemukan!');
    return;
  }

  console.log(`📁 Ditemukan ${allFiles.length} gambar\n`);

  // Group by folder
  const byFolder = {};
  let totalSize = 0;

  for (const filePath of allFiles) {
    const stats = await stat(filePath);
    const size = stats.size;
    totalSize += size;

    const folder = path.dirname(path.relative(INPUT_DIR, filePath)) || '/';
    if (!byFolder[folder]) {
      byFolder[folder] = { count: 0, size: 0, files: [] };
    }
    byFolder[folder].count++;
    byFolder[folder].size += size;
    byFolder[folder].files.push({ path: path.basename(filePath), size });
  }

  // Sort by size
  const sortedFolders = Object.entries(byFolder).sort((a, b) => b[1].size - a[1].size);

  console.log('━'.repeat(60));
  console.log('📊 Ukuran per Folder:');
  console.log('━'.repeat(60));

  for (const [folder, data] of sortedFolders) {
    console.log(`\n📂 ${folder}/`);
    console.log(`   Total: ${data.count} file | ${(data.size / 1024 / 1024).toFixed(2)} MB`);

    // Show largest files in this folder
    const sortedFiles = data.files.sort((a, b) => b.size - a.size).slice(0, 5);
    for (const file of sortedFiles) {
      console.log(`   - ${file.path} (${(file.size / 1024).toFixed(0)} KB)`);
    }
  }

  console.log('\n' + '━'.repeat(60));
  console.log('💾 Total:', allFiles.length, 'gambar |', (totalSize / 1024 / 1024).toFixed(2), 'MB');
  console.log('📉 Estimated after compression:', ((totalSize * 0.3) / 1024 / 1024).toFixed(2), 'MB (save ~70%)');
  console.log('━'.repeat(60));
}

checkImages().catch(console.error);
