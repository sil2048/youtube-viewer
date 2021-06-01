  
# React source base template (Use React Boilerplate). Fast implement, good performance, best practices.

Refactor and add more features by **Sil**, contact: **hieu.ht2048@gmail.com**

## Features

-   Muti-languages.
    
-   Redux, Redux Saga Injection.

-   Basic authentication ( user: *admin@email.com* password: admin  ).
    
-   SEO with ```React Helmet```
    
-   Implemented Reselect, Immer.
    
-   In-app notification with  `react-toastify`

-   Sass and JSS supported.
  
-   Component Generator ( Supported both functional component and class component).

-   Eslint and Prettier supported

-   Best practices React source base structure use [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate) and more implementations.

## Structure

### - Root/app
 - **assets**
	 - **images**
	 - **icons**
	 - **styles**
			-	*Common style sheet files (Included the JSS and SCSS files)*
	- ...
- **components** 
	- *Common components (Loading, Buttons, H1, H2...)*
- **configs**
	- *Common configs*
- **containers**
	- *Main Screens/ Main Views (App, Home, Login, Signup, Production...)*
- **layout**
	- *The wrapped components (Sidebar, Header, Footer...)*  
- **utils**
	- *Contain all of the utils file*
- **translations**
	- *Default languages files*
- ...

#### - app/containers/YourComponent
 - **YourComponent**
	 - **services**
		 - `index.js`
		 - `api.js`
		 - `actions.js`
		 - `consts.js`
		 - `initialState.js`
		 - `reducer.js`
		 - `saga.js`
		 - `selectors.js`
		 - ...
	 - **styles** *(jss)*
		 - `index.js`
		 - `SubComponent.js`
		 - ...
 	 - `index.js`
	 - `SubComponent.js`
	 - ...


## Quick start

1. Make sure that you have Node.js v8.15.1 and npm v5 or above installed.

2. Clone this repo using `git clone https://github.com/hieuht2048/react-source-code-tpl.git <YOUR_PROJECT_NAME>`

3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br  />

4. Run `npm install` or `yarn install` in order to install dependencies and clean the git repo.<br  />

_At this point you can run `npm start` or `yarn start` to see the example app at `http://localhost:3000`._

  ### - Create new Component
  - **New container** : `npm run generate container`
  - **New Component**: `npm run generate component`

## Saga & Redux injection
- **For Class Component:** 
```JS

import  React  from  'react';
import { connect } from  'react-redux';
import { compose } from  'redux';
...
import { useInjectSaga } from  'utils/injectSaga';
import { useInjectReducer } from  'utils/injectReducer';
import { RESTART_ON_REMOUNT } from  'utils/constants';
import  { reducer, saga, key, ... } from  './services';
...
class  YourComponent  extends  React.Component {
...
}
...
const  withConnect  =  connect(
	mapStateToProps,
	mapDispatchToProps
);
const  withReducer  =  useInjectReducer({ key, reducer });
const  withSaga  =  useInjectSaga({ key, saga, mode: RESTART_ON_REMOUNT });
export  default  compose(
	withReducer,
	withSaga,
	withConnect
)(YourComponent);

```

- **For Functional Component:** 
```JS

import  React  from  'react';
import { connect } from  'react-redux';
import { compose } from  'redux';
...
import { useInjectSaga } from  'utils/injectSaga';
import { useInjectReducer } from  'utils/injectReducer';
import { RESTART_ON_REMOUNT } from  'utils/constants';
import  { reducer, saga, key, ... } from  './services';
...
function  YourComponent(props) {
	useInjectReducer({ key, reducer });
	useInjectSaga({ key, saga, mode:  RESTART_ON_REMOUNT });
...
}
...
const  withConnect  =  connect(
	mapStateToProps,
	mapDispatchToProps
);
export  default  compose(
	withConnect
)(YourComponent);

```

With above codes, we created the new `saga.js` and `reducer.js` at each component and inject them into main JS file of the component. So we don't need to initiation the new saga or reducer in anywhere.

### Note: 

A `mode` argument can be one of three constants (import them from `utils/constants`):

- `DAEMON` — (default value) - starts a saga on component mount and never cancels it or starts again;
- `RESTART_ON_REMOUNT` — starts a saga when a component is being mounted
  and cancels with `task.cancel()` on component un-mount for improved performance;
- `ONCE_TILL_UNMOUNT` — behaves like `RESTART_ON_REMOUNT` but never runs the saga again.

## More documentation

-  [**The Hitchhiker's Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.

-  [Overview](docs/general): A short overview of the included tools

-  [Commands](docs/general/commands.md): Getting the most out of this boilerplate

-  [Testing](docs/testing): How to work with the built-in test harness

-  [Styling](docs/css): How to work with the CSS tooling

-  [Your app](docs/js): Supercharging your app with Routing, Redux, simple

asynchronicity helpers, etc.

-  [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.

