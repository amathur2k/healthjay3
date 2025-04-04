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

    // Example 2: Analyze wellness survey response - Positive
    console.log("\n\n===== EXAMPLE 2: WELLNESS SURVEY - POSITIVE RESPONSE =====\n");
    const positiveWellnessResponse = "I've been feeling great this week. My energy levels are high, I'm sleeping well, and I've been able to exercise regularly. My stress levels are manageable and I've been in a good mood overall.";
    
    console.log("Survey response to analyze:");
    console.log(positiveWellnessResponse);
    console.log("\nAnalyzing wellness sentiment...");
    
    const positiveResult = await analyzeSentiment(positiveWellnessResponse);
    
    console.log("\nWellness Analysis Result:");
    console.log(JSON.stringify(positiveResult, null, 2));

    // Example 3: Analyze wellness survey response - Negative
    console.log("\n\n===== EXAMPLE 3: WELLNESS SURVEY - NEGATIVE RESPONSE =====\n");
    const negativeWellnessResponse = "I've been feeling terrible this week. I'm constantly tired, having trouble sleeping, and haven't had the energy to exercise. My stress levels are very high, and I've been feeling anxious and down most days.";
    
    console.log("Survey response to analyze:");
    console.log(negativeWellnessResponse);
    console.log("\nAnalyzing wellness sentiment...");
    
    const negativeResult = await analyzeSentiment(negativeWellnessResponse);
    
    console.log("\nWellness Analysis Result:");
    console.log(JSON.stringify(negativeResult, null, 2));

    // Example 4: Analyze wellness survey response - Mixed/Neutral
    console.log("\n\n===== EXAMPLE 4: WELLNESS SURVEY - MIXED RESPONSE =====\n");
    const mixedWellnessResponse = "My week has been okay. Some days I feel good and have energy, but other days I feel tired. My sleep has been inconsistent. I've managed to exercise twice this week. My stress levels are moderate.";
    
    console.log("Survey response to analyze:");
    console.log(mixedWellnessResponse);
    console.log("\nAnalyzing wellness sentiment...");
    
    const mixedResult = await analyzeSentiment(mixedWellnessResponse);
    
    console.log("\nWellness Analysis Result:");
    console.log(JSON.stringify(mixedResult, null, 2));
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

main();
