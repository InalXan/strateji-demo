tailwind.config = {
    theme: {
      extend: {
        dropShadow: {
          'shadowLight': '35px 35px 35px rgba(255, 255, 255, 0.2)'
      },
        colors: {
          primary: '#F77E00',
          second: '#fff',
          danger: 'crimson',
          success: 'green',
          shadow: 'rgba(0,0,0,0.3)'
        },
        fontSize: {
          textLg: "clamp(2rem, 5vw, 3rem)",
          textMd: "clamp(1rem, 1vw, 2rem)",
          textSm: "clamp(0.5rem, 1vw, 1rem)",
        }
      }
    }
  }