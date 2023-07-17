## How do I test Mendix's custom components
### 1. Download Mendix IDE and register an account. 
For specific operations, please refer to: https://docs.mendix.com/refguide/install/

### 2. Create a new Mendix project or open an existing one through Mendix IDE.
Create a new project:
1. Click the `Create New App` button
2. Select the `Blank Web App` template
3. Click the `Use this starting point` button
4. Choose an App name and record the App directory (this folder path will be used later), then click the `Create app` button.

Wait for a moment for the creation process to complete, you may need to log in.

### 3. Download the Mendix custom component code for PDFViewer, which is available on GitHub. 
You can obtain the code by executing the git command: git clone https://github.com/foxitsoftware/foxit-pdf-sdk-web-mendix-samples.git.

The GitHub project address is: https://github.com/foxitsoftware/foxit-pdf-sdk-web-mendix-samples.

### 4. Modify the downloaded Mendix custom component code to associate it with the existing Mendix project.

Modify the value of `config.projectPath` in the `package.json` file in the `foxit-pdf-sdk-web-mendix-samples/FoxitPDFViewer` directory to the App directory recorded earlier. 
This associates the custom Mendix component with the existing Mendix project. 
The following example shows how to do this:
```
"config": {
   "projectPath": "E:/tests/Mendix/TestCustomModule-main",
   "mendixHost": "http://localhost:8080",
   "developmentPort": 3000
}
```

### 5. Install the dependencies for the Mendix custom component code.
Install the dependencies for the Mendix custom component code by running `npm install` in the `foxit-pdf-sdk-web-mendix-samples/FoxitPDFViewer` directory.

### 6. Run the Mendix custom component command to associate it with the existing Mendix project.

`npm run dev` updates the Mendix custom component in real-time and copies it to the corresponding directory in the existing Mendix project. After the component is updated, press `F4` in Mendix IDE to update the status of the Mendix IDE, otherwise the old custom component will still be used.

`npm run build` generates the files required for the Mendix component and copies them to the corresponding directory in the existing Mendix project. After the component is updated, press `F4` in Mendix IDE to update the status of the Mendix IDE, otherwise the old custom component will still be used. For testing purposes, you can use this command.

The difference between `npm run dev` and `npm run build` is that `dev` has file monitoring and will trigger synchronization if there are any changes, while `build` only executes once.

### 7. Switch to Mendix IDE and drag the PDFViewer Mendix custom component onto the interface.

Press `F4`.

Double-click `Home_Web` in the left panel.

In the right panel, find the Foxit PDFViewer in the `Add-ons` group at the bottom, and drag it to the middle interface.

In the middle interface, you can switch to structure mode to see where you placed the component.

Double-click the component you just dragged in, fill in the licenseSN, licenseKey, and URL, then click `OK`.

Press `Ctrl+S` to save your changes.

### 8. Preview and test the publication.

Press `F5` to update and publish your application.

In the top-left menu bar, select `Run - Responsive Web` to view your current Mendix project in a browser.
