# LLM Caller

A simple Node.js script that provides a function to call Gemini 2.0 Pro LLM and get text responses.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Set up your API key:
   - Copy `.env.example` to `.env`
   - Replace `your_api_key_here` with your actual Google AI API key

## Usage

The main function is `callLLM`, which takes a prompt and returns the text from the LLM response.

### Example

```javascript
const { callLLM } = require('./llmService');

async function main() {
  try {
    const response = await callLLM("What is machine learning?");
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
```

## API

### callLLM(prompt)

- `prompt` (string): The text prompt to send to the LLM
- Returns: Promise<string> - The text response from the LLM

The function uses Gemini 2.0 Pro with default parameters.
