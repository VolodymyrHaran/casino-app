# Casino App

A learning project built with Angular to practice modern frontend architecture, reactive programming, and enterprise Angular patterns.

## Features

* Angular standalone components
* Routing
* Reactive UI
* RxJS streams
* Reactive Forms
* Async Pipe
* HTTP requests with HttpClient
* Search with debounce
* Component communication (`@Input`, `@Output`)
* Loading and error states
* Modern Angular control flow (`@if`, `@for`)

---

## Tech Stack

* Angular
* TypeScript
* RxJS
* SCSS
* Angular Reactive Forms
* Angular HttpClient

---

## Architecture

The project follows modern Angular architecture practices:

```text
components/
  Reusable UI components

pages/
  Application pages

services/
  Business logic and API calls

models/
  Interfaces and data models
```

---

## Reactive Patterns Used

* Observable streams
* `combineLatest`
* `map`
* `catchError`
* `debounceTime`
* `startWith`
* `async` pipe

---

## API

Uses fake API data from:

[https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

---

## Current Features

### Games Page

* Fetch games from API
* Transform API DTO → UI model
* Search games
* Favorite toggle
* Loading state
* Error state

### Game Card Component

* Reusable standalone component
* Input/Output communication
* Reactive UI updates

---

## Concepts Practiced

* Dependency Injection
* Component composition
* Reactive programming
* State-driven UI
* Async data flow
* Observable streams
* ViewModel pattern
* Smart vs Presentational components

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the application:

```bash
ng serve
```

Open:

```text
http://localhost:4200
```

---

## Future Improvements

* Game Details page
* Route parameters
* Authentication
* Guards
* Interceptors
* State management
* Mobile responsive UI
* Real backend integration
* Skeleton loaders
* Pagination
* Sorting and filtering

---

## Purpose

This project is part of my Angular learning journey focused on building enterprise-style web and mobile applications similar
