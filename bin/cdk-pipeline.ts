#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkPipelineStack } from '../lib/cdk-pipeline-stack';

const app = new cdk.App();
new CdkPipelineStack(app, 'CdkPipelineStack', {
  env: { account: '669039140909', region: 'us-east-2' },
});

app.synth()