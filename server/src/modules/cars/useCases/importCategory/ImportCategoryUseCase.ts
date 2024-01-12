import { Parser } from "csv-parse";

import fs from "fs";

export class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = new Parser({
      delimiter: ',', 
      columns: true,  
    });

    stream.pipe(parseFile);

    parseFile.on("data", async (line: any) => {
        console.log(line)
      });
    }
}

