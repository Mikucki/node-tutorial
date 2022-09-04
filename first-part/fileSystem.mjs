import { readFile } from "fs/promises";

const templet = await readFile(new URL("index.html", import.meta.url), "utf-8");

console.log(templet);
