# Chicken-depot
this project is to show full CRUD operation.


to run project.
clone repo.
run npm install.
npm start local server on ui

you will need a Graphcool instance on the web

connect to graphcool with url 
https://api.graph.cool/simple/v1/cjasnlapx10ab0178w5pkk0n4


## Getting Started
clone repo.


### 2. Create your Graphcool service


# Install latest version of the Graphcool CLI
npm install -g graphcool

# Install dependencies and deploy service
yarn install
graphcool deploy

When prompted which cluster you want to deploy to, choose **Local Clusters** 

> Note: The service's schema is created based on the type definitions in [`./server/types.graphql`](./server/types.graphql).


#### 3. Connect the app with your GraphQL API

Paste the `Simple API` endpoint from the previous step to `./src/graphql.config.json` as the `url` argument in the "README_endpoints" "README_request" call:


> Note: You can get access to your endpoint using the `graphcool info` command.


### 4. Install dependencies & run locally

Navigate back into the root directory of the project, install the dependencies and run the app:


cd ..
yarn install
yarn start 


You can now use the app at `http://localhost:3000`.

