module.exports = {
  storybookUrl: "storybook-static",
  shotConcurrency: 10,
  lostPixelUrl: "https://lp-d.ngrok.io/api/callback",
  lostPixelProjectId: "cl205daty03325mybgsut4fhe",
  ciBuildId: process.env.GITHUB_RUN_ID,
  ciBuildNumber: process.env.GITHUB_RUN_NUMBER,
  repository: process.env.REPOSITORY,
  commitRef: process.env.COMMIT_REF,
  commitRefName: process.env.COMMIT_REF,
  commitHash: process.env.COMMIT_HASH,

  s3: {
    endPoint: "ams3.digitaloceanspaces.com",
    accessKey: process.env.S3_ACCESS_KEY,
    secretKey: process.env.S3_SECRET_KEY,
    bucketName: "lost-pixel-dimitri-development",
  },

};
