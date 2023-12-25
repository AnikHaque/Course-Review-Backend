# Setup project and Run on locally

## Full Process

1. **Step 1:** Create a new folder for the project and open it in VS Code. run on terminal `npm init -y` create package.json file.
2. **Step2:**

   install express ⇒ `npm install express`

   install mongoose ⇒ `npm install mongoose --save`

   install typescript ⇒ `npm install typescript --save-dev`

   install cors ⇒ `npm install cors`

   install dotenv ⇒ `npm install dotenv`

3. **Step3:** create a tsconfig file ⇒ `tsc --init`

   set rootDir as src and outDir as dist

4. **Step 4: C**onnect Mongoose to the server

   ```tsx
   import mongoose from 'mongoose';
   async function main() {
     try {
       await mongoose.connect(config.db_url as string);
       app.listen(config.port, () => {
         console.log(`Example first app listening on port ${config.port}`);
       });
     } catch (err) {
       console.log(err);
     }
   }
   main();
   ```

### `SetUP Eslint and Prettier`

5. **Step5:** add this in tsconfing.json file

```
"include": ["src"], // which files to compile
  "exclude": ["node_modules"], // which files to skip
```

6. **Step6:** install eslint ⇒ **`npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`**
7. **Step7: create a configuration file ⇒** **`npx eslint --init` and add this in** **`.eslintrc`**

   ```
   "rules": {
       "@typescript-eslint/no-unused-vars": "error",
     },
   ```

8. **Step8: create a `.eslintignore` file and add the folders or files you want to ignore**

```
node_modules
dist
```

9. **Step9:** add this in package.json

   ```
   / package.json
   {
     // ...
     "scripts": {
       "lint": "eslint --ignore-path .eslintignore --ext .js,.ts"
      },
     // ...
   }
   ```

10. **Step10:** fix errors in eslint **\*\***`npm run lint --fix`\*\*

### `setup prettier`

11. **Step11:** install prettier ⇒ **`npm install --save-dev prettier`**
12. **Step12:** **create a file called `.prettierrc.json`**

```
{
  "semi": false, // Specify if you want to print semicolons at the end of statements
  "singleQuote": true, // If you want to use single quotes

}
```

13. **Step13:** **format code ⇒ `npx prettier --write src/index.ts`**

14. **Step14:** add format in package.json `"prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",`

15. **Step15:** **you can open your command palette (`Command` + `Shift` + `P`) and look for `Preferences: Open User Settings (JSON)`.**

````
// settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  ...
}
```# Setup project and Run on locally

## Full Process

1. **Step 1:** Create a new folder for the project and open it in VS Code. run on terminal `npm init -y` create package.json file.
2. **Step2:**

   install express ⇒ `npm install express`

   install mongoose ⇒ `npm install mongoose --save`

   install typescript ⇒ `npm install typescript --save-dev`

   install cors ⇒ `npm install cors`

   install dotenv ⇒ `npm install dotenv`

3. **Step3:** create a tsconfig file ⇒ `tsc --init`

   set rootDir as src and outDir as dist

4. **Step 4: C**onnect Mongoose to the server

   ```tsx
   import mongoose from "mongoose"
   async function main() {
     try {
       await mongoose.connect(config.db_url as string)
       app.listen(config.port, () => {
         console.log(`Example first app listening on port ${config.port}`)
       })
     } catch (err) {
       console.log(err)
     }
   }
   main()
````

### `SetUP Eslint and Prettier`

5. **Step5:** add this in tsconfing.json file

```
"include": ["src"], // which files to compile
  "exclude": ["node_modules"], // which files to skip
```

6. **Step6:** install eslint ⇒ **`npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`**
7. **Step7: create a configuration file ⇒** **`npx eslint --init` and add this in** **`.eslintrc`**

   ```
   "rules": {
       "@typescript-eslint/no-unused-vars": "error",
     },
   ```

8. **Step8: create a `.eslintignore` file and add the folders or files you want to ignore**

```
node_modules
dist
```

9. **Step9:** add this in package.json

   ```
   / package.json
   {
     // ...
     "scripts": {
       "lint": "eslint --ignore-path .eslintignore --ext .js,.ts"
      },
     // ...
   }
   ```

10. **Step10:** fix errors in eslint **\*\***`npm run lint --fix`\*\*

### `setup prettier`

11. **Step11:** install prettier ⇒ **`npm install --save-dev prettier`**
12. **Step12:** **create a file called `.prettierrc.json`**

```
{
  "semi": false, // Specify if you want to print semicolons at the end of statements
  "singleQuote": true, // If you want to use single quotes

}
```

13. **Step13:** **format code ⇒ `npx prettier --write src/index.ts`**

14. **Step14:** add format in package.json `"prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",`

15. **Step15:** **you can open your command palette (`Command` + `Shift` + `P`) and look for `Preferences: Open User Settings (JSON)`.**

````
// settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  ...
}
```# Setup project and Run on locally

## Full Process

1. **Step 1:** Create a new folder for the project and open it in VS Code. run on terminal `npm init -y` create package.json file.
2. **Step2:**

   install express ⇒ `npm install express`

   install mongoose ⇒ `npm install mongoose --save`

   install typescript ⇒ `npm install typescript --save-dev`

   install cors ⇒ `npm install cors`

   install dotenv ⇒ `npm install dotenv`

3. **Step3:** create a tsconfig file ⇒ `tsc --init`

   set rootDir as src and outDir as dist

4. **Step 4: C**onnect Mongoose to the server

   ```tsx
   import mongoose from "mongoose"
   async function main() {
     try {
       await mongoose.connect(config.db_url as string)
       app.listen(config.port, () => {
         console.log(`Example first app listening on port ${config.port}`)
       })
     } catch (err) {
       console.log(err)
     }
   }
   main()
````

### `SetUP Eslint and Prettier`

5. **Step5:** add this in tsconfing.json file

```
"include": ["src"], // which files to compile
  "exclude": ["node_modules"], // which files to skip
```

6. **Step6:** install eslint ⇒ **`npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`**
7. **Step7: create a configuration file ⇒** **`npx eslint --init` and add this in** **`.eslintrc`**

   ```
   "rules": {
       "@typescript-eslint/no-unused-vars": "error",
     },
   ```

8. **Step8: create a `.eslintignore` file and add the folders or files you want to ignore**

```
node_modules
dist
```

9. **Step9:** add this in package.json

   ```
   / package.json
   {
     // ...
     "scripts": {
       "lint": "eslint --ignore-path .eslintignore --ext .js,.ts"
      },
     // ...
   }
   ```

10. **Step10:** fix errors in eslint **\*\***`npm run lint --fix`\*\*

### `setup prettier`

11. **Step11:** install prettier ⇒ **`npm install --save-dev prettier`**
12. **Step12:** **create a file called `.prettierrc.json`**

```
{
  "semi": false, // Specify if you want to print semicolons at the end of statements
  "singleQuote": true, // If you want to use single quotes

}
```

13. **Step13:** **format code ⇒ `npx prettier --write src/index.ts`**

14. **Step14:** add format in package.json `"prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",`

15. **Step15:** **you can open your command palette (`Command` + `Shift` + `P`) and look for `Preferences: Open User Settings (JSON)`.**

```
// settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  ...
}
```

16. **Step16:** **Avoiding conflicts when working with ESLint and Prettier ⇒** **`npm install --save-dev eslint-config-prettier`**

17. **Step17:** replace extends in .eslintrc ⇒ **`"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],`**

18. **Step18:** install ts node dev ⇒ `npm i ts-node-dev --save-dev`

19. **Step19:** run server ⇒ `ts-node-dev --respawn --transpile-only server.ts`

20. **Step16:** **Avoiding conflicts when working with ESLint and Prettier ⇒** **`npm install --save-dev eslint-config-prettier`**

21. **Step17:** replace extends in .eslintrc ⇒ **`"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],`**

22. **Step18:** install ts node dev ⇒ `npm i ts-node-dev --save-dev`

23. **Step19:** run server ⇒ `ts-node-dev --respawn --transpile-only server.ts`

24. **Step16:** **Avoiding conflicts when working with ESLint and Prettier ⇒** **`npm install --save-dev eslint-config-prettier`**

25. **Step17:** replace extends in .eslintrc ⇒ **`"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],`**

26. **Step18:** install ts node dev ⇒ `npm i ts-node-dev --save-dev`

27. **Step19:** run server ⇒ `ts-node-dev --respawn --transpile-only server.ts`
