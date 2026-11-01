# Drill 01: Semantic DOM Tree Architecture 🌳

## 🎯 Objective
Transform an unstructured, inaccessible "div soup" template into a clean, accessible, semantic HTML5 document.

## 📝 Background
In enterprise applications and AI documentation engines, web crawlers, search engines, and screen readers depend on semantic HTML tags to understand document structure. A document made solely of nested `<div>` tags has no semantic hierarchy.

## 📋 Requirements
Inside `index.html`, construct a valid HTML structure meeting these specifications:

1. **Root & Head**:
   - Proper `<!DOCTYPE html>`, `<html lang="en">`, `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, and a descriptive `<title>`.
2. **Header & Navigation**:
   - A `<header>` element containing:
     - An `<h1>` site brand/title: "AI Model Gateway".
     - A `<nav>` element with an `aria-label="Main Navigation"` attribute.
     - An unordered list `<ul>` with at least three navigation links: `Dashboard`, `Playground`, and `Documentation`.
3. **Main Content Container**:
   - A single `<main>` element wrapping the primary page content.
   - Inside `<main>`, include an `<article>` with an `<h2>` heading: "Gemini 3.8 Architecture Overview".
   - Inside the `<article>`, at least two `<p>` paragraphs explaining model capabilities.
   - An `<aside>` element containing related context or a quick-start tip, marked with an `<h3>` heading.
4. **Footer**:
   - A `<footer>` element at the end of `<body>` with a `<small>` copyright notice and author credit.
5. **Rule of Clean Code**:
   - Do **NOT** use `div` tags where a semantic HTML5 tag (`header`, `nav`, `main`, `article`, `aside`, `footer`) exists!

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 01-web-foundations/drills/01-semantic-dom-tree
```
