import express from "express"
import fs from 'fs';

export default (app : express.Application): void => {
  const loaderFolder = __dirname;

  fs.readdir(loaderFolder, (err, files) => {
    if (err) {
      console.error('Error reading loader directory:', err);
      return;
    }

    files.forEach(async file => {
      /**
       * Automatically load the files inside loaders directory
       * except for index.ts file
       */
      if(file !== 'index.js') {
        const loader = await import(`${__dirname}/${file}`)
        loader.default(app)

        console.log(`Successfully loaded ${file}`)
      }
    });

  });

}