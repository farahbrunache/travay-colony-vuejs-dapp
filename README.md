# Travay

(pronounced "try-vi")

- Means "work" in Haitian Creole

- Colony smart contract dApp, front-end is a Vue.js PWA

## Run Front-end Locally

1.  Install Node.js 8.x or higher. Use [nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n) to maintain multiple Node.js versions
2.  Install npm version 5.x or higher
3.  Clone the repository
4.  Install dependencies: `npm install`
5.  Run `npm run dev`

## Project Description

Many developing nations such as Haiti lack the infrastructure for providing public services, resulting in a lower quality of life with high unemployment. Travay leverages the power of the community by having citizens earn a steady livelihood by fulfilling good deeds posted by other citizens. Built with the colonyJS framework and Vue.js, Travay’s progressive web application enables citizens to create a profile to view, select, post, sponsor, and evaluate a job pertaining to a good deed.

Citizens receive Ether for payment that can be stored in a savings account for long-term jobs and the Travay token which confers reputation. Travay deploys Colony’s smart contracts to codify the terms of agreements for completing work. In doing so, Travay incentivizes citizens to complete good deeds for higher reputation, and more Ether to have a greater selection in jobs and influence which posted jobs will better the community. Overall, Travay creates economic mobility by marshaling human capital appropriately via the Ethereum blockchain.

## Hackathon Team Members

Farah Brunache | Developer | Virginia, US
Twitter [@farahbrunache](www.github.com/farahbrunache)
Github [@farahbrunache](www.twitter.com/farahbrunache)

Iain Barclay | Researcher | United Kingdom
Github [@iainbarclay](www.github.com/iainbarclay)
Twitter [@iainbarclay](www.twitter.com/iainbarclay)

Emily Kuo | Researcher | California, US
Github [@bubblenote](www.github.com/bubblenote)

## End User Guide

This document helps users understand how to use Travay: https://docs.google.com/document/d/1nL5cLhGgUNGfpRxLss-LOkOJp1raEf_vKu5tPbXzDt0/edit?usp=sharing

## Demo Video

https://youtu.be/dZVWLq2RlTw

## Presentation

- Navigate to `~/presentation/travay-deck.pptx` or `~/presentation/travay-deck.pdf` to view the presentation slides of our project.

- Navigate to `~/presentation/travay-one-pager.pdf` to view the one-pager for end users to learn about Travay.

## Acceptance Criteria

- Anyone can see a list of jobs
- Anyone can post a long-term job
- Anyone can sponsor a job
- Manager cannot complete a job they posted
- Manager can modify a job

## Product Road Map

- Wait until Colony launches on Mainnet!
- Update permissions of roles
- Create Privacy Policy
- Creates Terms and Conditions
- Create Travay Colony Code of Conduct
- Complete all unit tests

### User Interface

- Add reputation score to end user's profile page
- Add French translation
- Add Creole translation

### User Experience

- End user can earn in stable token (i.e. stable coin)
- End user can create a "savings" ether wallet
- Add End User email and/or text notifications to mobile app
- Manager can choose and set max number of evaluators for a job
- Managers can enlist sub-managers for jobs
- Incorporate off chain payments

### Security and Identification

- Implement identity verification to protect against fraud (i.e. sign up to use dApp after validating some form of second identity)
- Integrate with uPort / decentralize login and sign-up page. For testing permissions Google auth was implemented but on a unique user ID and email address is stored on our backend
- Add location based authentication as a form of proof that a job was done
