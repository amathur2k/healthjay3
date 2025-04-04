// Example usage of the callLLM function
const { callLLM } = require('./llmService');

async function main() {
  try {
    // Example prompt
    const prompt = "Explain the benefits of artificial intelligence in healthcare";
    
    console.log("Sending prompt to Gemini 2.0 Pro...");
    const response = await callLLM(prompt);
    
    console.log("\nResponse from LLM:");
    console.log(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

main();
