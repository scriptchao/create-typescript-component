/**
 * Created by tony on 2018/10/18
 */
#!/usr/bin/env node
'use strict';
const fs = require('fs');
const { execSync, spawn } = require('child_process');
const path = require('path');
const mkdirDirname = process.argv[2];
const cwd = process.cwd();
// function isSd(){
//     return os.platform() === 'darwin' || os.platform() === 'inux';
//  }
function shouldUseYarn() {
    try {
        execSync('yarn --version', { stdio: 'ignore' });
        return true;
    } catch (e) {
        return false;
    }
}
function runSpawn(command, args){
    return new Promise((resolve, reject)=>{
        const free = spawn(command, args, { stdio: 'inherit' });
        // 捕获标准输出并将其打印到控制台
        // free.stdout.on('data', (data)=>{
        //     console.log('standard output:' + data);
        // });

        // // 捕获标准错误输出并将其打印到控制台
        // free.stderr.on('data', (data)=>{
        //     console.log('standard error output:' + data);
        // });

        free.on('close', (code)=>{
            if (code !== 0) {
                reject({
                    command: `${command} ${args.join(' ')}`,
                });
                return;
            }
            resolve();
        });
    })
}
function runInstall() {
    // return runSpawn(
    //     'cd', [mkdirDirname, '&&', 'ytnpm', 'install']
    // );
    // runSpawn('npm', ['config', 'set', 'registry','http://registry.npm.yangtuojia.com']);

    const useYarn = shouldUseYarn();

    process.chdir(mkdirDirname);

    return runSpawn(
        useYarn ? 'yarn' : 'npm' ,
        ['install']
    );
}
(async function() {
    const dirnamePath = path.join(cwd, mkdirDirname);

    try{
        !fs.existsSync(dirnamePath) &&
        await runSpawn('mkdir',[mkdirDirname]);

        await runSpawn('cp',[
            '-rf',
            path.join(__dirname, '../app/'),
            dirnamePath
        ]);
        await runInstall();
    }catch(e){
        // console.log(e)
    }
})();