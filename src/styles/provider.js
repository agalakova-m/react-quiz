export default {
  color: {
    white: '#ffffff',
    black: '#1c0f13',
    peachy: '#FFE5D4',
    pink: '#ff00fc',
    violet: '#4100ff',
    green: '#00ff9c',
    red: '#ff0087',
    yellow: '#ffd95c',
    gray100: '#ececec',
    gray200: '#cccccc',
  },
  breakpoint: {
    desktop: '1920px',
    middleDesktop: '1440px',
    smallDesktop: '1024px',
    tablet: '1279px',
    mobile: '767px',
  },
  hexToRgba(hex, alpha = 1) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return (
        'rgba(' +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
        `,${alpha})`
      );
    }
  },
};
