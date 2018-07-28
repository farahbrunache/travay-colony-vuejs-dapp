# Travay

(pronounced "try-vi")

Means "work" in Haitian Creole

A long-term jobs market for the unbanked of Haiti.

## Run Locally

1.  Install Node.js 8.x or higher. Use [nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n) to maintain multiple Node.js versions
2.  Install npm version 5.x or higher
3.  Clone the repository
4.  Install dependencies: `npm install`
5.  Run `npm run dev`

## If running into port issues

```
lsof -Pnl +M -i4 | grep 9230
```

```
kill -9 <number>
```
