import e from"fs";import t from"path";import i from"md5";import{string as a,optional as n,record as r,object as s,defaulted as o,func as c,array as l,union as m,boolean as d,enums as u,number as h,empty as g,coerce as p,assert as f}from"superstruct";import{pascalCase as y,pascalCaseTransformMerge as T}from"pascal-case";import{getApi as b}from"prismic-javascript";import I from"lodash.pick";import S from"lodash.omit";import{Link as v,RichText as w}from"prismic-dom";import{createRemoteFileNode as P}from"gatsby-source-filesystem";import{createImgixFixedType as D,createImgixFluidType as k,createImgixUrlSchemaFieldConfig as x,createImgixFixedSchemaFieldConfig as N,createImgixFluidSchemaFieldConfig as _}from"gatsby-plugin-imgix/dist/node";const F={repositoryName:a(),accessToken:n(a()),releaseID:n(a()),schemas:r(a(),s()),linkResolver:o(c(),()=>()=>()=>{}),htmlSerializer:o(c(),()=>()=>()=>{}),fetchLinks:o(l(a()),[]),lang:o(a(),"*"),typePathsFilenamePrefix:o(a(),"prismic-typepaths---"),prismicToolbar:o(m([d(),u(["legacy"])]),!1),imageImgixParams:o(r(a(),n(m([a(),h(),d()]))),{auto:"format,compress",fit:"max",q:50}),imagePlaceholderImgixParams:o(r(a(),n(m([a(),h(),d()]))),{w:100,blur:15,q:20}),plugins:o(g(l()),[])},L=s({...F,shouldDownloadImage:o(n(c()),()=>()=>!1),webhookSecret:n(a())}),$=(s({...F,pathResolver:n(c()),schemasDigest:a()}),e=>"gatsby-source-prismic - "+e),A=(e,t)=>{const i={};for(const a in t)i[a]=e(t[a],a);return i},O=async(e,t)=>{const i={},a=Object.keys(t);return await Promise.all(a.map(async a=>{i[a]=await e(t[a],a)})),i},j=e=>{for(const t in e)return!1;return!0},E=e=>y("Prismic "+e,{transform:T});var U,M,R,G;!function(e){e.Any="Any",e.Document="Document",e.Media="Media",e.Web="Web"}(U||(U={})),function(e){e.Boolean="Boolean",e.Color="Color",e.Date="Date",e.Embed="Embed",e.GeoPoint="GeoPoint",e.Group="Group",e.Image="Image",e.Link="Link",e.Number="Number",e.Select="Select",e.Slice="Slice",e.Slices="Slices",e.StructuredText="StructuredText",e.Text="Text",e.Timestamp="Timestamp",e.UID="UID",e.AlternateLanguages="AlternateLanguages"}(M||(M={})),function(e){e.ID="ID",e.Boolean="Boolean",e.String="String",e.Float="Float",e.Date="Date",e.JSON="JSON",e.Link="PrismicLinkType",e.Image="PrismicImageType",e.ImageThumbnail="PrismicImageThumbnailType",e.ImageThumbnails="PrismicImageThumbnailsType",e.Embed="PrismicEmbedType",e.GeoPoint="PrismicGeoPointType",e.StructuredText="PrismicStructuredTextType",e.AllDocumentTypes="PrismicAllDocumentTypes",e.Group="Group",e.Slices="Slices",e.AlternateLanguages="AlternateLanguages"}(R||(R={})),function(e){e.List="list",e.Grid="grid"}(G||(G={}));const z=(e,t,i,a)=>{const{customTypeApiId:n,enqueueTypeDef:r,enqueueTypePath:s,gatsbyContext:o,sliceZoneId:c}=a,{schema:l,reporter:m}=o;switch(t.type){case M.UID:case M.Color:case M.Select:case M.Text:{const t=R.String;return s([...i,e],t),t}case M.Boolean:{const t=R.Boolean;return s([...i,e],t),t}case M.StructuredText:{const t=R.StructuredText;return s([...i,e],t),t}case M.Number:{const t=R.Float;return s([...i,e],t),t}case M.Date:case M.Timestamp:{const t=R.Date;return s([...i,e],t),{type:t,extensions:{dateformat:{}}}}case M.GeoPoint:{const t=R.GeoPoint;return s([...i,e],t),t}case M.Embed:{const t=R.Embed;return s([...i,e],t),t}case M.Image:{var d;const a=R.Image;s([...i,e],a);const n=null==t||null===(d=t.config)||void 0===d?void 0:d.thumbnails;if(n)for(const t of n)s([...i,e,"thumbnails",t.name],R.ImageThumbnail);return a}case M.Link:{const t=R.Link;return s([...i,e],t),t}case M.Group:{const o=E(`${n} ${e} GroupType`);r(l.buildObjectType({name:o,fields:A((t,n)=>z(n,t,[...i,e],a),t.config.fields),extensions:{infer:!1}}));const c=`[${o}]`;return s([...i,e],c),c}case M.Slices:{const o=E(`${n} ${e} SlicesType`),c=Object.entries(t.config.choices).map(([t,n])=>z(t,n,[...i,e],{...a,sliceZoneId:e}));r(l.buildUnionType({name:o,types:c}));const m=`[${o}]`;return s([...i,e],m),{type:m,resolve:(e,t,i,a)=>i.nodeModel.getNodesByIds({ids:e[a.path.key]})}}case M.Slice:{const{"non-repeat":o,repeat:m}=t,d={slice_type:R.String+"!",slice_label:R.String};if(o&&!j(o)){const t=E(`${n} ${c} ${e} PrimaryType`);r(l.buildObjectType({name:t,fields:A((t,n)=>z(n,t,[...i,e,"primary"],a),o)})),s([...i,e,"primary"],t),d.primary=t}if(m&&!j(m)){const t=E(`${n} ${c} ${e} ItemType`);r(l.buildObjectType({name:t,fields:A((t,n)=>z(n,t,[...i,e,"items"],a),m)}));const o=`[${t}]`;s([...i,e,"items"],o),d.items=o}const u=E(`${n} ${c} ${e}`);return r(l.buildObjectType({name:u,fields:d,interfaces:["PrismicSliceType","Node"],extensions:{infer:!1}})),s([...i,e],u),u}case M.AlternateLanguages:return s([...i,e],M.AlternateLanguages),`[${R.Link}!]!`;default:{const a=[...i,e].join(".");m.warn($(`Unsupported field type "${t.type}" detected for field "${a}". JSON type will be used.`));const n=R.JSON;return s([...i,e],n),n}}},C=(e,t,i)=>{const{enqueueTypeDef:a,enqueueTypePath:n,gatsbyContext:r}=i,{schema:s}=r,{uid:o,...c}=Object.values(t).reduce((e,t)=>{for(const i in t)e[i]=t[i];return e},{});let l;o&&(l=z("uid",o,[e],i));const m=z("alternate_languages",{type:M.AlternateLanguages},[e],i),d=E(e+" DataType");n([e,"data"],d),a(s.buildObjectType({name:d,fields:A((t,a)=>z(a,t,[e,"data"],i),c),extensions:{infer:!1}}));const u=E(e),h={data:d,dataRaw:R.JSON+"!",dataString:R.String+"!",first_publication_date:{type:R.Date+"!",extensions:{dateformat:{}}},href:R.String+"!",url:R.String,lang:R.String+"!",last_publication_date:{type:R.Date+"!",extensions:{dateformat:{}}},tags:`[${R.String}!]!`,alternate_languages:m,type:R.String+"!",prismicId:R.ID+"!",_previewable:R.ID+"!"};l&&(h.uid=l),n([e],u),a(s.buildObjectType({name:u,fields:h,interfaces:["PrismicDocument","Node"],extensions:{infer:!1}}))},J=["alt","copyright","dimensions","url"],B=async(e,t)=>{const i=function(e){const t=e.match(/^https?:\/\/([^.]+)\.(wroom\.(?:test|io)|prismic\.io)/);return t?t[0]+"/api/v2":`https://${e}.prismic.io/api/v2`}(e);return await b(i,{accessToken:t})},q=async(e,t,i,a,n,r)=>{r.verbose($("fetching documents page "+i));const s=await e.query([],{...t,page:i,pageSize:a});for(const e of s.results)n.push(e);return i*a<s.total_results_size?await q(e,t,i+1,a,n,r):n},H=async(e,t,i,a,n)=>{const{createNodeId:r,createNode:s,createContentDigest:o,typePaths:c,normalizeStructuredTextField:l,normalizeLinkField:m,normalizeImageField:d,normalizeSlicesField:u}=n;switch(((e,t)=>{const i=JSON.stringify(e),a=t.find(e=>JSON.stringify(e.path)===i);if(a)return/^\[.*GroupType\]$/.test(a.type)?R.Group:/^\[.*SlicesType\]$/.test(a.type)?R.Slices:a.type})([...i,e],c)){case R.Image:{const r=I(t,J),s=S(t,J);return{...await d(e,r,i,a,n),thumbnails:await O(async t=>await d(e,t,i,a,n),s)}}case R.StructuredText:return await l(e,t,i,a,n);case R.Link:return await m(e,t,i,a,n);case R.Group:return await Y(t,[...i,e],a,n);case R.Slices:{const c=await Promise.all(t.map(async(t,c)=>{var l;const m=r(`${a.type} ${a.id} ${e} ${c}`),d=await W(t.primary,[...i,e,t.slice_type,"primary"],a,n),u=await Y(t.items,[...i,e,t.slice_type,"items"],a,n),h={id:m,slice_type:t.slice_type,slice_label:null!==(l=t.slice_label)&&void 0!==l?l:void 0,primary:d,items:u,internal:{type:E(`${a.type} ${e} ${t.slice_type}`),contentDigest:o(t)}};return s(h),h.id}));return await u(e,c,[...i,e],a,n)}case R.AlternateLanguages:return await Promise.all(t.map(async t=>await m(e,{...t,link_type:U.Document},i,a,n)));default:return t}},W=(e={},t,i,a)=>O((e,n)=>H(n,e,t,i,a),e),Y=(e=[],t,i,a)=>Promise.all(e.map(e=>W(e,t,i,a))),Z=async(e,t)=>await Promise.all(e.map(e=>(async(e,t)=>{const{createNode:i,createContentDigest:a,createNodeId:n,pluginOptions:r}=t,{linkResolver:s}=r;let o=void 0;s&&(o=s({node:e}));const c=n(e.id),l=o?o(e):void 0,m=await W(e.data,[e.type,"data"],e,t),d=await H("alternate_languages",e.alternate_languages,[e.type],e,t),u={...e,id:c,prismicId:e.id,data:m,dataString:JSON.stringify(e.data),dataRaw:e.data,alternate_languages:d,url:l,internal:{type:E(e.type),contentDigest:a(e)},_previewable:e.id};return i(u),u.id})(e,t))),V=async(e,t,i,a,n)=>{const{createNode:r,createNodeId:s,pluginOptions:o,context:c}=n,{gatsbyContext:l}=c,{store:m,cache:d,actions:u,reporter:h}=l,{touchNode:g}=u;let{shouldDownloadImage:p}=o,f=!0;if(p&&(f=await p({key:e,value:t,node:a})),!f||!t.url)return t;let y=void 0;const T="prismic-image-"+t.url,b=await d.get(T);if(b)y=b.fileNodeID,g({nodeId:y});else try{const e=new URL(t.url);e.searchParams.delete("auto");const i=await P({url:e.toString(),store:m,cache:d,createNode:r,createNodeId:s,reporter:h});i&&(y=i.id,await d.set(T,{fileNodeID:y}))}catch(e){h.error($("failed to create image node with URL: "+t.url),new Error(e))}return{...t,localFile:y}},X=(e,t,i,a,n)=>{const{createNodeId:r,pluginOptions:s}=n,{linkResolver:o}=s;let c=void 0;o&&(c=o({key:e,value:t,node:a}));let l=void 0;return t.link_type===U.Document&&(l=r(`${t.type} ${t.id}`)),{...t,url:v.url(t,c),document:l,raw:t}},K=(e,t,i,a,n)=>t,Q=(e,t,i,a,n)=>{const{pluginOptions:r}=n,{linkResolver:s,htmlSerializer:o}=r;let c=void 0;s&&(c=s({key:e,value:t,node:a}));let l=void 0;return o&&(l=o({key:e,value:t,node:a})),{html:w.asHtml(t,c,l),text:w.asText(t),raw:t}},ee=(e,t,i)=>{const{actions:a,createNodeId:n,createContentDigest:r}=t,{createNode:s}=a;return{createNode:s,createNodeId:e=>n(e),createContentDigest:r,normalizeImageField:V,normalizeLinkField:X,normalizeSlicesField:K,normalizeStructuredTextField:Q,typePaths:i,pluginOptions:e,context:{gatsbyContext:t}}};let te;const ie=(ae=te||(te=(e=>e)`
  "A text field with formatting options."
  type PrismicStructuredTextType {
    "The HTML value of the text using \`prismic-dom\` and the HTML serializer."
    html: String
    "The plain text value of the text using \`prismic-dom\`."
    text: String
    "The field's value without transformations exactly as it comes from the Prismic API."
    raw: JSON
  }

  "A field for storing geo-coordinates."
  type PrismicGeoPointType {
    "The latitude value of the geo-coordinate."
    latitude: Float
    "The longitude value of the geo-coordinate."
    longitude: Float
  }

  "Embed videos, songs, tweets, slices, etc."
  type PrismicEmbedType {
    "The ID of the resource author. Fetched via oEmbed data."
    author_id: ID
    "The name of the author/owner of the resource. Fetched via oEmbed data."
    author_name: String
    "A URL for the author/owner of the resource. Fetched via oEmbed data."
    author_url: String
    "The suggested cache lifetime for this resource, in seconds. Consumers may choose to use this value or not. Fetched via oEmbed data."
    cache_age: String
    "The URL of the resource."
    embed_url: String
    "The HTML required to display the resource. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. Fetched via oEmbed data."
    html: String
    "The name of the resource."
    name: String
    "The name of the resource provider. Fetched via oEmbed data."
    provider_name: String
    "The URL of the resource provider. Fetched via oEmbed data."
    provider_url: String
    "The width of the resource's thumbnail. Fetched via oEmbed data."
    thumbnail_height: Int
    "A URL to a thumbnail image representing the resource. Fetched via oEmbed data."
    thumbnail_url: String
    "The width of the resource's thumbnail. Fetched via oEmbed data."
    thumbnail_width: Int
    "A text title, describing the resource. Fetched via oEmbed data."
    title: String
    "The resource type. Fetched via oEmbed data."
    type: String
    "The oEmbed version number."
    version: String
    "The source URL of the resource. Fetched via oEmbed data."
    url: String
    "The width in pixel of the resource. Fetched via oEmbed data."
    width: Int
    "The height in pixel of the resource. Fetched via oEmbed data."
    height: Int
    "The ID of the resource media. Fetched via oEmbed data."
    media_id: ID
    "A description for the resource."
    description: String
  }

  "Dimensions for images."
  type PrismicImageDimensionsType {
    "Width of the image in pixels."
    width: Int!
    "Height of the image in pixels."
    height: Int!
  }

  "Types of links."
  enum PrismicLinkTypes {
    "Any of the other types"
    Any
    "Internal content"
    Document
    "Internal media content"
    Media
    "URL"
    Web
  }

  "Link to web, media, and internal content."
  type PrismicLinkType {
    "The type of link."
    link_type: PrismicLinkTypes!
    "If a Document link, \`true\` if linked document does not exist, \`false\` otherwise."
    isBroken: Boolean
    "The document's URL derived via the link resolver."
    url: String
    "The link's target."
    target: String
    "If a Media link, the size of the file."
    size: Int
    "If a Document link, the linked document's Prismic ID."
    id: ID
    "If a Document link, the linked document's Prismic custom type API ID"
    type: String
    "If a Document link, the linked document's list of tags."
    tags: [String]
    "If a Document link, the linked document's language."
    lang: String
    "If a Document link, the linked document's slug."
    slug: String
    "If a Document link, the linked document's UID."
    uid: String
    "If a Document link, the linked document."
    document: PrismicAllDocumentTypes @link
    "The field's value without transformations exactly as it comes from the Prismic API."
    raw: JSON
  }

  interface PrismicSliceType {
    "The slice type API ID."
    slice_type: String!

    "The slice label."
    slice_label: String
  }

  interface PrismicImageInterface {
    "The image's alternative text."
    alt: String
    "The image's copyright text."
    copyright: String
    "The image's dimensions."
    dimensions: PrismicImageDimensionsType
    "The image's URL on Prismic's CDN."
    url: String
    "The locally downloaded image if \`shouldNormalizeImage\` returns true."
    localFile: File
    fixed: PrismicImageFixedType
    fluid: PrismicImageFluidType
  }

  interface PrismicDocument {
    "The document's data object without transformations exactly as it comes from the Prismic API."
    dataRaw: JSON!
    "The document's data object without transformations. The object is stringified via \`JSON.stringify\` to eliminate the need to declare subfields."
    dataString: String
      @deprecated(reason: "Use \`dataRaw\` instead which returns JSON.")
    "The document's initial publication date."
    first_publication_date(
      "Format the date using Moment.js' date tokens, e.g. \`date(formatString: \\"YYYY MMMM DD\\")\`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens."
      formatString: String
      "Returns a string generated with Moment.js' \`fromNow\` function"
      fromNow: Boolean
      "Returns the difference between this date and the current time. Defaults to \\"milliseconds\\" but you can also pass in as the measurement \\"years\\", \\"months\\", \\"weeks\\", \\"days\\", \\"hours\\", \\"minutes\\", and \\"seconds\\"."
      difference: String
      "Configures the locale Moment.js will use to format the date."
      locale: String
    ): Date
    "The document's Prismic API URL."
    href: String
    "The document's URL derived via the link resolver."
    url: String
    "Globally unique identifier. Note that this differs from the \`prismicID\` field."
    id: ID!
    "The document's language."
    lang: String!
    "The document's most recent publication date"
    last_publication_date(
      "Format the date using Moment.js' date tokens, e.g. \`date(formatString: \\"YYYY MMMM DD\\")\`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens."
      formatString: String
      "Returns a string generated with Moment.js' \`fromNow\` function"
      fromNow: Boolean
      "Returns the difference between this date and the current time. Defaults to \\"milliseconds\\" but you can also pass in as the measurement \\"years\\", \\"months\\", \\"weeks\\", \\"days\\", \\"hours\\", \\"minutes\\", and \\"seconds\\"."
      difference: String
      "Configures the locale Moment.js will use to format the date."
      locale: String
    ): Date
    "The document's list of tags."
    tags: [String!]!
    "Alternate languages for the document."
    alternate_languages: [PrismicLinkType!]!
    "The document's Prismic API ID type."
    type: String!
    "The document's Prismic ID."
    prismicId: ID!
    "Marks the document as previewable using Prismic's preview system. Include this field if updates to the document should be previewable by content editors before publishing. **Note: the value of this field is not stable and should not be used directly**."
    _previewable: ID!
  }
`),String(ae).replace("\n"," "));var ae;const ne=(e,t,i)=>{const{actions:a,reporter:n,schema:r,cache:s}=t,{createTypes:o}=a,c=n.activityTimer($("create types"));c.start(),n.verbose($("starting to create types"));const[l,m]=(({schema:e,cache:t,defaultImgixParams:i,defaultPlaceholderImgixParams:a})=>{const n=e=>e.url,r=e=>{var t;return null===(t=e.dimensions)||void 0===t?void 0:t.width},s=e=>{var t;return null===(t=e.dimensions)||void 0===t?void 0:t.height},o=D({name:"PrismicImageFixedType",cache:t}),c=k({name:"PrismicImageFluidType",cache:t});return[[o,c],[e.buildObjectType({name:"PrismicImageType",description:"An image field with optional constrained thumbnails.",interfaces:["PrismicImageInterface"],fields:{alt:"String",copyright:"String",dimensions:"PrismicImageDimensionsType",url:x({resolveUrl:n,defaultImgixParams:i}),fixed:N({type:o,resolveUrl:n,resolveWidth:r,resolveHeight:s,cache:t,defaultImgixParams:i,defaultPlaceholderImgixParams:a}),fluid:_({type:c,resolveUrl:n,resolveWidth:r,resolveHeight:s,cache:t,defaultImgixParams:i,defaultPlaceholderImgixParams:a}),localFile:{type:"File",extensions:{link:{}}},thumbnails:"PrismicImageThumbnailsType"}}),e.buildObjectType({name:"PrismicImageThumbnailType",description:"An image thumbnail with constraints.",interfaces:["PrismicImageInterface"],fields:{alt:"String",copyright:"String",dimensions:"PrismicImageDimensionsType",url:x({resolveUrl:n,defaultImgixParams:i}),fixed:N({type:o,resolveUrl:n,resolveWidth:r,resolveHeight:s,cache:t,defaultImgixParams:i}),fluid:_({type:c,resolveUrl:n,resolveWidth:r,resolveHeight:s,cache:t,defaultImgixParams:i}),localFile:{type:"File",extensions:{link:{}}}}})]]})({schema:r,cache:s,defaultImgixParams:e.imageImgixParams,defaultPlaceholderImgixParams:e.imagePlaceholderImgixParams});o(i),o(l),o(m),o(ie),c.end()},re=async(a,n)=>{const{reporter:r,store:s,webhookBody:o,getNodes:c,actions:{touchNode:l}}=a,{program:m}=s.getState();try{n=(e=>{const t=p(e,L);return f(t,L),t})(n)}catch(e){r.error($("invalid plugin options")),r.panic(e)}const{typeDefs:d,typePaths:u}=((e,t)=>{const{schema:i}=t,a=[],n=e=>{a.push(e)},r=[],s={gatsbyContext:t,enqueueTypeDef:n,enqueueTypePath:(e,t)=>{r.push({path:e,type:t})}};for(const t in e)C(t,e[t],{...s,customTypeApiId:t});return n(i.buildUnionType({name:R.AllDocumentTypes,types:Object.keys(e).map(e=>E(e))})),n(((e,t)=>{const i=e.filter(e=>e.type===R.ImageThumbnail).map(e=>e.path[e.path.length-1]);if(i.length<1)return t.buildScalarType({name:R.ImageThumbnails,serialize:()=>null});const a=i.reduce((e,t)=>(e[t]=R.ImageThumbnail,e),{});return t.buildObjectType({name:R.ImageThumbnails,fields:a})})(r,i)),{typeDefs:a,typePaths:r}})(n.schemas,a);if(o&&"{}"!==JSON.stringify(o)){if(function(e){return!!e&&"object"==typeof e&&"test-trigger"!==e.type&&!!(t=e.apiUrl)&&/^https?:\/\/([^.]+)\.(wroom\.(?:test|io)|prismic\.io)\/api\/?/.test(t);var t}(o)&&function(e,t){return!e.webhookSecret||!(e.webhookSecret&&!t)&&e.webhookSecret===t.secret}(n,o)){c().forEach(e=>l({nodeId:e.id})),ne(n,a,d);const e=o;await async function(e,t,i,a){const{releaseID:n}=e,{reporter:r}=t;r.info($("Processing webhook"));const s=a.documents||[],o=[...a.releases.update||[],...a.releases.addition||[],...a.releases.deletion||[]].reduce((e,t)=>t.id!==n?e:[...e,...t.documents||[]],[]),c=n&&"development"===process.env.NODE_ENV?[...o,...s]:s;r.info($(`checking ${c.length} ${c.length>1?"documents":"document"}`));const l=c.length?await async function(e,t,i){const{repositoryName:a,releaseID:n,accessToken:r,fetchLinks:s,lang:o}=e,{reporter:c}=t,l=await B(a,r),m={};if(n){const e=l.refs.find(e=>e.id===n);e?m.ref=e.ref:c.warn($(`A release with ID "${n}" was not found. Defaulting to the master ref instead.`))}s&&(m.fetchLinks=s),o&&(m.lang=o);const d=function(e,t){const i=[];let a=0;for(;a<e.length;){const t=e.slice(a,a+=100);i.push(t)}return i}(i).map(e=>l.getByIDs(e,m));return(await Promise.all(d)).flatMap(e=>e.results)}(e,t,c):[],m=l.map(e=>e.id),d=c.filter(e=>!1===m.includes(e));d.length&&await async function(e,t){const{reporter:i,actions:a,getNode:n,createNodeId:r}=e,{deleteNode:s}=a;i.info($(`removing ${t.length} ${t.length>1?"documents":"document"}`));const o=t.map(e=>r(e)).map(n).reduce((e,t)=>(s({node:t}),e+1),0);i.info($(`removed ${o} ${o>1?"documents":"document"}`))}(t,d),l.length&&await async function(e,t,i,a){const{reporter:n}=t;n.info($(`Updating ${a.length} ${a.length>1?"documents":"document"}`));const r=ee(e,t,i),s=await Z(a,r);n.info($(`Updated ${s.length} ${s.length>1?"documents":"document"} `))}(e,t,i,l),r.info($("Processed webhook"))}(n,a,u,e)}}else ne(n,a,d),await(async(e,t,i)=>{const{reporter:a}=t,n=a.activityTimer($("fetch documents")),r=a.activityTimer($("create nodes"));n.start(),a.verbose($("starting to fetch documents"));const s=await(async(e,t)=>{const{repositoryName:i,releaseID:a,accessToken:n,fetchLinks:r,lang:s}=e,{reporter:o}=t,c=await B(i,n),l={};if(a){const e=c.refs.find(e=>e.id===a);e?l.ref=e.ref:o.warn($(`A release with ID "${a}" was not found. Defaulting to the master ref instead.`))}return r&&(l.fetchLinks=r),s&&(l.lang=s),await q(c,l,1,100,[],o)})(e,t);a.verbose($(`fetched ${s.length} documents`)),n.end(),r.start(),a.verbose($("starting to create nodes"));const o=ee(e,t,i);await Z(s,o),r.end()})(n,a,u),((a,n,r,s)=>{const{reporter:o}=n,c=o.activityTimer($("write out type paths"));c.start(),o.verbose($("starting to write out type paths"));const l=i(JSON.stringify(a.schemas)),m=t.resolve(s.directory,"public",[a.typePathsFilenamePrefix,l,".json"].filter(e=>null!=e).join(""));o.verbose($("writing out type paths to : "+m)),e.writeFileSync(m,JSON.stringify(r)),c.end()})(n,a,u,m)},se=i=>{const{store:a}=i,{program:n}=a.getState();e.copyFileSync(t.resolve(__dirname,"../fragments.js"),t.resolve(n.directory,".cache/fragments/gatsby-source-prismic-fragments.js"))};export{se as onPreExtractQueries,re as sourceNodes};
//# sourceMappingURL=gatsby-node.modern.js.map
