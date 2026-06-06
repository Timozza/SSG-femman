import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/afs-chat", async (req, res) => {
  try {
    const { messages } = req.body ?? {};
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "messages måste vara en array" });
    }

    const input = messages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    const response = await client.responses.create({
      model: "gpt-5.4",
      input,
    });

    res.json({
      message: response.output_text || "Inget svar mottaget.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internt serverfel" });
  }
});

app.listen(3000, () => {
  console.log("Backend kör på http://localhost:3000");
});
