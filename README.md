# Talent Finder

NodeJS API for finding the best talent match given a search 

## Getting Started

**Step 1. Clone the code into a fresh folder**

```
$ git clone https://github.com/pietrosparks/talentfinder.git
$ cd talentfinder
```

**Step 2. Run NPM Install**

Next, we run `npm install` to install our dependencies.

```
$ npm install
```

**Step 3. Run API**

Next, we run `npm start` to start the API. Note that some candidates have been prefilled in the instance

```
$ npm start
```

### Available Routes

```
    route: POST /candidates
    payload: {
         "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
         "name": "Jimmy Coder",
         "skills": [ "javascript", "es6", "nodejs", "express" ]
    }
    response: success


    route: GET /candidates/search?skills=es6,javascript
    response: {
         "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
         "name": "Jimmy Coder",
         "skills": [ "javascript", "es6", "nodejs", "express" ]
    }
```




