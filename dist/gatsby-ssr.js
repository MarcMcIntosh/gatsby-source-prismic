var e,r=(e=require("react"))&&"object"==typeof e&&"default"in e?e.default:e;exports.onRenderBody=function(e,t){try{const{setPostBodyComponents:o}=e;if(!t.prismicToolbar)return Promise.resolve();let i;switch(t.prismicToolbar){case!0:i="//static.cdn.prismic.io/prismic.js?repo="+t.repositoryName+"&new=true";break;case"legacy":i="//static.cdn.prismic.io/prismic.js?repo="+t.repositoryName}return o([r.createElement("script",{src:i,defer:!0})]),Promise.resolve()}catch(e){return Promise.reject(e)}};
//# sourceMappingURL=gatsby-ssr.js.map
