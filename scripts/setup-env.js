import fs from "fs";
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Use __dirname to be robust to where the script is run from
const projectRoot = path.resolve(__dirname, "..");
const envPath = path.join(projectRoot, ".env");
const envExamplePath = path.join(projectRoot, ".env.example");

if (!fs.existsSync(envPath)) {
  try {
    fs.copyFileSync(envExamplePath, envPath);
    console.log("\x1b[32m%s\x1b[0m", "✅ Successfully created .env file.");
    console.log(
      "\x1b[33m%s\x1b[0m",
      "ACTION REQUIRED: Please review and update the environment variables in the newly created .env file.",
    );
  } catch (error) {
    console.error("\x1b[31m%s\x1b[0m", "Error creating .env file:", error);
  }
} else {
  console.log(
    "\x1b[34m%s\x1b[0m",
    "ℹ️ .env file already exists. Skipping creation.",
  );
}
