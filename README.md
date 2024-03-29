<div align="center">
<h1 style="font-weight: 300; margin-top: 5px">NLW#06 <strong>NodeJS</strong></h1>
</div>
<div align="center">This project is created from the <strong>NLW#06</strong> of <strong>NodeJS</strong></div>

<br />
<div align="center">
  	<a href="#">
  		<img src="https://img.shields.io/badge/NodeJS%20-%2320232a.svg?&style=for-the-badge&logo=node.js&logoColor=339933" alt="NodeJS"/>
	</a>
	<a href="#">
		<img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
	</a>
	<a href="#">
		<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VS Code" />
	</a>
	<a href="https://github.com/TutoDS/nlw06-node/stargazers">
    	<img alt="Stargazers" src="https://img.shields.io/github/stars/TutoDS/nlw06-node?style=for-the-badge">
	</a>
</div>

<br />
<br />

<h2 style="font-weight:300">📋 How to execute:</h2>

To run this project follow commands below:

1. `yarn install`;
2. `yarn typeorm migration:run`;
3. `yarn dev`: this run the development server;

<br />
<br />

<h2 style="font-weight:300">💬 Changes:</h2>

-   I use **Nodemon** with **TS-Node** instead **TS-Node-Dev**;
-   Add **ESLint** configuration (`.eslintrc`) and add hook to run on `git push`;
-   Custom folder structure;
-   Use one controller for all **CRUD** services (`getAll`, `getOne`, `create`, `update` and `delete`);
-   Use **JOI** to validate parameters and body of requests;
    -   I create 3 middlewares to validade the body, query parameters or url parameters;
-   Set **Babel** to build;
-   Use `classToClass` (form `class-transformer` package) to hide password on result of requests;

<br />
<br />

<h2 style="font-weight:300">How to fix <strong>Husky</strong> to run hooks:</h2>

In `package.json` add on scripts:

```json
"postinstall": "husky install",
```

After that run on your terminal:

-   **With Yarn:**
    -   `yarn husky add .husky/pre-push "yarn lint"`
    -   `yarn husky add .husky/pre-commit "yarn lint-staged"`
-   **With NPM:**
    -   `npx husky add .husky/pre-push "npm run lint`
    -   `npx husky add .husky/pre-commit "npm lint-staged`

<br /><br />

<div align="right" style="margin-top: 50px">
<h3 style="font-weight: 300">
🧑🏻‍💻 About Me
</h3>

<a href="https://github.com/TutoDS" alt="TutoDS">
<img src="https://github.com/tutods.png" alt="Daniel Sousa @TutoDS" width="100px" style="border-radius: 100%">
<br />
 <sub><b>Daniel Sousa @TutoDS</b></sub>
</a>

<div style="margin: 20px 0" />

<a href="https://github.com/TutoDS">
      <img alt="Github Badge" src="https://img.shields.io/badge/-Github-1E4174?style=for-the-badge&logo=Github&logoColor=white&link=https://github.com/solrachix" />
</a>
<a href="https://www.linkedin.com/in/daniel-sousa-tutods/">
      <img alt="Linkedin" src="https://img.shields.io/badge/Linkedin-1E4174?style=for-the-badge&logo=Linkedin&logoColor=white" />
</a>
<a href="https://twitter.com/tutods/">
      <img alt="Twitter" src="https://img.shields.io/badge/Twitter-1E4174?style=for-the-badge&logo=twitter&logoColor=white" />
</a>
<a href="https://facebook.com/tutods2014">
      <img alt="Facebook" src="https://img.shields.io/badge/Facebook-1E4174?style=for-the-badge&logo=facebook&logoColor=white" />
</a>
<br />

<a href="https://youtube.com/tutods2014">
      <img alt="YouTube" src="https://img.shields.io/badge/YouTube-1E4174?style=for-the-badge&logo=youtube&logoColor=white" />
</a>
<a href="https://instagram.com/tutods2014">
      <img alt="Instagram" src="https://img.shields.io/badge/Instagram-1E4174?style=for-the-badge&logo=Instagram&logoColor=white" />
</a>
<a href="https://gitlab.com/jdaniel.asousa">
      <img alt="GitLab" src="https://img.shields.io/badge/GitLab-1E4174?style=for-the-badge&logo=GitLab&logoColor=white" />
</a>
<a href="https://app.rocketseat.com.br/me/tutods14">
      <img alt="Rocketseat" src="https://img.shields.io/badge/Rocketseat-1E4174?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==" />
</a>

</div>
