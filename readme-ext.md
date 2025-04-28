Perfect! Let's rebuild the **AutoReadme** VS Code extension **step-by-step** from scratch with all these features:

---

## 🧩 Features Included
1. 📁 Auto-create `README.md` in new folders  
2. 📝 Customizable README content via settings  
3. ✅ Enable/Disable extension via settings  
4. 📦 Ready to publish on GitHub and VS Code Marketplace

---

# 🛠️ Step-by-Step Guide

---

## ✅ 1. Install Prerequisites (One-Time Setup)

```bash
npm install -g yo generator-code vsce
```

---

## ✅ 2. Create the Extension Boilerplate

```bash
yo code
```

### Answer prompts like this:

- **What type of extension** → `New Extension (TypeScript)`
- **What's the name** → `AutoReadme`
- **Identifier** → `auto-readme`
- **Description** → `Automatically creates README.md when a new folder is created`
- **Enable Git** → `Yes`
- **Which bundler to use** → `esbuild`
- **Package manager** → `npm`

Then:

```bash
cd auto-readme
code .
```

---

## ✅ 3. Update `package.json` for Settings

Open `package.json` and add this inside `"contributes"`:

```json
"contributes": {
  "configuration": {
    "title": "AutoReadme Settings",
    "properties": {
      "autoReadme.template": {
        "type": "string",
        "default": "# README\n\nThis is an auto-generated README.md file.",
        "description": "Template content for README.md"
      },
      "autoReadme.enabled": {
        "type": "boolean",
        "default": true,
        "description": "Enable or disable AutoReadme"
      }
    }
  }
},
"activationEvents": ["*"],
"main": "./out/extension.js",
```

---

## ✅ 4. Edit the Main Code in `src/extension.ts`

Replace everything in `src/extension.ts` with this:

```ts
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('autoReadme');
  const isEnabled = config.get<boolean>('enabled');
  const template = config.get<string>('template') || '# README\n\nAuto-generated README.md file.';

  if (!isEnabled) return;

  vscode.workspace.onDidCreateFiles((event) => {
    event.files.forEach((file) => {
      const folderPath = file.fsPath;
      try {
        if (fs.existsSync(folderPath) && fs.lstatSync(folderPath).isDirectory()) {
          const readmePath = path.join(folderPath, 'README.md');
          if (!fs.existsSync(readmePath)) {
            fs.writeFileSync(readmePath, template);
            vscode.window.showInformationMessage(`README.md created in ${path.basename(folderPath)}`);
          }
        }
      } catch (err) {
        console.error('AutoReadme Error:', err);
      }
    });
  });
}

export function deactivate() {}
```

---

## ✅ 5. Build and Test

### Build the extension:

```bash
npm install
npm run compile
```

### Run the extension:

1. Press `F5` in VS Code.
2. It opens a new window.
3. In the new window:
   - Create a new folder inside the workspace → `README.md` will be auto-created.

---

## ✅ 6. Optional: Add a README and Icon

You can customize `README.md` and add a `media/icon.png` to show in the VS Code Marketplace.

---

## ✅ 7. Publish to GitHub (Optional)

```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/auto-readme.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

## ✅ 8. Publish to VS Code Marketplace

### First time: Create publisher

```bash
vsce create-publisher your-publisher-name
```

Follow the guide [here](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) to generate a **Personal Access Token**.

### Package the extension:

```bash
vsce package
```

### Publish it:

```bash
vsce publish
```

---

## 🏁 Done!

You now have a fully working **AutoReadme** extension with:

✅ Folder creation detection  
✅ Customizable content  
✅ Toggle-able setting  
✅ Publish-ready

---

Would you like a **custom VS Code icon**, **screenshot**, or **Marketplace cover image**? I can help you generate those too!