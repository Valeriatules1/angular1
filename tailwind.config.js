/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        // Custom role-based colors for better consistency
        role: {
          admin: {
            50: '#eff6ff',
            100: '#dbeafe', 
            600: '#2563eb',
            900: '#1e3a8a'
          },
          manager: {
            50: '#f0fdf4',
            100: '#dcfce7',
            600: '#16a34a', 
            900: '#14532d'
          },
          employee: {
            50: '#f9fafb',
            100: '#f3f4f6',
            600: '#4b5563',
            900: '#111827'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
