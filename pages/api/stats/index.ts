import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";
import UAParser from "ua-parser-js";

const statsFilePath = path.join(process.cwd(), "public/data/stats.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { sessionId } = req.body;

  let stats;

  try {
    const fileContents = fs.readFileSync(statsFilePath, "utf8");
    stats = JSON.parse(fileContents);
  } catch (err) {
    return res.status(500).json({ message: "Error reading stats file" });
  }

  const parser = new UAParser(req.headers["user-agent"]);
  const result = parser.getResult();

  // Increment views and add visit details if sessionId is not found in the current session
  if (!sessionId) {
    stats.views += 1;

    const visitDetails = {
      date: new Date().toISOString(),
      ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
      ua: result.ua,
      device: result.device,
      browser: result.browser,
      os: result.os,
    };

    stats.visits.push(visitDetails);

    try {
      fs.writeFileSync(statsFilePath, JSON.stringify(stats, null, 2));
    } catch (err) {
      return res.status(500).json({ message: "Error writing stats file" });
    }
  }

  res.status(200).json({ message: "Success" });
}
