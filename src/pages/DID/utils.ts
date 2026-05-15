import axios from "axios";

const url = 'https://api.d-id.com/talks';
const apiKey = import.meta.env.VITE_DID_API_KEY;
const didAuth = { username: apiKey, password: "" } as const;

export const generateVideo = async (prompt: string) => {
  prompt = 'Hello, my name is Lusine. Experienced Front-End Engineer with 7 years of expertise in designing and developing modern web applications';
  const { data: created } = await axios.post<{
    id: string;
    status: string;
  }>(
    url,
    {
      source_url:
        "https://i.ibb.co/R4y2LSXP/Chat-GPT-Image-May-15-2026-05-39-28-PM.png",
      script: {
        type: "text",
        input: prompt || "",
        provider: {
          type: "microsoft",
          voice_id: "en-US-AvaMultilingualNeural",
        },
      },
    },
    {
      auth: didAuth,
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!created.id) {
    throw new Error("Failed to create talk");
  }
  const talkId = created.id;
  let resultUrl = "";
  let status = "";

  while (status !== "done") {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { data: talk } = await axios.get<{
      id: string;
      status: string;
      result_url?: string;
    }>(`https://api.d-id.com/talks/${encodeURIComponent(talkId)}`, {
      auth: didAuth,
    });

    status = talk.status;

    if (status === "done") {
      resultUrl = talk.result_url || "";
      break;
    }

    if (status === "error") {
      throw new Error("Video generation failed");
    }
  }
  
  return resultUrl;
}
