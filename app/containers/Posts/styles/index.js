import commons from 'assets/styles/jss/commons';

const styles = {
  root: {
    padding: 20,
  },
  greenButtonNormal: commons.button('green', {
    boxSizing: 'border-box',
    borderRadius: '4px',
    paddingRight: 15,
    textTransform: 'lowercase',
    paddingLeft: 15,
  }),
  rowActions: {
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
  },
  detailCard: {
    padding: 20,
    margin: '20px 0',
    minHeight: 300,
    width: '100%',
    border: `1px solid ${commons.colors.lightBlue}`,
  },
};

export default styles;
