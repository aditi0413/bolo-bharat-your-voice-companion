# Bolo Bharat - Voice-First PWA for Rural India 🎙️

**गाँव और कस्बों के लिए आवाज़ आधारित साथी**

A Progressive Web App (PWA) designed to bridge the digital divide in rural India by providing voice-based access to essential information about government schemes, farming, weather, health awareness, and digital literacy in Hindi and regional languages.

---

## 🌟 Features

### Core Functionality
- **Voice Input**: Record questions using the MediaRecorder API
- **Simple Hindi Interface**: Large buttons, clear labels, high contrast for accessibility
- **Multiple Categories**:
  - 🏛️ Government Schemes (सरकारी योजनाएं)
  - 🌾 Farming Information (खेती की जानकारी)
  - 🌤️ Weather Tips (मौसम की जानकारी)
  - ❤️ Health Awareness (स्वास्थ्य सुझाव)
  - 📱 Digital Literacy (डिजिटल मदद)

### Technical Features
- Progressive Web App (installable on mobile devices)
- Offline support with service workers
- Mobile-first responsive design
- Voice recording with native MediaRecorder API
- Mock data for all categories (ready for backend integration)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd bolo-bharat

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
bolo-bharat/
├── src/
│   ├── pages/              # All page components
│   │   ├── Home.tsx        # Main page with voice recorder
│   │   ├── Schemes.tsx     # Government schemes
│   │   ├── Farming.tsx     # Farming information
│   │   ├── Weather.tsx     # Weather tips
│   │   ├── Health.tsx      # Health awareness
│   │   ├── DigitalHelp.tsx # Digital literacy
│   │   ├── About.tsx       # About the app
│   │   └── Help.tsx        # Help and support
│   │
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # App header
│   │   ├── BottomNav.tsx   # Mobile navigation
│   │   ├── TopicCard.tsx   # Generic card component
│   │   ├── VoiceRecorder.tsx  # Voice recording component
│   │   └── ResponseCard.tsx   # Q&A display component
│   │
│   ├── data/              # Mock JSON data
│   │   ├── schemes.json    # Government schemes data
│   │   ├── farming.json    # Farming tips
│   │   ├── weather_tips.json  # Weather guidance
│   │   ├── health_tips.json   # Health information
│   │   └── digital_help.json  # Digital literacy content
│   │
│   ├── services/          # API service layer
│   │   └── api.ts         # Placeholder API functions
│   │
│   └── assets/            # Images and media
│       └── hero-image.jpg
│
├── public/                # Static assets
│   ├── icon-192.png       # PWA icon (192x192)
│   ├── icon-512.png       # PWA icon (512x512)
│   └── manifest.json      # PWA manifest
│
└── README_BOLO_BHARAT.md  # This file
```

---

## 🎨 Design System

The app uses a warm, culturally-appropriate color palette:

- **Primary (Saffron Orange)**: `hsl(25, 95%, 53%)` - Represents India, warmth, energy
- **Secondary (Green)**: `hsl(142, 71%, 45%)` - Agriculture, growth, prosperity  
- **Accent (Blue)**: `hsl(217, 91%, 60%)` - Trust, government, reliability
- **Background**: Warm cream/off-white for comfort
- **Typography**: Large, accessible fonts (system fonts)

### Design Principles
1. **Mobile-First**: Optimized for smartphones
2. **High Contrast**: Easy to read in bright sunlight
3. **Large Touch Targets**: Buttons are 44x44px minimum
4. **Simple Language**: Short sentences, common Hindi words
5. **Visual Hierarchy**: Clear headings, sections, and icons

---

## 🔌 Backend Integration Guide

Currently, the app uses mock data. Here's how to integrate a real backend:

### 1. Speech-to-Text (STT)
Replace `uploadAudio()` in `src/services/api.ts`:

```typescript
export async function uploadAudio(formData: FormData) {
  const response = await axios.post(
    'https://your-backend.com/api/stt',
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' }
    }
  );
  return response.data; // { transcript: string }
}
```

**Recommended APIs:**
- Google Cloud Speech-to-Text
- Whisper AI (OpenAI)
- Azure Speech Services
- Bhashini (Indian government STT)

### 2. Query Processing (LLM)
Replace `sendQuery()` in `src/services/api.ts`:

```typescript
export async function sendQuery(payload: { query: string }) {
  const response = await axios.post(
    'https://your-backend.com/api/query',
    payload
  );
  return response.data; // { answer: string }
}
```

**Recommended Approaches:**
- GPT-4 / GPT-3.5 (OpenAI)
- Llama 3 (Meta)
- LangChain for RAG (Retrieval Augmented Generation)
- Fine-tuned models for Hindi

### 3. Text-to-Speech (TTS)
Replace `getTTS()` in `src/services/api.ts`:

```typescript
export async function getTTS(payload: { text: string }) {
  const response = await axios.post(
    'https://your-backend.com/api/tts',
    payload,
    { responseType: 'blob' }
  );
  const audioUrl = URL.createObjectURL(response.data);
  return { audioUrl };
}
```

**Recommended APIs:**
- Google Cloud Text-to-Speech (supports Hindi)
- Coqui TTS (open-source)
- Azure Speech Services
- ElevenLabs

### 4. Real-Time Data APIs

**Weather Data:**
- OpenWeatherMap API
- India Meteorological Department (IMD)

**Mandi Prices:**
- data.gov.in (Indian government open data)
- Agmarknet API

**Government Schemes:**
- MyGov.in APIs
- Direct Benefit Transfer (DBT) portal

---

## 📱 PWA Features

### Installation
Users can install the app on their devices:
1. Open the app in a mobile browser
2. Tap "Add to Home Screen" (browser will prompt)
3. App icon appears on home screen
4. Works offline with cached data

### Offline Support
The service worker caches:
- All static assets (JS, CSS, HTML)
- JSON data files
- Icons and images

### Customization
Edit `vite.config.ts` and `public/manifest.json` to customize:
- App name and description
- Theme colors
- Icons
- Cache strategies

---

## 🌐 Multi-Language Support (Future)

To add regional languages:

1. Create language-specific JSON files:
   ```
   src/data/
   ├── schemes_hi.json  # Hindi
   ├── schemes_bn.json  # Bengali  
   ├── schemes_mr.json  # Marathi
   └── ...
   ```

2. Use i18n library (e.g., `react-i18next`)

3. Update STT/TTS to support regional languages

---

## 🔐 Privacy & Security

- **No Personal Data Collected**: App doesn't store personal information
- **Secure HTTPS**: Use HTTPS in production
- **Environment Variables**: Store API keys in `.env` files (never commit!)
- **Content Security**: Educate users about OTP safety, phishing

---

## 🤝 Contributing

This project is designed to help rural India. Contributions are welcome!

### Areas for Improvement
- [ ] Add more regional languages (Bengali, Marathi, Tamil, Telugu)
- [ ] Integrate real STT/TTS/LLM APIs
- [ ] Add WhatsApp integration
- [ ] Create admin panel for content management
- [ ] Add user feedback mechanism
- [ ] Improve accessibility (screen readers)
- [ ] Add more categories (education, legal help)

---

## 📄 License

This project is built for social good. Feel free to use, modify, and distribute.

---

## 📞 Support

For questions or issues:
- Email: help@bolobharat.in
- Phone: 1800-XXX-XXXX (Toll Free)
- WhatsApp: +91-XXXXX-XXXXX

---

## 🙏 Acknowledgments

Built with:
- React + Vite
- Tailwind CSS
- shadcn/ui components
- Vite PWA plugin

**Mission**: Empowering rural India through voice, simplicity, and trust. 🇮🇳

---

**Jai Hind! 🇮🇳**
