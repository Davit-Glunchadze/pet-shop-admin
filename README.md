# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# Pet Shop Admin Panel

პროექტი მოიცავს React Admin Panel-ს შინაური ცხოველების კატეგორიებისა და სიების სამართავად.

---
 ტექნოლოგიები

- React + Vite
- TypeScript
- Redux Toolkit / Redux Thunk
- Styled-components
- json-server (Mock Backend)
- CSS Modules / Styled UI

---

## ინსტალაცია და გაშვება

bash
# 1. დაკლონე პროექტი
git clone <რეპოს_ბმული>
cd pet-shop-admin

# 2. დააინსტალე ყველა პაკეტი
npm install

# 3. აუცილებელი dev პაკეტების ინსტალაცაია (ერთხელ)
npm install redux react-redux @reduxjs/toolkit redux-thunk styled-components
npm install json-server concurrently --save-dev
npm install --save-dev @types/react-router-dom

# ⬅️ json-server გაშვება (Mock Backend)
npm run dev-server

# ➡️ სხვა ტერმინალში frontend
npm run dev  

ან ორივეს ერთად გაშვება >>   npm run start


json >>> "scripts": {
  "dev": "vite",
  "dev-server": "json-server db.json --port 5001",
  "start": "concurrently \"npm run dev-server\" \"npm run dev\""
}


სერვერი>>>> http://localhost:5001
