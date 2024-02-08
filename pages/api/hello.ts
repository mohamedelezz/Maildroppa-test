import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";

interface Data {
  // Define your data structure here
  // For example:
  id: number;
  name: string;
  // Add more fields as needed
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const filePath = path.resolve("./public/data.json");
    const data = await fs.readJson(filePath);

    // Assuming your JSON file contains an array of objects
    res.status(200).json(data);
  } catch (error) {
    console.error("Error reading data:", error);
    res.status(500).json({ error: "Error reading data" });
  }
}
