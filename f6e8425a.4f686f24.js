(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(89)),i=n(88),s={id:"outputs-diagnostics",title:"Outputs and diagnostics"},l={unversionedId:"outputs-diagnostics",id:"outputs-diagnostics",isDocsHomePage:!1,title:"Outputs and diagnostics",description:"The MMM code will automatically generate a set of plots under the folder you specify on the \u2018modeloutputcollect\u2019 object. Each of these plots represents one of the optimal model solutions as a result of the multi-objective optimization Pareto optimal process mentioned in the \u2018Automated hyperparameter selection and optimization\u2019 section. Please find below an example of the model output:",source:"@site/docs/outputs-diagnostics.md",slug:"/outputs-diagnostics",permalink:"/Robyn/docs/outputs-diagnostics",editUrl:"https://github.com/facebookexperimental/Robyn/docs/outputs-diagnostics.md",version:"current",sidebar:"someSidebar",previous:{title:"Calibration using experimental results",permalink:"/Robyn/docs/calibration"},next:{title:"Getting help and contributing",permalink:"/Robyn/docs/contributing"}},c=[],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The MMM code will automatically generate a set of plots under the folder you specify on the \u2018model_output_collect\u2019 object. Each of these plots represents one of the optimal model solutions as a result of the multi-objective optimization Pareto optimal process mentioned in the ",Object(r.b)("strong",{parentName:"p"},"\u2018Automated hyperparameter selection and optimization\u2019")," section. Please find below an example of the model output:"),Object(r.b)("img",{alt:"ModelResults1 chart",src:Object(i.a)("/img/ModelResults1.png")}),Object(r.b)("p",null,"As you may observe we have 6 different charts above:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Response decomposition waterfall by predictor:")," This chart reflects the percentage of each of the variables effect (Baseline and Media variables + intercept) on the response variable. E.g. If season effect says it's 40.5% that means that 40.5% of the total sales can be attributed to seasonality."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Share of spend vs. share of effect:")," This plot reflects the comparison of the total effect each channel had by means of the decomposition of the coefficients into the response variable divided by the total effect. As well as, the total spend (cost or investment) each channel had and its relative share over total marketing spend. We also plot the return on investment (ROI) each channel had which can give you an idea over the most profitable channels."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Average adstock decay rate:")," This chart represents, on average, what is the percentage decay rate each channel had. The higher the decay rate, the longer the effect in time for that specific channel media exposure."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Actual vs. predicted response:")," This plot shows the actual data for the response variable E.g sales, and how the modeled predicted data for that response variable is capturing the real curve. We aim for models that can capture most of the variance from the actual data and therefore the R-squared is closer to 1 while NRMSE is low."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Response curves and mean spend by channel:")," These are the diminishing returns response curves from hill function. They represent how saturated a channel is and therefore, may suggest potential budget reallocation strategies. The faster the curves reach to an inflection point and to a horizontal/flat slope, the quicker they will saturate with each extra ($) spent."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Fitted vs. residual:")," This chart shows the relationship between fitted and residual values. A residual value is a measure of how much a regression line vertically misses a data point.  A residual plot is typically used to find problems with a regression. Some data sets are not good candidates for regression, such as points at widely varying distances from the line. If the points in a residual plot are randomly dispersed around the horizontal axis, a linear regression model is appropriate for the data; otherwise, a nonlinear model is more appropriate.")),Object(r.b)("p",null,"Once you have analyzed the optimal model results plots and have chosen your model, you may introduce the model unique ID from the results in the previous section. E.g setting modID = \"1_22_3\" could be an example of a selected model from the list of best models in 'model_output_collect$allSolutions' results object. Once you run the budget allocator, results will be plotted and saved under the same folder where the model plots had been saved. The result would look like the following:"),Object(r.b)("img",{alt:"budget allocator chart",src:Object(i.a)("/img/budgerAllocator1.png")}),Object(r.b)("p",null,"You may encounter three charts as in the example above:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Initial vs. optimized budget allocation:")," This channel shows the original spend share vs. the new optimized recommended one. If optimized share is greater than original, this would mean you will need to proportionally increase budgets for that channel according to the difference between both shares. And you would reduce budgets in the case spend share would be greater than optimized share."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Initial vs. optimized mean response:")," Similar to the chart above, we have initial and optimized shares, but this time over the total expected response E.g. Sales. The optimized response is the total increase in sales that we are expecting you to have if you switch budgets following the chart we explained above, increasing those with better share for optimized spend and decreasing spend for those with lower optimized spend than the initial."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Response curve and mean spend by channel:")," These again are the diminishing returns response curves from hill function. They represent how saturated a channel is and therefore, may suggest potential budget reallocation strategies. The faster the curves reach to an inflection point and to a horizontal/flat slope, the quicker they will saturate with each extra ($) spent. The initial mean spend is represented by a circle and the optimized one by the triangle.")))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(22),o=n(91);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||r;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);