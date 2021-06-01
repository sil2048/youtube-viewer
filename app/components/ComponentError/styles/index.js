import commons from 'assets/styles/jss/commons';

const styles = {
  root: {
    padding: 20,
    background: '#fff',
    borderRadius: 5,
    boxShadow: commons.effects.softShadow,
  },
  blueButton: commons.button('blue'),
  iconButton: commons.iconButton('left'),
  error: {
    minHeight: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  errorContent: {
    fontSize: '60px',
    padding: '20px',
    color: '#f92d46',
  },
  arrorActions: {},
};

export default styles;
