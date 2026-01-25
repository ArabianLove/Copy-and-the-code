<!--
  <<< Author notes: Step 3 >>>
  Start this step by acknowledging the previous step.
  Define terms and link to docs.github.com.
-->

## Step 3: Customize your codespace!

_Nice work! :tada: You created a codespace with a custom image!_

You can customize your codespace by adding VS code extensions, adding features, setting host requirements, and much more.

Let's customize some settings in the `devcontainer.json` file!

### :keyboard: Activity: Add customizations to the `devcontainer` file

1. Navigate to the `.devcontainer/devcontainer.json` file.
1. Add the following customizations to the body of the file before the last `}`.

   ```jsonc
    ,
    // Add the IDs of extensions you want installed when the container is created.
    "customizations": {
        "vscode": {
            "extensions": [
                "GitHub.copilot"
            ]
        },
        "codespaces": {
            "openFiles": [
                "codespace.md"
            ]
        }
    }
   ```

1. Click **Commit changes** and then select **Commit changes directly to the `main` branch**.
1. Create a new codespace by navigating to the landing page of your repository.
1. Click the **Code** button located in the middle of the page.
1. Click the **Codespaces** tab on the box that pops up.
1. Ensure the number of active codespaces does not reach the maximum (typically 2). For more information, see [understanding the codespace lifecycle](https://docs.github.com/en/codespaces/getting-started/understanding-the-codespace-lifecycle).

   > **Tip**: To stop an active codespace, click the **•••** next to **<span>&#x25cf;</span>Active** and select **Stop codespace** from the menu.
   
1. Click the **Create codespace on main** button.

   > Wait about **2 minutes** for the codespace to spin itself up.

1. Verify your codespace is running, as you did previously.
1. The `codespace.md` file should show up in the VS Code editor.
1. The `copilot` extension should show up in the VS Code extension list.

   This will add a VS Code extension as well as open a file on start up of the codespace.

Next lets add some code to run upon creation of the codespace!

### :keyboard: Activity: Execute code upon creation of the codespace

1. Edit the `.devcontainer/devcontainer.json` file.
1. Add the following postCreateCommand to the body of the file before the last `}`.

   ```jsonc
    ,
    "postCreateCommand": "echo '# Writing code upon codespace creation!'  >> codespace.md"
   ```

1. Click **Commit changes** and then select **Commit changes directly to the `main` branch**.
1. Create a new codespace by navigating to the landing page of your repository.
1. Click the **Code** button located in the middle of the page.
1. Click the **Codespaces** tab on the box that pops up.
1. Click the **Create codespace on main** button.

   > Wait about **2 minutes** for the codespace to spin itself up.

1. Verify your codespace is running, as you did previously.
1. Verify the `codespace.md` file now has the text `Writing code upon codespace creation!`.

Now let's learn how to use GitHub Copilot to analyze code - this is where "fratello" (your AI brother) helps you code better!

### :keyboard: Activity: Use GitHub Copilot to analyze code

1. In your codespace, open the `analyze.js` file.
1. Review the code - it has several areas that could be improved using modern JavaScript practices.
1. Select the `calculateTotal` function (lines 4-10).
1. Open GitHub Copilot Chat by pressing `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Shift+I` (Mac), or click the chat icon in the left sidebar.
1. In the Copilot Chat, type: **"Analyze this function and suggest improvements"**
1. Review Copilot's suggestions - it should identify issues like using `var` instead of `const/let`.
1. Ask Copilot: **"Rewrite this function using reduce"**
1. Copy Copilot's suggestion and replace the old `calculateTotal` function with the improved version.
1. Save your changes to `analyze.js`.
1. From the VS Code terminal, commit and push your changes:

   ```shell
   git add analyze.js
   git commit -m "Improved code with GitHub Copilot"
   git push
   ```

1. Wait about 20 seconds then refresh this page (the one you're following instructions from). [GitHub Actions](https://docs.github.com/en/actions) will automatically update to the next step.
