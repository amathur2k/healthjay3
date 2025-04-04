// Example usage of the LLM service functions
const { callLLM, analyzeSentiment } = require('./llmService');

async function main() {
  try {
    // Example 1: Generate content with LLM
    console.log("\n===== EXAMPLE 1: GENERATING CONTENT =====\n");
    const prompt = "Explain the benefits of artificial intelligence in healthcare in 3 sentences";
    
    console.log("Sending prompt to Gemini 2.0...");
    const response = await callLLM(prompt);
    
    console.log("\nResponse from LLM:");
    console.log(response);

    // Example 2: Analyze sentiment
    console.log("\n\n===== EXAMPLE 2: SENTIMENT ANALYSIS =====\n");
    const textToAnalyze = "The new product exceeded all my expectations. It's incredibly user-friendly and solved my problem immediately. I'm thrilled with my purchase!";
    
    console.log("Text to analyze:");
    console.log(textToAnalyze);
    console.log("\nAnalyzing sentiment...");
    
    const sentimentResult = await analyzeSentiment(textToAnalyze);
    
    console.log("\nSentiment Analysis Result:");
    console.log(JSON.stringify(sentimentResult, null, 2));

    // Example 3: Analyze negative sentiment
    console.log("\n\n===== EXAMPLE 3: NEGATIVE SENTIMENT ANALYSIS =====\n");
    const negativeText = "This service was terrible. I waited for hours and the staff was rude. I will never use this company again.";
    
    console.log("Text to analyze:");
    console.log(negativeText);
    console.log("\nAnalyzing sentiment...");
    
    const negativeSentiment = await analyzeSentiment(negativeText);
    
    console.log("\nSentiment Analysis Result:");
    console.log(JSON.stringify(negativeSentiment, null, 2));
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

main();
