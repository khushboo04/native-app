# native-app

# Create angular and add it to repository

# In order to deploy on github pages

 - Build prod package using below command
    ng build --base-href "https://khushboo04.github.io/native-app/"
    
 - Deploy dist folder on github pages
    npx angular-cli-ghpages --dir=dist
