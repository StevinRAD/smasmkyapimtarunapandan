/**
 * Script untuk mengompres gambar di semua folder public/ (rekursif)
 * Run: node compress-images.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const INPUT_DIR = './public';
const QUALITY = 75; // Kualitas 75% (recommended)

// Folders to skip
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

async function compressImages() {
  console.log('🔍 Mencari gambar di semua folder...');

  // Cek apakah sharp terinstall
  let sharp;
  try {
    sharp = require('sharp');
    console.log('✅ Menggunakan sharp untuk kompresi\n');
  } catch {
    console.log('❌ sharp tidak terinstall. Install dengan:');
    console.log('npm install sharp --save-dev\n');
    return;
  }

  const allFiles = await getFilesRecursively(INPUT_DIR);

  if (allFiles.length === 0) {
    console.log('⚠️  Tidak ada gambar ditemukan!');
    return;
  }

  console.log(`📁 Ditemukan ${allFiles.length} gambar di semua folder\n`);

  let totalOriginal = 0;
  let totalCompressed = 0;
  let successCount = 0;
  let errorCount = 0;

  for (const inputPath of allFiles) {
    const parsed = path.parse(inputPath);
    const outputPath = path.join(parsed.dir, `${parsed.name}_compressed${parsed.ext}`);

    const stats = await stat(inputPath);
    const originalSize = stats.size;
    totalOriginal += originalSize;

    try {
      // Format ke JPEG dengan quality tertentu (termasuk PNG)
      await sharp(inputPath)
        .jpeg({ quality: QUALITY })
        .toFile(outputPath);

      const compressedSize = (await stat(outputPath)).size;
      totalCompressed += compressedSize;

      const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);
      const relativePath = path.relative(INPUT_DIR, inputPath);

      console.log(`✓ ${relativePath}`);
      console.log(`  ${(originalSize / 1024).toFixed(0)}KB → ${(compressedSize / 1024).toFixed(0)}KB (-${savings}%)\n`);

      // Replace original
      fs.unlinkSync(inputPath);
      fs.renameSync(outputPath, inputPath);
      successCount++;
    } catch (err) {
      console.log(`✗ Error: ${path.relative(INPUT_DIR, inputPath)} - ${err.message}\n`);
      errorCount++;

      // Cleanup failed file
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }
    }
  }

  console.log('━'.repeat(50));
  console.log('📊 Summary:');
  console.log(`✓ Success: ${successCount} gambar`);
  if (errorCount > 0) {
    console.log(`✗ Failed: ${errorCount} gambar`);
  }
  console.log(`Original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Compressed: ${(totalCompressed / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Saved: ${((totalOriginal - totalCompressed) / 1024 / 1024).toFixed(2)} MB (${((1 - totalCompressed / totalOriginal) * 100).toFixed(1)}%)`);
  console.log('━'.repeat(50));
}

compressImages().catch(console.error);
