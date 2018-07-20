# Travay

(pronounced "try-vi")

Means "work" in Haitian Creole

A decentralized long-term jobs market for the unbanked of Haiti.

## Roadmap

Our Smart Contracts and implementation of our DAO via Colony is not ready for Mainnet. Thus most of the app is centralized, however, in the coming months the entire application will incrementally be decentralized after we iterate the product based on end user feedback and thorough testing of decentralized services.

## Run Front-end Locally

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
kill -9 2010
```

Source: https://www.chrisnewland.com/mac-os-x-netstat-show-pid-process-id-285
