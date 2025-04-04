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

// Export the function for use in other modules
module.exports = { callLLM };

// Uncomment to run the example
// example();
