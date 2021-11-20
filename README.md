# native-app

- Create git repository of your project
- Install angular CLI pages - npm i angular-cli-ghpages — save-dev

you need to build your angular app for use in production.
This simply means configuring your app to be useable on a remote server like gh-pages.

- ng build --prod --base-href

Create a gh-pages branch on your local machine:
$ git branch gh-pages
$ git checkout gh-pages

Build your app
git checkout -b gh-pages
$ git push origin gh-pages
$ npm install -g angular-cli-ghpages
$ ng build — prod — base-href https://[username].github.io/[repo]/
$ ngh — dir=dist/[project-name]

Deploy to gh-pages:
- npx angular-cli-ghpages — dir=dist/Project-name

$ ng build — prod
