// Import required dependencies
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the API with your API key
// Note: You'll need to create a .env file with your API key as GOOGLE_API_KEY
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

/**
 * Calls the Gemini 2.0 Pro LLM with a prompt and returns the response text
 * 
 * @param {string} prompt - The text prompt to send to the LLM
 * @returns {Promise<string>} - The text response from the LLM
 */
async function callLLM(prompt) {
  try {
    // Get the Gemini 2.0 Pro model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite", // Using Gemini 2.0 Pro model
    });

    // Generate content with default parameters
    const result = await model.generateContent(prompt);
    const response = result.response;
    
    // Return the text from the response
    return response.text();
  } catch (error) {
    console.error('Error calling LLM:', error);
    throw error;
  }
}

// Example usage
async function example() {
  try {
    const response = await callLLM("Explain quantum computing in simple terms.");
    console.log("LLM Response:", response);
  } catch (error) {
    console.error("Failed to get response:", error);
  }
}

/**
 * Analyzes the sentiment of the provided text using Gemini 2.0
 * 
 * @param {string} text - The text to analyze for sentiment
 * @returns {Promise<Object>} - An object containing sentiment analysis results
 */
async function analyzeSentiment(text) {
  try {
    // Get the Gemini 2.0 Pro model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
    });

    // Create a prompt that asks for sentiment analysis
    const prompt = `
      Analyze the sentiment of the following text and provide a structured response.
      Determine if the sentiment is positive, negative, or neutral.
      Also provide a confidence score (0-1) and identify key emotional tones.
      Format the response as a JSON object with the following structure:
      {
        "sentiment": "positive|negative|neutral",
        "confidence": 0.XX,
        "emotionalTones": ["tone1", "tone2", ...],
        "summary": "A brief one-sentence summary of the sentiment analysis"
      }

      Text to analyze: "${text}"
      
      JSON response:
    `;

    // Generate content with the sentiment analysis prompt
    const result = await model.generateContent(prompt);
    const response = result.response;
    const responseText = response.text();
    
    // Parse the JSON response
    try {
      // Find JSON in the response (in case the model adds extra text)
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      // If no JSON pattern found, try parsing the whole response
      return JSON.parse(responseText);
    } catch (parseError) {
      console.error('Error parsing sentiment response:', parseError);
      // Return a simplified response with the raw text
      return {
        sentiment: 'unknown',
        confidence: 0,
        emotionalTones: [],
        summary: 'Failed to parse sentiment',
        rawResponse: responseText
      };
    }
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    throw error;
  }
}

// Example usage of sentiment analysis
async function sentimentExample() {
  try {
    const sentiment = await analyzeSentiment("I'm really happy with the excellent service I received today!");
    console.log("Sentiment Analysis:", sentiment);
  } catch (error) {
    console.error("Failed to analyze sentiment:", error);
  }
}

// Export the functions for use in other modules
module.exports = { callLLM, analyzeSentiment };

// Uncomment to run the example
// example();
