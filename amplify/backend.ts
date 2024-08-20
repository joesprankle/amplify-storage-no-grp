import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { storage } from './storage/resource.js';

const backend = defineBackend({
  auth,
  data,
  storage
});



backend.addOutput({
  storage: {
    aws_region: "us-east-1.",
    bucket_name: "tech-summit-amp"
  },
});