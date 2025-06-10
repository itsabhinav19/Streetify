# Streetify - Empowering Street Vendors Digitally

Streetify is a web-based platform designed to bridge the gap between street vendors and customers, providing visibility to small vendors while making it easier for people to find everyday services around them.

## 🎯 Mission

To empower street vendors by providing them with digital visibility and tools to grow their business, while creating a seamless discovery experience for customers seeking local services.

## 🚀 Features

- **Geolocation System**: GPS integration, location search, radius filtering
- **Vendor Discovery**: Category-based search, color-coded map pins, quick filters
- **Advanced Vendor Profiles**: Media gallery, service menu, operating schedule
- **Customer Engagement**: Review system, loyalty program, wishlist
- **Vendor Business Tools**: Analytics dashboard, promotion creator, inventory management
- **Smart Notifications**: Location-based alerts, daily specials, performance insights
- **AI/ML Features**: Smart recommendations, image recognition, predictive analytics
- **Additional Features**: Multi-language support, accessibility features, weather integration

## 🛠 Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Leaflet/MapBox
- **AI/ML**: OpenAI API, Google Cloud Vision API, TensorFlow.js
- **APIs**: Google Maps API, Unsplash API, Weather API
- **Deployment**: Vercel/Netlify

## 🏗 Project Structure

```
streetify/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API and external service integrations
│   ├── utils/         # Helper functions and utilities
│   ├── types/         # TypeScript type definitions
│   ├── context/       # React context providers
│   ├── assets/        # Static assets
│   └── styles/        # Global styles
├── public/            # Public assets
└── tests/            # Test files
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   VITE_OPENAI_API_KEY=your_openai_api_key
   VITE_UNSPLASH_API_KEY=your_unsplash_api_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests. 