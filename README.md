# Starter project for typescript - angularjs v1

Angular.js modules: angular, angular-route.

## dependencies

### d.ts

Install by using npm's package.json:

> cnpm install

Or: manually install dependencies:

> cnpm install --save @types/angular

>  cnpm install --save @types/angular-route

> cnpm install --save angular

> cnpm install --save angular-route

p.s.: 

1. To add an entry to your package.json's dependencies, `npm install <package_name> --save`
1. @types from npm is the latest solution for declare typings. tsd and typing are old styles.

## Compile it

As I have add 'include' section in tsconfig.json, just run `tsc` at the root directory of the project will be fine. 
Otherwise, `tsc -p .` will compile the 'project' dir.

## Run it

```
npm install -g http-server

http-server -o
```
