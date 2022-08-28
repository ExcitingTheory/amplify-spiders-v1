/**
 * This is a sample hook script created by Amplify CLI.
 * To start using this pre-push hook please change the filename:
 * pre-push.js.sample  ->  pre-push.js
 *
 * learn more: https://docs.amplify.aws/cli/usage/command-hooks
 */

 const util = require('node:util');
 const path = require('path');
 const exec = util.promisify(require('node:child_process').exec);
 
 async function docker(path, ecrRepo) {
   // TODO make multi region
  const { stdout, stderr } = await exec(`cd ${path} && aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 759854655984.dkr.ecr.us-east-1.amazonaws.com &&
   docker build -t cdk-hnb659fds-container-assets-759854655984-us-east-1:spiderEnginesLanguage-latest . && docker tag cdk-hnb659fds-container-assets-759854655984-us-east-1:spiderEnginesLanguage-latest 759854655984.dkr.ecr.us-east-1.amazonaws.com/cdk-hnb659fds-container-assets-759854655984-us-east-1:spiderEnginesLanguage-latest && docker push 759854655984.dkr.ecr.us-east-1.amazonaws.com/cdk-hnb659fds-container-assets-759854655984-us-east-1:spiderEnginesLanguage-latest`);
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}

/**
 * @param data { { amplify: { environment: { envName: string, projectPath: string, defaultEditor: string }, command: string, subCommand: string, argv: string[] } } }
 * @param error { { message: string, stack: string } }
 */
const hookHandler = async (data, error) => {
  // const { envName } = data?.amplify.environment
  const isCiCd = process.env['_CUSTOM_IMAGE'] || ''
  if (!isCiCd) {
    let ecrRepo = 'cdk-hnb659fds-container-assets-759854655984-us-east-1'
    await docker(path.join(__dirname, '../backend/custom/spiderLanguage/src/'), ecrRepo) 
  } else {
    console.log('Not building docker container, you had better pushbed your backend changes until this supports docker in docker.')
  }

};

const getParameters = async () => {
  const fs = require("fs");
  return JSON.parse(fs.readFileSync(0, { encoding: "utf8" }));
};

getParameters()
  .then((event) => hookHandler(event.data, event.error))
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  });
