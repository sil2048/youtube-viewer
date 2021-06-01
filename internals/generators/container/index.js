/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'list',
      name: 'typeComponent',
      message: 'Do you want create the new component with?',
      choices: [
        'Class Component',
        'Function Component'
      ]
    },
    {
      when: (response) => (
        response.typeComponent === 'Function Component'
      ),
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantHeaders',
      default: false,
      message: 'Do you want headers? Enter to skip.',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/selectors/reducer tuple for this container?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: 'wantApi',
      default: true,
      message: 'Do you want an api handler file for this container?',
    },
    {
      type: 'confirm',
      name: 'wantJss',
      default: true,
      message: 'Do you want the JSS (JavaScript Style Sheets) file for this container?',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: false,
      message: 'Do you want i18n messages (i.e. will this component use text)? Enter to skip.',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load resources asynchronously? Enter to skip.',
    },
    {
      type: 'confirm',
      name: 'wantTest',
      default: false,
      message: 'Do you want to create the test files? Enter to skip.',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [];
    if(data.typeComponent==='Function Component'){
      actions.push(
        {
          type: 'add',
          path: '../../app/containers/{{properCase name}}/index.js',
          templateFile: './container/FunctionComponent.js.hbs',
          abortOnFail: true,
        }
      );
    }else{
      actions.push(
        {
          type: 'add',
          path: '../../app/containers/{{properCase name}}/index.js',
          templateFile: './container/ClassComponent.js.hbs',
          abortOnFail: true,
        }
      );
    }
    
    if(data.wantTest){
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/tests/index.test.js',
        templateFile: './container/tests/test.js.hbs',
        abortOnFail: true,
      });
    }
    
    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/messages.js',
        templateFile: './container/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/services/actions.js',
        templateFile: './container/services/actions.js.hbs',
        abortOnFail: true,
      });
      if(data.wantTest){
        actions.push({
          type: 'add',
          path: '../../app/containers/{{properCase name}}/tests/actions.test.js',
          templateFile: './container/tests/actions.test.js.hbs',
          abortOnFail: true,
        });
      }
      // Constants
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/services/constants.js',
        templateFile: './container/services/constants.js.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/services/selectors.js',
        templateFile: './container/services/selectors.js.hbs',
        abortOnFail: true,
      });
      if(data.wantTest){
        actions.push({
          type: 'add',
          path:
            '../../app/containers/{{properCase name}}/tests/selectors.test.js',
          templateFile: './container/tests/selectors.test.js.hbs',
          abortOnFail: true,
        });
      }

      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/services/reducer.js',
        templateFile: './container/services/reducer.js.hbs',
        abortOnFail: true,
      });
      if(data.wantTest){
        actions.push({
          type: 'add',
          path: '../../app/containers/{{properCase name}}/tests/reducer.test.js',
          templateFile: './container/tests/reducer.test.js.hbs',
          abortOnFail: true,
        });
      }

      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/services/index.js',
        templateFile: './container/services/index.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/services/saga.js',
        templateFile: './container/services/saga.js.hbs',
        abortOnFail: true,
      });
      if(data.wantTest){
        actions.push({
          type: 'add',
          path: '../../app/containers/{{properCase name}}/tests/saga.test.js',
          templateFile: './container/tests/saga.test.js.hbs',
          abortOnFail: true,
        });
      }
      if(!data.wantActionsAndReducer){
        actions.push({
          type: 'add',
          path: '../../app/containers/{{properCase name}}/services/index.js',
          templateFile: './container/services/index.js.hbs',
          abortOnFail: true,
        });
        // Constants
        actions.push({
          type: 'add',
          path: '../../app/containers/{{properCase name}}/services/constants.js',
          templateFile: './container/services/constants.js.hbs',
          abortOnFail: true,
        });
      }
    }

    // api
    if (data.wantApi) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/services/api.js',
        templateFile: './container/services/api.js.hbs',
        abortOnFail: true,
      });
      if(data.wantTest){
        actions.push({
          type: 'add',
          path: '../../app/containers/{{properCase name}}/tests/api.test.js',
          templateFile: './container/tests/api.test.js.hbs',
          abortOnFail: true,
        });
      }
    }

    // JSS
    if (data.wantJss) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/styles/index.js',
        templateFile: './container/styles/index.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/containers/',
    });

    return actions;
  },
};
