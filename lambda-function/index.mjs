import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "stream";

const s3Client = new S3Client({ region: "us-west-2" }); // Adjust the region as needed

const BUCKET_NAME = "my-reviews-bucket"; // Replace with your bucket name
const FILE_KEY = "reviews.json";        // Replace with your file key

// Helper function to convert a Readable stream to a string
const streamToString = async (stream) => {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf-8");
};

export const handler = async (event) => {
  try {
    // Parse the incoming review data
    const newReview = JSON.parse(event.body);
    console.log("New review received:", newReview);

    // Fetch the existing reviews from the S3 bucket
    const getObjectCommand = new GetObjectCommand({ Bucket: BUCKET_NAME, Key: FILE_KEY });
    const data = await s3Client.send(getObjectCommand);
    const fileContents = await streamToString(data.Body);
    const reviews = JSON.parse(fileContents);

    // Add the new review
    reviews.push(newReview);

    // Save the updated reviews back to the S3 bucket
    const putObjectCommand = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: FILE_KEY,
      Body: JSON.stringify(reviews, null, 2),
      ContentType: "application/json",
    });
    await s3Client.send(putObjectCommand);
    console.log("Review added successfully to S3.");

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Review added successfully!" }),
    };
  } catch (error) {
    console.error("Error processing request:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to update reviews.",
        error: error.message,
      }),
    };
  }
};
