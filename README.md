# ✨ Happy 2026

A front-end study project designed to celebrate the New Year transition, blending elegant design, reflection on the past, and aspirations for the future. This project demonstrates the use of **modern React** with **TypeScript** and **Tailwind CSS**.

## 🎨 About the Project

This is an interactive Web App that presents a visual and thematic transition between the years 2025 and 2026. The goal is to create a "smooth" user experience with a focus on typography, spacing, and micro-interactions.

### Key Features

* **Thematic Cards:** Displays distinct messages for reflection (2025) and aspiration (2026) with unique designs.
* **GitHub API Integration:** The footer dynamically fetches and displays the developer's profile (avatar, bio, repository count).
* **Modern UI:** Utilizes blur effects (`backdrop-blur`), subtle gradients, and entrance animations.
* **Responsiveness:** Fully adaptive layout for mobile and desktop devices using Grid and Flexbox.

## 🚀 Tech Stack

The project was built using a modern and lightweight stack:

* **[React 19](https://react.dev/):** Main library for building the user interface.
* **[TypeScript](https://www.typescriptlang.org/):** For static typing and code safety.
* **[Vite](https://vitejs.dev/):** Ultra-fast build tool and development server.
* **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework (via CDN for rapid prototyping).
* **[Lucide React](https://lucide.dev/):** Lightweight and consistent icon library.

## 📂 Project Structure

```text
├── src/
│   ├── components/      # Reusable components (Card, Footer, Icon)
│   ├── services/        # API integration logic (GitHub)
│   ├── types.ts         # TypeScript type definitions (Interfaces)
│   ├── constants.ts     # Static data (card texts)
│   ├── App.tsx          # Main component and layout
│   └── index.tsx        # Application entry point
├── index.html           # Tailwind CDN configuration and fonts
└── vite.config.ts       # Vite configuration

```

## 📦 How to Run

Follow the steps below to run the project on your local machine:

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/happy-2026.git
cd happy-2026

```


2. **Install dependencies:**
```bash
npm install
# or
yarn install

```


3. **Start the development server:**
```bash
npm run dev

```


4. **Access in browser:**
Open `http://localhost:3000` (or the port indicated in your terminal).

## ⚙️ Customization

To adapt this project for your own use:

1. **Change GitHub User:**
Go to `src/App.tsx` and find the line:
```typescript
const userData = await fetchGitHubUser('rickferrdev'); // Replace 'rickferrdev' with your username

```


2. **Change Messages:**
Edit the `src/constants.ts` file to modify the titles, messages, and icons for the 2025 and 2026 cards.

## 🤝 Contribution

Contributions are welcome! Feel free to open issues or pull requests to improve the design, add new animations, or suggest features.

## 📝 License

This project is licensed under the MIT License.

---

<div align="center">
Developed with 💙 by <a href="[https://github.com/rickferrdev](https://www.google.com/search?q=https://github.com/rickferrdev)">RickFerrDev</a>
</div>
