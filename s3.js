import { S3 } from "@aws-sdk/client-s3";
import { config } from "dotenv";

config();

export const s3Client = new S3({
  region: process.env.S3_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
});
