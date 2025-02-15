import fs from 'node:fs';

const dirFolder='./files/';
export const fileCreation = (name, content) => {
    fs.writeFile(dirFolder + name, JSON.stringify(content), (res,err) => {
      console.log(name);
      if (err) {
        console.error(err);
        res.status(500).send("Error creating file");
      } else {
        res.send(200,"File created successfully");
      }
    });
};


export default fileCreation;