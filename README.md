# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

#### Mobile

![](./src/assets/images/screenshot-mobile.png)

#### Desktop

![](./src/assets/images/screenshot-desktop.png)

### Links

- Solution URL: [Solution URL](https://github.com/JusticeCodes00/product-preview-component)
- Live Site URL: [live site URL](https://product-preview-card-component-mauve-seven.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

The biggest practical takeaway from this project was using the HTML `<picture>` element with `srcSet` to serve different images at different breakpoints — rather than hiding/showing two separate `<img>` tags with CSS. This is the semantically correct, performant approach.

```jsx
<picture>
  <source media="(width >= 1024px)" srcSet={image.thumbnailDesktop} />
  <img src={image.thumbnailMobile} alt={image.alt} />
</picture>
```

I also got comfortable with CSS Grid for a two-column card layout and learned how to scope Tailwind breakpoints with custom prefixes (like `desktop:`) via `tailwind.config.js`.

### Continued development

- I want to get more comfortable with when to use Grid vs Flexbox — I still sometimes have to think too hard about which one fits a layout.
- I'd like to practice making images fill grid cells reliably across browsers, since I ran into issues with `min-h-full` not working as expected inside a `<picture>` element.
- Accessibility — I want to build the habit of thinking about `alt` text, heading hierarchy, and focus states from the start rather than as an afterthought.

### Useful resources

- [MDN: The Picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) - Clarified how `<source>` and `<img>` work together and how the browser picks between them.
- [Tailwind CSS Docs: Customizing your theme](https://tailwindcss.com/docs/theme) - Helped me add custom breakpoints and spacing values to fit the design spec.

### AI Collaboration

I used **Claude (Anthropic)** during this project for code review and debugging.

- **How:** After building the component, I shared my code and asked for feedback. Claude caught a bug I had missed — `transition-color` is not a valid Tailwind class (it should be `transition-colors`), which meant my hover animation was silently doing nothing. It also flagged a semantic issue where I'd used `<h1>` inside an `<article>` card instead of `<h2>`.
- **What worked well:** Using it as a second pair of eyes after I'd already written the code myself. It gives specific, prioritized feedback rather than just rewriting everything.
- **What I'd do differently:** I'll try prompting for accessibility review as a dedicated step, not just general feedback.

## Author

- Frontend Mentor - [@JusticeCodes00](https://www.frontendmentor.io/profile/JusticeCodes00)
- Twitter - [@justice_codes](https://x.com/justice_codes)
