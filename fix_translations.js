// Add missing translations
const fs = require('fs');

let content = fs.readFileSync('translations-final.js', 'utf8');

// Add English translation
content = content.replace(
    "                'cities.classicalGardens': 'Classical Gardens',",
    "                'cities.classicalGardens': 'Classical Gardens',\n                'cities.historicWaterTown': 'Historic Water Town',"
);

// Add Chinese translation
content = content.replace(
    "                'cities.classicalGardens': 'Suzhou Classical Gardens',",
    "                'cities.classicalGardens': 'Suzhou Classical Gardens',\n                'cities.historicWaterTown': 'Historic Water Town',"
);

// Add Arabic translation
content = content.replace(
    "                'cities.classicalGardens': 'Suzhou Classical Gardens',",
    "                'cities.classicalGardens': 'Suzhou Classical Gardens',\n                'cities.historicWaterTown': 'Historic Water Town',"
);

fs.writeFileSync('translations-final.js', content);
console.log('Translations updated successfully');
