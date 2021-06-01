const commons = {
  colors: {
    white: '#fff',
    blue: '#0596de',
    green: '#15c271',
    red: 'red',
    orange: '#FF9A40',
    yellow: '#FFEB54',
    softDark: '#6d6d6d',
    dark: '#444',
    darkGray: '#888',
    gray: '#ddd',
    softGray: '#eee',
    darkBlue: '#097bb3',
    darkBlueMore: '#026696',
    lightBlue: '#d0efff',
    grayBlue: '#5f93ad',
    warningDark: '#f9901c',
    error: '#F06292',
    success: '#15c271',
    warning: '#F9A825',
  },
  effects: {
    thinShadow: '0 1px 1px rgba(0,0,0,0.2)',
    softShadow: '1px 1px 1px rgba(0,0,0,0.2)',
  },
  // usage: commons.button('red', { fontSize:'1em' })
  button: (color, props = {}) => ({
    padding: '5px 10px',
    borderRadius: 4,
    color: color === 'gray' ? commons.colors.dark : commons.colors.white,
    backgroundColor: commons.colors[color],
    ...props,
  }),
  // usage: commons.button('left')
  iconButton: (position, props = {}) => ({
    marginLeft: position === 'right' ? 0 : 5,
    marginRight: position === 'left' ? 5 : 0,
    display: 'flex',
    ...props,
  }),
};

export default commons;

export const MENU_WIDTH = 300;
