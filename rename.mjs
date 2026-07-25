import fs from 'fs';
import path from 'path';

const oldPath = path.join(process.cwd(), 'public/images/services/moroccan-bath-massage-alt.png');
const newPath = path.join(process.cwd(), 'public/images/services/moroccan-bath-massage-alt.jpeg');

if (fs.existsSync(oldPath)) {
  fs.renameSync(oldPath, newPath);
  console.log('Renamed successfully');
} else {
  console.log('File not found, might already be renamed.');
}
