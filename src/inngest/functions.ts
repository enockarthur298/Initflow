import { inngest } from "./client";
import { Agent, gemini, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event}) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are an expert nextjs developer.  You write readable, concise code.",
      model: gemini({ model: "gemini-2.0-flash",apiKey:process.env.GEMINI_API_KEY }),
    });
    const { output } = await codeAgent.run(
      'Write this code: ' + event.data.value,
    );
    console.log(output);
    // [{ role: 'assistant', content: 'function removeUnecessaryWhitespace(...' }]
   
    return {output};
  },
);
