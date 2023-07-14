import { cp } from "shelljs";
import command from "rollup-plugin-command";
import { join, dirname } from "path";
import json from './package.json'
import { existsSync, mkdirSync } from 'fs'

export default async args => {
    args.configDefaultConfig[args.configDefaultConfig.length - 1].plugins.push(command([
        () => {
            let filePath = '@foxitsoftware/foxit-pdf-sdk-for-web-library'
            let copyTo = 'theme/web/resources/@foxitsoftware/'
            if (!existsSync(join(json.config.projectPath, 'theme/web'))) {
                copyTo = 'theme/resources/@foxitsoftware/'
            }
            copyTo = join(json.config.projectPath, copyTo)

            mkdirSync(copyTo, { recursive: true });
            cp(
                '-R',
                join(__dirname, "node_modules/", filePath),
                copyTo
                );
        }
    ]))

    return args.configDefaultConfig;
}