/*
1. Use the inquirer npm package to get user input.
    -   https://www.npmjs.com/package/@inquirer/prompts
    */
// 1

import { input } from "@inquirer/prompts";
const url = await input({ message: "Enter your url" });
const img_url = `https://${url}`;
/*
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    -   https://www.npmjs.com/package/qr-image
*/
//2
import qr from "qr-image";
const qr_svg = qr.image(`${img_url}`, { type: "png" });
qr_svg.pipe(fs.createWriteStream(`${url}.png`));

const svg_string = qr.imageSync(`${url}`, { type: "png" });

/*
3. Create a txt file to save the user input using the native fs node module.
*/
import * as fs from "node:fs";
fs.writeFile("URL2.txt", `https://${url}`, (err) => {
	if (err) throw err;
	console.log("this file has been saved!");
});

// 3
