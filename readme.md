### NodeJS
Node Js ia a javascript runtime

### Commands
npm init //this command actually created a package.json file which holds all the information about your installed packages
```
npm = stands for node package manager
packages = are small uitilities or programs or functions that boost the developent
```

npm install --save {package1} {package2} {package3}

npm install --save @babel/core @babel/cli @babel/node @babel/preset-env babel-watch rimraf @babel/plugin-proposal-class-properties babel-polyfill

### Babel(Transpiler)
Babel is a tool to convert ES6 --> ES5

We need some commands to run a file
node filename.js

You need to add a babel config file in the root directory
.babelrc

content of .bablerc will be
```
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```