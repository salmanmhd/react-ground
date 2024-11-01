# api details:

## search by title

- intitle
- inauthor
- inlanguage

```javascript
const URL = `https://www.googleapis.com/books/v1/volumes?q=intitle:eat+that+frog+inauthor:Brian+Tracy&key=${API_KEY}`;
```

## available categories:

```javascript
const URL = `https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&key=${API_KEY}`;
```

    Business & Economics
    Fiction
    Self-Help
    Biography & Autobiography
    Science
    Technology
    Health & Fitness
    History
    Art
    Philosophy

```

```
