import { Request, Response } from "express";
import { run001 } from "../ai/001";
import { runSAM } from "../ai/sam";
import { runIvy } from "../ai/ivy";
import { runJeff } from "../ai/jeff";

export const executeAI = async (req: Request, res: Response) => {
  const { aiName } = req.params;
  try {
    switch (aiName) {
      case "001": await run001(); break;
      case "SAM": await runSAM(); break;
      case "Ivy": await runIvy(); break;
      case "Jeff": await runJeff(); break;
      default: return res.status(400).json({ message: "Invalid AI" });
    }
    res.json({ message: `${aiName} executed successfully!` });
  } catch (error) {
    res.status(500).json({ message: "Execution failed", error });
  }
};