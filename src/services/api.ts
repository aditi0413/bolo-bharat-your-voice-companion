// Placeholder API functions for future backend integration
// Currently using mock data, but these can be replaced with real API calls

/**
 * Upload audio recording to backend for Speech-to-Text processing
 * @param formData - FormData containing the audio blob
 * @returns Promise with transcript text
 */
export async function uploadAudio(formData: FormData): Promise<{ transcript: string }> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Mock transcript response
  return {
    transcript: "प्रधानमंत्री किसान योजना क्या है?",
  };
}

/**
 * Send user query to backend LLM for processing
 * @param payload - Object containing user query and context
 * @returns Promise with answer text
 */
export async function sendQuery(payload: {
  query: string;
  context?: string;
}): Promise<{ answer: string }> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock answer response in simple Hindi
  return {
    answer:
      "पीएम-किसान योजना के तहत किसानों को हर साल ₹6000 मिलते हैं। यह पैसा तीन बार में आता है - हर बार ₹2000। आप अपने गाँव के CSC सेंटर या तहसील में जाकर आवेदन कर सकते हैं।",
  };
}

/**
 * Get Text-to-Speech audio for answer
 * @param payload - Object containing text to convert
 * @returns Promise with audio URL
 */
export async function getTTS(payload: { text: string }): Promise<{ audioUrl: string }> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock audio URL (in production, this would be a real TTS audio file)
  return {
    audioUrl: "/audio/sample-answer.mp3",
  };
}

/**
 * Fetch weather information for a location
 * @param location - Location name or coordinates
 * @returns Promise with weather data
 */
export async function getWeather(location: string): Promise<any> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock weather data
  return {
    location,
    temperature: "28°C",
    condition: "धूप",
    forecast: "अगले 3 दिन बारिश की संभावना",
  };
}

/**
 * Fetch latest mandi prices
 * @param crop - Crop name
 * @returns Promise with price data
 */
export async function getMandiPrices(crop: string): Promise<any> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock mandi price data
  return {
    crop,
    price: "₹2500 प्रति क्विंटल",
    date: new Date().toLocaleDateString("hi-IN"),
    trend: "बढ़ रहा है",
  };
}
