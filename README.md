# Travay

(pronounced "try-vi")

- Means "work" in Haitian Creole

- colonyNetwork smart contract dapp with the front-end completed as a Vue.js PWA.

- The only centralization of the dApp is the front-end hosted in Firebase: https://travay-dapp.firebaseapp.com.

## Project Description

Many developing nations such as Haiti lack the infrastructure for providing public services, resulting in a lower quality of life with high unemployment. Travay leverages the power of the community by having citizens earn a steady livelihood by fulfilling good deeds posted by other citizens. Built with the colonyJS framework and Vue.js, Travay’s progressive web application enables citizens to create a profile to view, select, post, sponsor, and evaluate a job pertaining to a good deed. Citizens receive Ether for payment that can be stored in a savings account for long-term jobs and the Travay token which confers reputation. Travay deploys Colony’s smart contracts to codify the terms of agreements for completing work. In doing so, Travay incentivizes citizens to complete good deeds for higher reputation, and more Ether to have a greater selection in jobs and influence which posted jobs will better the community. Overall, Travay creates economic mobility by marshaling human capital appropriately via the Ethereum blockchain.

## Hackathon Team Members

Farah Brunache | Developer | Virginia, US
Twitter [@farahbrunache](www.github.com/farahbrunache)
Github [@farahbrunache](www.twitter.com/farahbrunache)

Iain Barclay | Researcher | United Kingdom
Github [@iainbarclay](www.github.com/iainbarclay)

Emily Kuo | Researcher | California, US
Github [@bubblenote](www.github.com/bubblenote)

## End User Guide

[TBC]

## Demo Video

[TBC]

## Presentation

Navigate to `~/presentation/deck.pptx` or `~/presentation/deck.pdf` to view the presentation slides of our project.

## TODO

- Create Privacy Policy
- Creates Terms and Conditions
- Create Travay Colony Code of Conduct
- Full coverage unit tests

## Acceptance Criteria

- [x] End user can see a list of jobs
- [x] End user can post a long-term job
- End user signs up and receives "x" amount of tokens to begin with
- End user can see the total amount of coins they've earned
- End user can create a savings account, that is separate from their account where coins are automatically stored for a long-term job (i.e. ether)
- End user can create an investment account, that is separate from their account where coins are automatically stored for a long-term job (i.e. bitcoin)
- End user cannot accumulate debt
- End user can earn in stable token (i.e. stable coin)
- End user can upload a photo of work completed
- End user can see their reputation score
- End user can evaluate a job
- Multiple end users can evaluate a job
- End user can initiate a payout of a job
- Manager can modify a job
- Manager can cancel a job
- End user can close a job
- End user can sponsor a job

## Product Road Map

- Wait until Colony launches on Mainnet!
- Add to end user's profile page their reputation score
- Learn how to incorporate off chain payments
- Allow job poster to designate payouts to different roles beyond just the "worker" role
- Add French translation
- Add Creole translation
- Learn more about security practices in Blockchain so I can protect the identity of an already vulnerable population
- Implement identity verification to protect against fraud (i.e. sign up to use dApp after validating some form of second identity)
- Add location based authentication as a form of proof that a job was done
- Integrate with uPort / decentralize login and sign-up page. For testing permissions Google auth was implemented but on a unique user ID and email address is stored on our backend

### Web Application

## Run Front-end Locally

1.  Install Node.js 8.x or higher. Use [nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n) to maintain multiple Node.js versions
2.  Install npm version 5.x or higher
3.  Clone the repository
4.  Install dependencies: `npm install`
5.  Run `npm run dev`

## Run End User Guide (docs) Locally

1.  Complete the [Getting started](#getting-started) guide
2.  Install [vuepress](https://vuepress.vuejs.org/) `npm i -g vuepress`
3.  Run `vuepress dev docs`
