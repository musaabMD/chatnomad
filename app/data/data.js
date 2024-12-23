// data/data.js

export const travelData = {
    channels: [
      {
        country: "mexico",
        emoji: "🇲🇽",
        description: "Explore Mexico's vibrant culture and destinations",
        cities: [
          { name: "Cancun", activeUsers: 156 },
          { name: "Mexico City", activeUsers: 234 },
          { name: "Tulum", activeUsers: 89 },
          { name: "Guadalajara", activeUsers: 145 },
          { name: "Oaxaca", activeUsers: 78 },
          { name: "Cancun", activeUsers: 156 },
          { name: "Mexico City", activeUsers: 234 },
          { name: "Tulum", activeUsers: 89 },
          { name: "Guadalajara", activeUsers: 145 },
          { name: "Oaxaca", activeUsers: 78 },
          { name: "Cancun", activeUsers: 156 },
          { name: "Mexico City", activeUsers: 234 },
          { name: "Tulum", activeUsers: 89 },
          { name: "Guadalajara", activeUsers: 145 },
          { name: "Oaxaca", activeUsers: 78 }
        ],
        unread: true,
        temperature: "25°C",
        activeUsers: 324
      },
      {
        country: "spain",
        emoji: "🇪🇸",
        description: "Discover Spain's rich history and cuisine",
        cities: [
          { name: "Barcelona", activeUsers: 432 },
          { name: "Madrid", activeUsers: 387 },
          { name: "Valencia", activeUsers: 156 },
          { name: "Seville", activeUsers: 198 },
          { name: "Granada", activeUsers: 167 }
        ],
        unread: true,
        temperature: "28°C",
        activeUsers: 567
      },
      {
        country: "france",
        emoji: "🇫🇷",
        description: "Experience French culture and lifestyle",
        cities: [
          { name: "Paris", activeUsers: 567 },
          { name: "Nice", activeUsers: 234 },
          { name: "Lyon", activeUsers: 189 },
          { name: "Marseille", activeUsers: 156 },
          { name: "Bordeaux", activeUsers: 145 }
        ],
        unread: false,
        temperature: "22°C",
        activeUsers: 478
      },
      {
        country: "italy",
        emoji: "🇮🇹",
        description: "Explore Italian art, food, and history",
        cities: [
          { name: "Rome", activeUsers: 489 },
          { name: "Florence", activeUsers: 312 },
          { name: "Venice", activeUsers: 278 },
          { name: "Milan", activeUsers: 345 },
          { name: "Naples", activeUsers: 198 }
        ],
        unread: true,
        temperature: "26°C",
        activeUsers: 623
      }
    ],
    defaultMessages: [
      {
        id: 1,
        content: "Hey everyone! Just arrived in Barcelona! Any recommendations? #barcelona",
        username: "TravelBuddy",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        isVerified: true,
        role: "Travel Expert",
        joinDate: "January 2024"
      },
      {
        id: 2,
        content: "Welcome to Barcelona! The Sagrada Familia is a must-visit! #barcelona",
        username: "LocalGuide",
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        isVerified: true,
        role: "Local Guide",
        joinDate: "March 2024"
      }
    ]
  };