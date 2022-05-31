module.exports = {
  storybookUrl: "storybook-static",
  generateOnly:true,
  shotConcurrency: 10,
  failOnDifference:true,
  lostPixelUrl: "https://lp-d.ngrok.io/api/callback",
  lostPixelProjectId: "cl2pvu5ei0082y6ybz477rthh",
  ciBuildId: process.env.GITHUB_RUN_ID,
  ciBuildNumber: process.env.GITHUB_RUN_NUMBER,
  repository: process.env.REPOSITORY,
  commitRef: process.env.GITHUB_REF,
  commitRefName: process.env.GITHUB_REF_NAME,
  commitHash: process.env.COMMIT_HASH,

  s3: {
    endPoint: "ams3.digitaloceanspaces.com",
    accessKey: process.env.S3_ACCESS_KEY,
    secretKey: process.env.S3_SECRET_KEY,
    bucketName: "lost-pixel-dimitri-development",
  },

};
