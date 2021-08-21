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
        process.exit(0);
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

// 版本自增
const incrementVersion = () => {
  const vers = package.version.split(".");
  return vers
    .map((v, index) => {
      if (index === vers.length - 1) {
        return `${parseInt(v) + 1}`;
      }
      return v;
    })
    .join(".");
};

const dynamicPackageFile = () => {
  package.unpkg = `dist/${package.version}/lcdpmessage.min.js`;
  package.version = incrementVersion();
  writeFileSync(
    resolve(process.cwd(), "package.json"),
    JSON.stringify(package, null, 2)
  );
};

const commitAllCodeToGit = async () => {
  console.log("正在提交代码...");
  await processExec("git add .");
  await processExec(`git commit -m "${package.version}版本发包"`);
  await processExec("git push origin master");
  await processExec(
    `git tag -a v${package.version} -m "${package.version}版本发包"`
  );
  await processExec("$ git push origin --tags");
  console.log("代码已提交");
};

const build = async () => {
  await processExec("npm run build");
};

const publish = async () => {
  await processExec("npm publish");
};

const main = async () => {
  dynamicPackageFile();
  try {
    await build();
    await publish();
    await commitAllCodeToGit();
  } catch (error) {
    console.error("error:", error);
  }
};

main();
