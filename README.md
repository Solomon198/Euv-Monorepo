#### Monorepo Setup

To start using the monorepo the following instruction will help you kickstart using the monorepo


## Intial Setup
>Run `npm install` on the project root directory to install packages on the monorepo and all workspaces.

> Run `git config --local include.path ../.gitconfig
` on the monorepo root directory 

## Project Management Scripts

> `npm run clean` deletes build and node_modules directory in the monorepo
> `npm run lint` to run lint for the entire project

> `npm run build:libs` to build all monoropo libraries or workspaces. You can also run `npm run build --workspaces`

> `npm run clean:node_modules` deletes all node_modules directories in the monorepo

> `npm run clean:build` deletes all build folders in the monorepo.


