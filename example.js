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
    const positiveWellnessResponse = `Q: How would you rate your overall energy levels this week?
A: My energy levels have been very high this week.

Q: How has your sleep been?
A: I've been sleeping well, usually 7-8 hours without interruptions.

Q: Have you been able to exercise?
A: Yes, I've exercised 4 times this week and felt great afterward.

Q: How would you describe your stress levels?
A: My stress levels are low and manageable.

Q: How would you rate your mood?
A: I've been in a good mood most days, feeling positive and optimistic.`;
    
    console.log("Survey response to analyze:");
    console.log(positiveWellnessResponse);
    console.log("\nAnalyzing wellness sentiment...");
    
    const positiveResult = await analyzeSentiment(positiveWellnessResponse);
    
    console.log("\nWellness Analysis Result:");
    console.log(JSON.stringify(positiveResult, null, 2));

    // Example 3: Analyze wellness survey response - Negative
    console.log("\n\n===== EXAMPLE 3: WELLNESS SURVEY - NEGATIVE RESPONSE =====\n");
    const negativeWellnessResponse = `Q: How would you rate your overall energy levels this week?
A: I've been constantly tired and have very low energy.

Q: How has your sleep been?
A: I'm having trouble sleeping, waking up frequently, and feeling unrested.

Q: Have you been able to exercise?
A: No, I haven't had the energy to exercise at all this week.

Q: How would you describe your stress levels?
A: My stress levels are very high, I feel overwhelmed most days.

Q: How would you rate your mood?
A: I've been feeling anxious and down most days this week.`;
    
    console.log("Survey response to analyze:");
    console.log(negativeWellnessResponse);
    console.log("\nAnalyzing wellness sentiment...");
    
    const negativeResult = await analyzeSentiment(negativeWellnessResponse);
    
    console.log("\nWellness Analysis Result:");
    console.log(JSON.stringify(negativeResult, null, 2));

    // Example 4: Analyze wellness survey response - Mixed/Neutral
    console.log("\n\n===== EXAMPLE 4: WELLNESS SURVEY - MIXED RESPONSE =====\n");
    const mixedWellnessResponse = `Q: How would you rate your overall energy levels this week?
A: Some days I feel good and have energy, but other days I feel tired.

Q: How has your sleep been?
A: My sleep has been inconsistent - some nights good, others not so much.

Q: Have you been able to exercise?
A: I've managed to exercise twice this week, which is okay.

Q: How would you describe your stress levels?
A: My stress levels are moderate - not too high but not completely relaxed either.

Q: How would you rate your mood?
A: My mood has been up and down, but generally okay.`;
    
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
