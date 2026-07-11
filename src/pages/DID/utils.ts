import axios from "axios";

const url = 'https://api.d-id.com/talks';
const apiKey = import.meta.env.VITE_DID_API_KEY;
const didAuth = { username: apiKey, password: "" } as const;

export const generateVideo = async (prompt: string) => {
  prompt = `Dear Hiring Manager, I am excited to apply for the Front-End Engineer position at your company. 
  I am a Front-End Engineer with over seven years of experience designing and developing modern, scalable web applications. 
  Throughout my career, I have worked extensively with React, Angular, TypeScript, and modern frontend architectures to build responsive, maintainable, and high-performing applications.

I enjoy transforming complex business requirements into intuitive user experiences while writing clean, efficient, and maintainable code. I am passionate about learning new technologies, improving development processes, and delivering solutions that provide real value to users.

Collaboration has always been an important part of my work. I have experience working closely with cross-functional teams, including designers, backend engineers, product managers, and QA engineers, to successfully deliver projects from concept to production. I value open communication, knowledge sharing, and continuous improvement.

I am eager to bring my technical expertise, problem-solving skills, and enthusiasm for frontend development to your team. I would welcome the opportunity to discuss how my experience and passion align with your organization's goals.

Thank you for your time and consideration. I look forward to hearing from you.

Sincerely,

Lusine Iskandaryan
`;
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
