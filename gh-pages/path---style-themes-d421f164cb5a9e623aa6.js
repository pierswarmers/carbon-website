webpackJsonp([31148964595181],{652:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"page-intro",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Carbon Themes"}]},{type:"text",value:" are used to customize components to fit the specific needs of a brand or product."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Introduction to theming"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Developers and designers can use Carbon Themes to modify existing components to fit their own specific visual styles and needs. Rather than changing each individual component's css or building modified components from scratch, components can now be easily customized by changing a set of universal variables that seamlessly propagate across all of the components."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://themes.carbondesignsystem.com/",target:"_blank"},children:[{type:"text",value:"Explore Themes"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Theme terms"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Term"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Definition"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Theme"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"The set of unique values assigned to the universal variables"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Value"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"A theme's unique styles (ie hex code, line weight etc) assigned to a universal variable"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Role"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"The systematic usage/s of a value. Roles cannot be changed between themes."}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Variable"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"The code identifier for a unique role or set of roles. Variables are universal and never change across themes."}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"IBM Cloud theme"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The Carbon Design System has a default theme which is based off of the IBM Cloud UI and IBM Design Language. When "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"carbon-components"}]},{type:"text",value:" is downloaded and installed, they are preset to use the default theme."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The default theme acts as a starting point; from there designers and developers only need to define how their own components and styles deviate from the default. A theme can change all of the values or as little as only one. Those different values are then packaged into a new theme which when called will override the values of the default."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/carbon-design-system/carbon-themes"},children:[{type:"text",value:"Carbon Themes repo"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Variables"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"By using variables developers only need to make a change in one place to see a system wide change. They are used across multiple components and make it easy for components to be systematically updated while keeping global patterns and styles consistent."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"All variables come pre-baked into the Carbon component source code. Variables are denoted by the prefix "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$"}]},{type:"text",value:" (eg. "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$brand-01"}]},{type:"text",value:")."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There are two categories of variables: "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"color"}]},{type:"text",value:" and "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"global."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Color"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Each theme is assigned 25 universal color variables, which are determined by "},{type:"element",tagName:"a",properties:{href:"/style/color/usage"},children:[{type:"text",value:"common roles and usage"}]},{type:"text",value:". This allows for uniform color application across themes while giving each theme the freedom to express its own personality."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"//// Carbon\n// Color Variables\n$brand-01: $color__blue-51 !default;\n$brand-02: $color__blue-40 !default;\n$brand-03: $color__teal-20 !default;\n$inverse-01: $color__white !default;\n$inverse-02: #272d33 !default;\n$ui-01: $color__white !default;\n$ui-02: #f4f7fb !default;\n$ui-03: $color__gray-1 !default;\n$ui-04: #8897a2 !default;\n$ui-05: $color__navy-gray-6 !default;\n$text-01: $color__blue-90 !default;\n$text-02: $color__navy-gray-6 !default;\n$text-03: #cdd1d4 !default;\n$field-01: #f4f7fb !default;\n$field-02: $color__white !default;\n$support-01: #e0182d !default;\n$support-02: $color__green-40 !default;\n$support-03: $color__yellow-30 !default;\n$support-04: $color__blue-30 !default;\n$nav-01: $color__navy-gray-1 !default;\n$nav-02: $color__blue-90 !default;\n$nav-03: $color__purple-30 !default;\n$nav-04: $color__purple-60 !default;\n$nav-05: $color__teal-40 !default;\n$nav-06: $color__teal-50 !default;\n$nav-07: $color__blue-30 !default;\n$nav-08: $color__blue-51 !default;\n\n$hover-primary: darken($brand-01, 10%) !default;\n$hover-primary-text: darken($brand-01, 15%) !default;\n$hover-danger: darken($support-01, 10%) !default;\n$hover-secondary: $brand-01 !default;\n$hover-row: rgba($brand-02, 0.1) !default;\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Global"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The other categories are global and component specific variables. These control more general styling of components, such as layer usage or border width."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"// Global\n$input-border: 1px solid transparent !default;\n$input-label-weight: 600 !default;\n\n// Button Theme Variables\n$button-font-weight: 600 !default;\n$button-font-size: 0.875rem !default;\n$button-border-radius: 0 !default;\n$button-height: 40px !default;\n$button-padding: 0 $spacing-md !default;\n$button-padding-sm: 0 $spacing-xs !default;\n$button-border-width: 2px !default;\n\n// Accordion (Reverse)\n$accordion-flex-direction: row !default;\n$accordion-justify-content: flex-start !default;\n$accordion-arrow-margin: 0 0 0 $spacing-2xs !default;\n$accordion-title-margin: 0 0 0 $spacing-md !default;\n$accordion-content-padding: 0 $spacing-md 0 $spacing-2xl !default;\n\n// Card\n$card-text-align: center !default;\n$card-flex-align: center !default;\n\n// Checkbox\n$checkbox-border-width: 2px !default;\n\n// Code Snippet\n$snippet-background-color: $ui-01 !default;\n$snippet-border-color: $ui-03 !default;\n\n// Content Switcher\n$content-switcher-border-radius: 8px !default;\n$content-switcher-option-border: 1px solid $brand-01 !default;\n\n// Data Table\n$data-table-heading-transform: uppercase !default;\n$data-table-heading-border-bottom: 1px solid $brand-01 !default;\n$data-table-row-height: 2rem !default;\n\n// Modal\n$modal-border-top: $brand-01 4px solid !default;\n$modal-footer-background-color: $ui-02 !default;\n\n// Progress Indicator\n$progress-indicator-bar-width: 1px inset transparent !default;\n$progress-indicator-stroke-width: 5 !default;\n$progress-indicator-line-offset: 0.625rem !default;\n\n// Radio Button\n$radio-border-width: 2px !default;\n\n// Structured Theme Variables\n$structured-list-padding: 2rem !default;\n$structured-list-text-transform: none !default;\n\n// Skeleton Loading\n$skeleton: rgba($color__blue-51, 0.1) !default; \n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Theming applied"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The following examples demonstrates the relationship between the different theming elements. Each element has a variable, a role, and a value determined by its theme."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Default theme applied"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/theme-1-a70ee0063454b3634bf87b21428b66c7-9f6e6.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 35.16666666666667%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA8UlEQVQoz31Ry26DMBDM//9VT5V6a9Wq6Us0gIpIEbbBb0eaTgyBRGpyGM3au54d726MizhB25DZ2gTbp+Uuw01suphj0/ONmmO7amwuxJjQPkC2BvLOQBm7FBpPjBHuno0i+YlcsT7eEiSPxuOjqPH6tUPVdHSQoLTHcIKcmY2PzbMJF645nBLfPwLv5R5vRYvPskPVjihbhbIZUNUDdo1CQYwmXJi5+mXx69A/GnRKo1cWko5kTQgHYYm9g3z20GF+859gxixoB85oy8X4I6ace2AsGScuTfD8khbBGzNcZ6IPYd3w2ZYz/JRfas9m+AdoXxvXQo54AAAAAABJRU5ErkJggg=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;",alt:"Default theme applied",title:"",src:"/static/theme-1-a70ee0063454b3634bf87b21428b66c7-fb8a0.png",srcSet:["/static/theme-1-a70ee0063454b3634bf87b21428b66c7-1a291.png 148w","/static/theme-1-a70ee0063454b3634bf87b21428b66c7-2bc4a.png 295w","/static/theme-1-a70ee0063454b3634bf87b21428b66c7-fb8a0.png 590w","/static/theme-1-a70ee0063454b3634bf87b21428b66c7-526de.png 885w","/static/theme-1-a70ee0063454b3634bf87b21428b66c7-fa2eb.png 1180w","/static/theme-1-a70ee0063454b3634bf87b21428b66c7-9f6e6.png 1200w"],sizes:["(max-width:","590px)","100vw,","590px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Key"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Variable"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Role"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Value"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Theme"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"1"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$text-01"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Primary text"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#152935"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Default"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"2"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$text-03"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Hint text"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#cdd1d4"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Default"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"3"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$input-border"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Input border"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1px solid transparent"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Default"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"4"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$brand-01"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Primary icon"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#3d70b2"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Default"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"5"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ui-02"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Default background"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#f4f7fb"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Default"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"6"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$field-01"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Field background"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#152935"}]},{type:"text",value:"\n @ 10%"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Default"}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom theme applied"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here is the same component but with a different theme applied. Notice how only the values and theme items changed. The variables and role are the same for both."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/theme-2-a3df267133ec5db724bea5fa6c6c06bb-9f6e6.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 35.16666666666667%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA4ElEQVQoz41Qy27CQAzk//+svVQVPXBpWkA5ICSUx46dkGTN7CMhbSWoVtbOerxjezYiYktADArTSmNIl3JzXiriC7EQn3M+YNw1NjMAEoEB1mwbq99qq7U2OEQOV/JfYvquqekLG7bPBPOU+8PeiqKwsiwXbokKSaTHfQjBX8H4MRNd35mqmnMuvr33NoUzTuZ73n4yvQ4UDAOEBo9WZmc58v6EtdrGvDb09JQ9VYYj3nH1Fj+3+z3hInigV9/81EuKku9XCox57YZNPv7h4UwGUWSP1v7MTWP9sKpf1dwAYRUcy4soWAQAAAAASUVORK5CYII='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;",alt:"Custom theme applied",title:"",src:"/static/theme-2-a3df267133ec5db724bea5fa6c6c06bb-fb8a0.png",srcSet:["/static/theme-2-a3df267133ec5db724bea5fa6c6c06bb-1a291.png 148w","/static/theme-2-a3df267133ec5db724bea5fa6c6c06bb-2bc4a.png 295w","/static/theme-2-a3df267133ec5db724bea5fa6c6c06bb-fb8a0.png 590w","/static/theme-2-a3df267133ec5db724bea5fa6c6c06bb-526de.png 885w","/static/theme-2-a3df267133ec5db724bea5fa6c6c06bb-fa2eb.png 1180w","/static/theme-2-a3df267133ec5db724bea5fa6c6c06bb-9f6e6.png 1200w"],sizes:["(max-width:","590px)","100vw,","590px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Key"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Variable"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Role"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Value"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Theme"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"1"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$text-01"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Primary text"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#272727"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Watson"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"2"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$text-03"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Hint text"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#777677"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Watson"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"3"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$input-border"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Input border"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1px solid $ui-04"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Watson"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"4"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$brand-01"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Primary icon"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#047cc0"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Watson"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"5"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ui-02"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Default background"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#f6f6f6"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Watson"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"6"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$field-01"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Field background"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#ffffff"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Watson"}]}]}]}]}],data:{quirksMode:!1}},fields:{slug:"/style/themes/themes",currentPage:"themes"},frontmatter:{title:"Themes",label:"Style",tabs:null}}},pathContext:{slug:"/style/themes/themes",currentPage:"themes"}}}});
//# sourceMappingURL=path---style-themes-d421f164cb5a9e623aa6.js.map