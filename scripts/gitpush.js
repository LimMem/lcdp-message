#!/usr/bin/env node
const { writeFileSync, readFileSync } = require("fs");
const { resolve } = require("path");
const { exec } = require("child_process");

const processExec = async (command) => {
  return new Promise((resolve, reject) => {
    exec(command, function (error, stdout, stderr) {
      console.log("tag", error);
      if (error) {
        reject(error);
      } else {
        resolve(stdout, stderr);
      }
    });
  });
};

const getPackageJSON = () => {
  const package = readFileSync(resolve(process.cwd(), "package.json"));
  return JSON.parse(package);
};

const package = getPackageJSON();

const dynamicUmdFilePath = () => {
  package.unpkg = `dist/${package.version}/lcdpmessage.min.js`;
  writeFileSync(
    resolve(process.cwd(), "package.json"),
    JSON.stringify(package, null, 2)
  );
};

const main = async () => {
  await processExec("git add .");
  await processExec(`git commit -m "提交umd(${package.version})版本"`);
  await processExec("git push origin master");
  dynamicUmdFilePath();
};

main();
