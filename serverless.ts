import type { AWS } from '@serverless/typescript';

import webhook from '@functions/webhook';

const serverlessConfiguration: AWS = {
  service: 'telegraf-sls-ts-example',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    stage: "${opt:stage, 'dev'}", // # dev for fallback, or "production"
    region: 'ap-northeast-1',
    profile: 'default',  
    runtime: 'nodejs14.x',
    architecture: 'arm64',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      BOT_TOKEN: "${file(./serverless-env-${opt:stage, 'dev'}.json):BOT_TOKEN, ''}",
      BOT_HOOK_PATH: "${file(./serverless-env-${opt:stage, 'dev'}.json):BOT_HOOK_PATH, ''}",  
    },
  },
  // import the function via paths
  functions: { webhook },
  package: { individually: true },
  // layers: {
  //   nodeAwsSdk: {
  //     path: "../aws-sdk-layer/nodejs", //# required, path to layer contents on disk
  //     compatibleRuntimes: [//# optional, a list of runtimes this layer is compatible with
  //       'nodejs14.x'
  //     ],
  //     compatibleArchitectures: [ //# optional, a list of architectures this layer is compatible with
  //       'arm64'
  //     ]
  //   } 
  // },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
