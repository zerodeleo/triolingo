/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {
    fontFamily: {
      protest: ['"Protest Revolution"', "sans-serif"],
      sans: ["Montserrat", "sans-serif"],
    },
    colors: {
      custom: {
        100: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-custom-100), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-custom-100), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-custom-100))`;
        },
        200: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-custom-200), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-custom-200), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-custom-200))`;
        },
        300: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-custom-300), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-custom-300), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-custom-300))`;
        },
        400: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-custom-400), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-custom-400), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-custom-400))`;
        },
        500: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-custom-500), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-custom-500), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-custom-500))`;
        },
        600: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-custom-600), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-custom-600), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-custom-600))`;
        },
        700: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-custom-700), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-custom-700), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-custom-700))`;
        },
        800: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-custom-800), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-custom-800), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-custom-800))`;
        },
        900: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-custom-900), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-custom-900), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-custom-900))`;
        },
      },
    },
  },
};
