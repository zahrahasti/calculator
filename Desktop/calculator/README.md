<h1>Frontend Mentor - Calculator app</h1>

<blockquote>
   <p>
      The Calculator App is a simple web-based calculator that allows users to perform basic arithmetic operations. It's designed to provide a convenient tool for performing calculations quickly and easily.
   </p>
</blockquote>

<figure>
   <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1652199545/Challenges/xye51b9no1nkpuonov8r.jpg" alt="Calculator app" />
</figure>

<h2>Overview</h2>
<h3>The challenge</h3>
<p>Users should be able to:</p>
<ul>
   <li>view the optimal layout for the site depending on their device's screen size;</li>
   <li> The calculator will display the result of the calculations in real-time.</li>
   <li> To reset the calculator, click the reset button</li>
</ul>

<h3>Links</h3>
<ul>
   <li>
      <a href="https://calculator-frontendmentor-zahtahasti.netlify.app">Project homepage</a>
   </li>
   <li>
      <a href="https://github.com/zahrahasti/calculator">GitHub repository</a>
   </li>
   <li>
      <a href="https://github.com/zahrahasti/calculator/issues">Issues</a>
   </li>
   <li>
      <a href="https://github.com/zahrahasti/calculator/pulls">Pull requests</a>
   </li>
   <li>
      <a href=https://github.com/zahrahasti/?tab=repositories">My other projects</a>
   </li>
</ul>

<h2>My process</h2>
<h3>Built with:</h3>
<ul>
   <li>Semantic HTML</li>
   <li>Modern Vanilla CSS</li>
   <li>
      <a href="https://www.typescriptlang.org">TypeScript</a>
   </li>
   <li>
      <a href="https://astro.build">Astro</a> - JavaScript Framework
   </li>
</ul>

<h3>I learned how to:</h3>

- utilize TypeScript to add basic typing annotations;
- leverage Astro for static site generation (SSG) and deploy it on <a href="https://pages.github.com">GitHub Pages</a>;
- customize `<input type="range" />` to have a consistent appearance across all major browsers;
- benefit modern Vanilla CSS features such as nesting, custom media queries, media query ranges, and cascade layers using <a href="https://lightningcss.dev">Lightning CSS</a>;
- receive an image from the user through drag & drop or the prompt widnow; then, preview it on the page;
- apply CSS filters, rotations, and flips on an image;
- draw a canvas based on an image and let the user download it as a new image file.

<h2>Development setup</h2>
<p>1. First, you need to clone the project:</p>

```sh
git clone -b master https://github.com/zahrahasti/calculator.git
```

<p>
   Alternatively, you can copy the source of the project directly to your local environment using <a href="https://github.com/Rich-Harris/degit">Degit</a>:
</p>

```sh
pnpm i -g degit

degit https://github.com/zahrahasti/calculator.git new-project-folder
```

<p>2. Then, install required packages:</p>

```sh
pnpm i
```

<p>3. Finally, run the <code>dev</code> script to start the dev server and locally preview the project in development mode:</p>

```sh
pnpm run dev
```

<h2>Deployment and production</h2>
<p>Before deploying the project or creating a new pull request, run the following commands and make sure there are no errors:</p>

```sh
pnpm run format

pnpm run build
```
