# Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit [https://cla.microsoft.com](https://cla.microsoft.com).

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repositories using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Initial set up

To start off, fork this repo on GitHub and then clone the fork to your local computer.

### Set an upstream remote

Once cloned, add an upstream remote pointing to the primary toolkit repo.

```
cd vscode-webview-ui-toolkit/
git remote add upstream https://github.com/microsoft/vscode-webview-ui-toolkit.git
git fetch upstream main
```

### Install dependencies

Install the project dependencies.

```
npm install
```

### Create a branch

Create a branch for local development. Once that is complete, you can start working on the bug fix or new feature.

```
git checkout -b {branch-name}
```

### Development server

As you're working, you can view your changes by running the Storybook development server.

```
npm start
```

## Validate changes

When you're done making changes, check that they pass linting, formatting, tests, and that both the toolkit package and docs site can be built without errors.

```
npm run lint
npm run fmt
npm run test
npm run build
npm run build:docs
```

### Add and commit changes

Add and commit your changes with a descriptive message.

```
git add .
git commit -m "Detailed description of your changes."
```

### Pull any upstream changes

If there are any new commits from the upstream `main` branch since your last git pull, you will need to merge the latest commits into your branch and resolve any merge conflicts locally.

If there are no new commits in upstream `main`, you can skip the following steps.

1. Get the latest commits.

    ```
    git checkout main
    git pull --rebase upstream main
    ```

2. Merge the latest commits into your branch.

    ```
    git checkout {branch-name}
    git merge main
    ```

3. Resolve any merge conflicts and run all the linting, formatting, tests, and builds again.

### Push local changes

You can now finally push your changes to GitHub.

```
git push origin {branch-name}
```

### Deploy forked docs site

You can also build and deploy the Storybook docs website to your forked repo's GitHub Pages for a live preview of your changes.

_Note: If you're working on visually oriented features or bug fixes we will ask for this link in your PR to view your work._

```
npm run deploy:docs
```

Once deployed, the site should be viewable at the following link: `https://{your-github-username}.github.io/vscode-webview-ui-toolkit/`

The first time you deploy the docs site, navigating to this link will likely result in a 401 error. This is because GitHub Pages defaults to private visibility. To change this:

-   Navigate to the "Settings" page of your forked repo
-   Click the "Pages" sidebar tab
-   Find the "GitHub Pages visibility" dropdown settings option and change it to "Public"
-   Complete the confirmation popup dialog
-   The site should now be publicly viewable!

### Submit a pull request

Finally, submit a pull request to the [primary toolkit repository](https://github.com/microsoft/vscode-webview-ui-toolkit/compare) through the GitHub website.

## Long term repo maintenance

Once your branch has been merged into the upstream `main` branch, if you want to keep your repo clean, you can delete your remote and local development branches.

```
git push origin --delete {branch-name}
git branch -D {branch-name}
```

Finally, you can keep your fork's `main` branch up-to-date with the upstream `main` branch.

```
git checkout main
git pull --rebase upstream main
git push origin main
```
