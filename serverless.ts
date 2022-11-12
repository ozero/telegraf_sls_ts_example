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
    runtime: 'nodejs16.x',
    architecture: 'arm64',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      BOT_TOKEN: "${file(./.env.${opt:stage, 'dev'}.json):BOT_TOKEN, ''}",
    },
  },
  layers: {
    aws_sdk_node16_arm64: {
      path: "../aws-sdk-layer/nodejs",
      compatibleRuntimes: ['nodejs16.x'],
      compatibleArchitectures: ['arm64']
    } 
  },
  // import the function via paths
  functions: { webhook },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node16',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
