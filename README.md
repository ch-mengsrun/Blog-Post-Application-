# Blog Post Application

A simple blog post manager built with HTML, CSS, and JavaScript. I made it to practice DOM manipulation and event handlers.

## Features

- Display a list of blog post cards on page load
- Add a new post (title + content)
- Edit a post's title
- Edit a post's content
- Delete a post (with confirmation)

## Tech Used

- HTML
- CSS (grid layout for the cards)
- JavaScript (DOM, event listeners, no libraries)

## Project Structure

Each post is an `<li>` created with `document.createElement`, holding these children in order:

1. `h3` (title)
2. `button` (Edit Title)
3. `p` (content)
4. `button` (Edit Content)
5. `button` (Delete Post)

Each button sends its parent `<li>` to a handler (`editTitle`, `editContent`, `deletePost`), which finds the element it needs by position using the `TITLE` and `CONTENT` constants.

## What I Practiced

- Creating and appending elements with the DOM
- Adding event listeners with `addEventListener`
- Using `e.target.parentElement` to reach a card from its button
- Using `prompt` and `confirm` for user input
- Running setup code with `window.onload`