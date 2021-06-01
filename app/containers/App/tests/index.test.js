import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from '../index';

const renderer = new ShallowRenderer();

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<App />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchInlineSnapshot(`
      <div>
        <HelmetWrapper
          defaultTitle="React project template"
          defer={true}
          encodeSpecialCharacters={true}
          titleTemplate="%s - React project template"
        >
          <meta
            content="React project template"
            name="description"
          />
        </HelmetWrapper>
        <Switch>
          <Route
            component={[Function]}
            exact={true}
            path="/signin"
            private={false}
            title="Sign In"
          />
          <PrivateRoute
            component={[Function]}
            exact={true}
            path="/"
            private={true}
            title="Home"
          />
          <PrivateRoute
            component={[Function]}
            exact={false}
            path="/posts"
            private={true}
            title="Posts"
          />
          <Route
            component={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "Naked": [Function],
                "displayName": "WithStyles(NotFound)",
                "options": Object {
                  "defaultTheme": Object {
                    "breakpoints": Object {
                      "between": [Function],
                      "down": [Function],
                      "keys": Array [
                        "xs",
                        "sm",
                        "md",
                        "lg",
                        "xl",
                      ],
                      "only": [Function],
                      "up": [Function],
                      "values": Object {
                        "lg": 1280,
                        "md": 960,
                        "sm": 600,
                        "xl": 1920,
                        "xs": 0,
                      },
                      "width": [Function],
                    },
                    "direction": "ltr",
                    "mixins": Object {
                      "gutters": [Function],
                      "toolbar": Object {
                        "@media (min-width:0px) and (orientation: landscape)": Object {
                          "minHeight": 48,
                        },
                        "@media (min-width:600px)": Object {
                          "minHeight": 64,
                        },
                        "minHeight": 56,
                      },
                    },
                    "overrides": Object {},
                    "palette": Object {
                      "action": Object {
                        "active": "rgba(0, 0, 0, 0.54)",
                        "disabled": "rgba(0, 0, 0, 0.26)",
                        "disabledBackground": "rgba(0, 0, 0, 0.12)",
                        "hover": "rgba(0, 0, 0, 0.08)",
                        "hoverOpacity": 0.08,
                        "selected": "rgba(0, 0, 0, 0.14)",
                      },
                      "augmentColor": [Function],
                      "background": Object {
                        "default": "#fafafa",
                        "paper": "#fff",
                      },
                      "common": Object {
                        "black": "#000",
                        "white": "#fff",
                      },
                      "contrastThreshold": 3,
                      "divider": "rgba(0, 0, 0, 0.12)",
                      "error": Object {
                        "contrastText": "#fff",
                        "dark": "#d32f2f",
                        "light": "#e57373",
                        "main": "#f44336",
                      },
                      "getContrastText": [Function],
                      "grey": Object {
                        "100": "#f5f5f5",
                        "200": "#eeeeee",
                        "300": "#e0e0e0",
                        "400": "#bdbdbd",
                        "50": "#fafafa",
                        "500": "#9e9e9e",
                        "600": "#757575",
                        "700": "#616161",
                        "800": "#424242",
                        "900": "#212121",
                        "A100": "#d5d5d5",
                        "A200": "#aaaaaa",
                        "A400": "#303030",
                        "A700": "#616161",
                      },
                      "primary": Object {
                        "contrastText": "#fff",
                        "dark": "#303f9f",
                        "light": "#7986cb",
                        "main": "#3f51b5",
                      },
                      "secondary": Object {
                        "contrastText": "#fff",
                        "dark": "#c51162",
                        "light": "#ff4081",
                        "main": "#f50057",
                      },
                      "text": Object {
                        "disabled": "rgba(0, 0, 0, 0.38)",
                        "hint": "rgba(0, 0, 0, 0.38)",
                        "primary": "rgba(0, 0, 0, 0.87)",
                        "secondary": "rgba(0, 0, 0, 0.54)",
                      },
                      "tonalOffset": 0.2,
                      "type": "light",
                    },
                    "props": Object {},
                    "shadows": Array [
                      "none",
                      "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                      "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                      "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                      "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                      "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                      "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                      "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                      "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                      "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                      "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                      "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                      "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                      "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                      "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                      "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                      "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                      "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                      "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                      "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                      "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                      "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                    ],
                    "shape": Object {
                      "borderRadius": 4,
                    },
                    "spacing": [Function],
                    "transitions": Object {
                      "create": [Function],
                      "duration": Object {
                        "complex": 375,
                        "enteringScreen": 225,
                        "leavingScreen": 195,
                        "short": 250,
                        "shorter": 200,
                        "shortest": 150,
                        "standard": 300,
                      },
                      "easing": Object {
                        "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                        "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                        "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                        "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                      },
                      "getAutoHeightDuration": [Function],
                    },
                    "typography": Object {
                      "body1": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "1rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.00938em",
                        "lineHeight": 1.5,
                      },
                      "body2": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "0.875rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.01071em",
                        "lineHeight": 1.43,
                      },
                      "button": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "0.875rem",
                        "fontWeight": 500,
                        "letterSpacing": "0.02857em",
                        "lineHeight": 1.75,
                        "textTransform": "uppercase",
                      },
                      "caption": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "0.75rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.03333em",
                        "lineHeight": 1.66,
                      },
                      "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                      "fontSize": 14,
                      "fontWeightBold": 700,
                      "fontWeightLight": 300,
                      "fontWeightMedium": 500,
                      "fontWeightRegular": 400,
                      "h1": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "6rem",
                        "fontWeight": 300,
                        "letterSpacing": "-0.01562em",
                        "lineHeight": 1,
                      },
                      "h2": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "3.75rem",
                        "fontWeight": 300,
                        "letterSpacing": "-0.00833em",
                        "lineHeight": 1,
                      },
                      "h3": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "3rem",
                        "fontWeight": 400,
                        "letterSpacing": "0em",
                        "lineHeight": 1.04,
                      },
                      "h4": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "2.125rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.00735em",
                        "lineHeight": 1.17,
                      },
                      "h5": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "1.5rem",
                        "fontWeight": 400,
                        "letterSpacing": "0em",
                        "lineHeight": 1.33,
                      },
                      "h6": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "1.25rem",
                        "fontWeight": 500,
                        "letterSpacing": "0.0075em",
                        "lineHeight": 1.6,
                      },
                      "htmlFontSize": 16,
                      "overline": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "0.75rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.08333em",
                        "lineHeight": 2.66,
                        "textTransform": "uppercase",
                      },
                      "pxToRem": [Function],
                      "round": [Function],
                      "subtitle1": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "1rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.00938em",
                        "lineHeight": 1.75,
                      },
                      "subtitle2": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "0.875rem",
                        "fontWeight": 500,
                        "letterSpacing": "0.00714em",
                        "lineHeight": 1.57,
                      },
                    },
                    "zIndex": Object {
                      "appBar": 1100,
                      "drawer": 1200,
                      "mobileStepper": 1000,
                      "modal": 1300,
                      "snackbar": 1400,
                      "tooltip": 1500,
                    },
                  },
                },
                "propTypes": Object {
                  "classes": [Function],
                  "innerRef": [Function],
                },
                "render": [Function],
                "useStyles": [Function],
              }
            }
            path=""
          />
        </Switch>
        <GlobalStyleComponent />
        <ToastContainer
          autoClose={5000}
          bodyClassName={null}
          className={null}
          closeButton={
            <CloseButton
              ariaLabel="close"
            />
          }
          closeOnClick={true}
          draggable={true}
          draggablePercent={80}
          hideProgressBar={false}
          newestOnTop={false}
          pauseOnFocusLoss={true}
          pauseOnHover={true}
          position="top-right"
          progressClassName={null}
          progressStyle={null}
          role="alert"
          rtl={false}
          style={null}
          toastClassName={null}
          transition={[Function]}
        />
      </div>
    `);
  });
});
