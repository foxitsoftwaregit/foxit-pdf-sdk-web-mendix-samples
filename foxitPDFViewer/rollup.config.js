import { cp } from "shelljs";
import command from "rollup-plugin-command";
import { join, dirname } from "path";
import json from './package.json'
import { existsSync, mkdirSync } from 'fs'

export default async args => {
    args.configDefaultConfig[0].plugins.push(command([
        () => {
            let filePath = '@foxitsoftware/foxit-pdf-sdk-for-web-library'
            let copyTo = join(json.config.projectPath, 'deployment/web/resources/@foxitsoftware/')
            createDir(copyTo)
            cp(
                '-R',
                join(__dirname, "node_modules/", filePath),
                copyTo
                );
        }
    ]))

    return args.configDefaultConfig;
}

function createDir(dirPath) {
    if (!existsSync(dirPath)) {
        let parentDir = dirname(dirPath);
        if (!existsSync(parentDir)) {
            createDir(parentDir);
        }
        mkdirSync(dirPath);
    }
}