import commons from 'assets/styles/jss/commons';

export default {
  root: {
    backgroundColor: '#f9f9f9',
    height: '100vh',
  },
  grid: {
    height: '100%',
  },
  quoteWrapper: {
    '& @media only screen and (maxWidth: 1024px)': {
      display: 'none',
    },
  },
  quote: {
    backgroundColor: commons.colors.blue,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/sign_up_1.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px',
  },
  quoteText: {
    color: '#fff',
    fontWeight: 300,
  },
  name: {
    marginTop: 15,
    color: '#fff',
  },
  bio: {
    color: '#fff',
  },
  contentWrapper: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 25,
    paddingBototm: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  backButton: {},
  logoImage: {
    marginLeft: 20,
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& @media only screen and (maxWidth: 1024px)': {
      justifyContent: 'center',
    },
  },
  form: {
    paddingLeft: '100px',
    paddingRight: '100px',
    paddingBottom: '125px',
    flexBasis: '700px',
    '& @media only screen and (maxWidth: 728px)': {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  title: {
    marginTop: 15,
    textAlign: 'center',
    marginBottom: '25px',
    textTransform: 'uppercase',
    color: commons.colors.darkGray,
  },
  avatar: {
    textAlign: 'center',
  },
  subtitle: {
    color: commons.colors.red,
    marginTop: 4,
  },
  sugestion: {
    color: commons.colors.red,
    marginTop: 10,
    textAlign: 'center',
  },
  fields: {
    marginTop: 10,
  },
  textField: {
    width: '100%',
    '& + & ': {
      marginTop: 10,
    },
  },
  policy: {
    display: 'flex',
    alignItems: 'center',
  },
  policyCheckbox: {
    marginLeft: '-14px',
  },
  policyText: {
    display: 'inline',
    color: commons.colors.red,
  },
  policyUrl: {
    color: commons.colors.blue,
    '&:hover': {
      cursor: 'pointer',
      color: commons.colors.darkBlue,
    },
  },
  progress: {
    display: 'block',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  signInButton: {
    marginTop: 10,
    width: '100%',
  },
  fieldError: {
    color: commons.colors.red,
    marginBottom: 10,
    marginTop: 10,
  },
  submitError: {
    color: commons.colors.red,
    alignText: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
};
