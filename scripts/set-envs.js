const {writeFileSync, mkdirSync} = require('fs')

require('dotenv').config();

const targetPath='./src/environments/envitonment.ts';


const envFileContent=`
export const environment={
  mapbox:"${process.env['MAPBOX_KEY']}"

};
`;

mkdirSync('./src/environments', {recursive:true});

writeFileSync(targetPath, envFileContent)

