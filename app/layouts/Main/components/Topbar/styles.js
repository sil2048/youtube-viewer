import commons from 'assets/styles/jss/commons';

const styles = {
  header: {
    boxShadow: 'none',
    background: commons.colors.blue,
    color: '#fff',
    width: '100%',
    float: 'left',
  },
  logo: {
    float: 'left',
    background: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  topRight: {
    float: 'right',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    padding: '10px 20px',
    margin: 10,
    borderRadius: 5,
    background: commons.colors.darkBlueMore,
    color: '#fff',
    border: '0',
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%',
  },
  title: {
    marginLeft: 5,
  },
  menuButton: {
    marginLeft: '-4px',
  },
  notificationsButton: {
    marginLeft: 'auto',
  },
};

export default styles;
