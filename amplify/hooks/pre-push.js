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
  const { stdout, stderr } = await exec(`cd ${path} && aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com &&
   docker build -t $ECR_REPO_NAME:spiderEnginesLanguage-latest . && docker tag $ECR_REPO_NAME:spiderEnginesLanguage-latest $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/$ECR_REPO_NAME:spiderEnginesLanguage-latest && aws ecr batch-delete-image  --repository-name $ECR_REPO_NAME --image-ids imageTag=spiderEnginesLanguage-latest && docker push $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/$ECR_REPO_NAME:spiderEnginesLanguage-latest`);
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}

/**
 * @param data { { amplify: { environment: { envName: string, projectPath: string, defaultEditor: string }, command: string, subCommand: string, argv: string[] } } }
 * @param error { { message: string, stack: string } }
 */
const hookHandler = async (data, error) => {
  // const { envName } = data?.amplify.environment
  console.log("process.env['USER_BRANCH']", process.env['USER_BRANCH'])
  if (!process.env['USER_BRANCH']) {
    let ecrRepo = process.env.ECR_REPO_NAME
    await docker(path.join(__dirname, '../backend/custom/spiderLanguage/src/'), ecrRepo) 
  } else {
    console.log('removed container build because its unsupported')
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
