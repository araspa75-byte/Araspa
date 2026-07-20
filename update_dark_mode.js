const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Specific case for Navbar which uses bg-cream/90 and bg-cream/80
  content = content.replace(/bg-cream\/90/g, 'bg-cream/90 dark:bg-charcoal-dark/90');
  content = content.replace(/bg-cream\/80/g, 'bg-cream/80 dark:bg-charcoal-dark/80');

  // Add dark variants for backgrounds
  content = content.replace(/bg-cream(?![a-zA-Z0-9_-])/g, 'bg-cream dark:bg-charcoal-dark');
  content = content.replace(/bg-beige(?![a-zA-Z0-9_-])/g, 'bg-beige dark:bg-charcoal');
  
  // Add dark variants for text
  content = content.replace(/text-charcoal(?![a-zA-Z0-9_-])/g, 'text-charcoal dark:text-cream');
  content = content.replace(/text-charcoal-light(?![a-zA-Z0-9_-])/g, 'text-charcoal-light dark:text-beige');

  // Add dark variants for borders
  content = content.replace(/border-charcoal\/10/g, 'border-charcoal/10 dark:border-cream/10');
  content = content.replace(/border-beige(?![a-zA-Z0-9_-])/g, 'border-beige dark:border-charcoal');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated: ' + file);
  }
});
