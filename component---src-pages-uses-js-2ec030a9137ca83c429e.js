(self.webpackChunkchandujs_dev_web=self.webpackChunkchandujs_dev_web||[]).push([[941],{5769:function(e,t,n){"use strict";var a=n(5318);t.MS=s;var i=a(n(7154)),r=a(n(7316)),o=a(n(7294)),l=a(n(5697));function s(e){var t=e.eventCategory,n=e.eventAction,a=e.eventLabel,l=e.eventValue,s=(0,r.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return o.default.createElement("a",(0,i.default)({},s,{onClick:function(i){"function"==typeof e.onClick&&e.onClick(i);var r=!0;return(0!==i.button||i.altKey||i.ctrlKey||i.metaKey||i.shiftKey||i.defaultPrevented)&&(r=!1),e.target&&"_self"!==e.target.toLowerCase()&&(r=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:a||e.href,eventValue:l,transport:r?"beacon":"",hitCallback:function(){r&&(document.location=e.href)}}):r&&(document.location=e.href),!1}}))}s.propTypes={href:l.default.string,target:l.default.string,eventCategory:l.default.string,eventAction:l.default.string,eventLabel:l.default.string,eventValue:l.default.number,onClick:l.default.func}},1584:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a,i,r,o,l,s,c,m,d,f,p,h=n(5761),g=n(1788),v=n(5444),y=n(7294),u=n(5186),b=n(5253),Z=n(5769),k=n(7027),w=n(5058),x=function(e){function t(){for(var t,n=arguments.length,g=new Array(n),y=0;y<n;y++)g[y]=arguments[y];return(t=e.call.apply(e,[this].concat(g))||this).render=function(){var e=(0,b.iv)(a||(a=(0,h.Z)(["\n      ","\n      body {\n        color: ",";\n        background-color: ",";\n      }\n    "])),k.nz,t.props.lightsOn?k.MQ.secondaryLightsOn:k.MQ.secondary,t.props.lightsOn?k.MQ.mainLightsOn:k.MQ.main);return(0,b.tZ)(v.i1,{query:"1617812919",render:function(n){var a=n.sanitySettings,g=n.sanityResume,y=n.site.siteMetadata,x=(0,w.M)(g.name),E={title:t.props.title||a.title,description:t.props.description||""},M=t.props.cover||y.siteUrl+"/images/cover.png";return(0,b.tZ)("div",{className:t.props.lightsOn?"lights-on":"",css:(0,b.iv)(i||(i=(0,h.Z)(["\n                .side-bar {\n                  position: fixed;\n                  top: 0;\n                  bottom: 0;\n                  width: 10rem;\n                  padding: 2rem;\n                  display: flex;\n                  flex-wrap: wrap;\n                  flex-direction: column;\n                  justify-content: space-between;\n                  z-index: 2;\n\n                  @media screen and (max-width: 766px) {\n                    position: initial;\n                    display: block;\n                    width: 100%;\n                    padding-bottom: 0;\n                  }\n                }\n              "])))},(0,b.tZ)(u.q,{defaultTitle:E.title,meta:[{name:"theme-color",content:k.MQ.main},{name:"description",content:E.description},{itemprop:"name",content:E.title},{itemprop:"description",content:E.description},{itemprop:"image",content:M},{property:"og:type",content:"website"},{property:"og:url",content:y.siteUrl},{property:"og:title",content:E.title},{property:"og:description",content:E.description},{property:"og:image",content:M},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:E.title},{name:"twitter:description",content:E.description},{name:"twitter:image",content:M},{name:"p:domain_verify",content:"6ab38d0b388f8724fc4382d381928e1f"}]},(0,b.tZ)("html",{lang:"en"})),(0,b.tZ)(b.xB,{styles:e}),(0,b.tZ)("div",{className:"side-bar",css:(0,b.iv)(r||(r=(0,h.Z)(["\n                  left: 0;\n                "])))},(0,b.tZ)(v.rU,{to:"/",css:(0,b.iv)(o||(o=(0,h.Z)(["\n                    letter-spacing: 0.5rem;\n                    text-transform: uppercase;\n                    font-size: 0.8rem;\n                    line-height: 2rem;\n                    position: relative;\n                    top: -0.6rem;\n                    > div {\n                      @media screen and (max-width: 766px) {\n                        display: inline;\n                        white-space: nowrap;\n                      }\n                    }\n                  "])))},(0,b.tZ)("div",{className:"mr-3"},x.first),(0,b.tZ)("div",null,x.last)),(0,b.tZ)(Z.MS,{eventLabel:"Contact",href:"mailto:"+a.email,css:(0,b.iv)(l||(l=(0,h.Z)(["\n                    border-radius: 100%;\n                    background-color: ",";\n                    width: 3rem;\n                    height: 3rem;\n                    display: block;\n                    position: relative;\n                    transition: background-color 0.5s;\n                    color: transparent !important;\n                    .lights-on & {\n                      background-color: ",';\n                    }\n                    &:before,\n                    &:after {\n                      content: "";\n                      border: 1px solid rgba(0, 0, 0, 0.6);\n                      position: absolute;\n                      left: 50%;\n                      top: 50%;\n                      transform: translate(-50%, -50%);\n                      transition: border-color 0.5s;\n                      .lights-on & {\n                        border-color: rgba(255, 255, 255, 0.9);\n                      }\n                    }\n                    &:before {\n                      width: 1.5rem;\n                      height: 1.1rem;\n                      border-radius: 3px;\n                    }\n                    &:after {\n                      width: 1rem;\n                      height: 1rem;\n                      border-left: 0;\n                      border-top: 0;\n                      transform: translate(-50%, -50%) rotate(45deg);\n                      margin-top: -5px;\n                    }\n                    @media screen and (max-width: 766px) {\n                      display: none;\n                    }\n                  '])),k.wL.accent,k.MQ.accentLightsOn)},"email")),(0,b.tZ)("div",{className:"side-bar text-right",css:(0,b.iv)(s||(s=(0,h.Z)(["\n                  right: 0;\n                  width: 8rem;\n                  @media screen and (max-width: 766px) {\n                    position: initial;\n                    top: 0;\n                    right: 0;\n                    bottom: initial;\n                    width: initial;\n                    padding-top: 1rem !important;\n                    text-align: left !important;\n                    margin-bottom: -1rem;\n                  }\n                "])))},(0,b.tZ)("nav",{css:(0,b.iv)(c||(c=(0,h.Z)(['\n                    a {\n                      font-weight: bold;\n                      text-transform: lowercase;\n                      font-size: 1.4rem;\n                      position: relative;\n                      transition-duration: 0.2s;\n                      transform: translateY(0.1rem);\n                      display: inline-block;\n                      margin-bottom: 2rem;\n                      margin-top: -1rem;\n                      &:before {\n                        content: "";\n                        border-bottom: 2px solid;\n                        position: absolute;\n                        left: 0;\n                        right: 0;\n                        bottom: 0;\n                        color: ',";\n                        transition-duration: 0.2s;\n                        opacity: 0;\n                        transform: translateY(-0.7rem);\n                        transition: color 0.5s;\n                        .lights-on & {\n                          color: ",";\n                        }\n                      }\n                      &.active {\n                        color: ",";\n                        .lights-on & {\n                          color: ",";\n                        }\n                      }\n                      &:hover {\n                        transform: translateY(0rem);\n                        color: #fff;\n                        .lights-on & {\n                          color: #000;\n                        }\n                        &:before {\n                          opacity: 1;\n                          transform: translateY(0rem);\n                        }\n                      }\n                      @media screen and (max-width: 766px) {\n                        margin-right: 2rem;\n                        margin-bottom: 1rem;\n                        margin-top: 0rem;\n                      }\n                    }\n                    @media screen and (min-width: 766px) and (max-height: 610px) {\n                      right: 3.8rem;\n                      position: relative;\n                    }\n                  "])),k.wL.accent,k.MQ.accentLightsOn,k.wL.accent,k.MQ.accentLightsOn)},(0,b.tZ)(v.rU,{className:t.props.isWorkPage?"active":"",activeClassName:"active",to:"/work"},"Work"),(0,b.tZ)(v.rU,{className:t.props.isBlogPage?"active":"",activeClassName:"active",to:"/blog"},"Blog"),(0,b.tZ)(v.rU,{activeClassName:"active",to:"/about"},"About"),(0,b.tZ)(v.rU,{activeClassName:"active",to:"/uses"},"Uses")),(0,b.tZ)("div",{css:(0,b.iv)(m||(m=(0,h.Z)(["\n                    right: 2rem;\n                    bottom: 2rem;\n                    position: absolute;\n                    @media screen and (max-width: 766px) {\n                      position: absolute;\n                      left: 0;\n                      right: 0;\n                      bottom: initial;\n                      -webkit-box-ordinal-group: 2;\n                      order: 1;\n                      width: 100%;\n                      display: block;\n                      padding-left: 1.6rem;\n                    }\n                    @media screen and (min-width: 766px) and (max-height: 610px) {\n                      bottom: initial;\n                      top: 0.7rem;\n                      right: 1.8rem;\n                    }\n                    a {\n                      display: block;\n                      width: 2.3rem;\n                      height: 2.3rem;\n                      margin-top: 1rem;\n                      background-position: center;\n                      background-size: 1.5rem;\n                      background-repeat: no-repeat;\n                      opacity: 0.5;\n                      transition-duration: 0.2s;\n                      font-size: 0;\n                      @media screen and (max-width: 766px) {\n                        display: inline-block;\n                      }\n                      .lights-on & {\n                        opacity: 0.7;\n                        filter: invert(1);\n                      }\n                      &:last-child {\n                        margin-bottom: 0;\n                      }\n                      &:hover {\n                        opacity: 1;\n                      }\n                    }\n                  "])))},g.socialLinks.map((function(e,t){return(0,b.tZ)(Z.MS,{key:t,eventLabel:"Social Media ("+e.name+")",href:e.url,target:"_blank",className:"social-icon",rel:"noopener noreferrer",alt:e.name,css:(0,b.iv)(d||(d=(0,h.Z)(['\n                          background-image: url("','");\n                        '])),e.icon.asset.localFile.childImageSharp.resize.src)},e.name)})))),(0,b.tZ)("div",{css:(0,b.iv)(f||(f=(0,h.Z)(["\n                  animation: fadeIn 0.2s ease-in-out;\n\n                  @keyframes fadeIn {\n                    0% {\n                      opacity: 0;\n                      margin-top: 0.5rem;\n                    }\n                    100% {\n                      opacity: 1;\n                      margin-top: 0;\n                    }\n                  }\n                "])))},t.props.children,(0,b.tZ)("div",{css:(0,b.iv)(p||(p=(0,h.Z)(["\n                    top: 50%;\n                    left: 50%;\n                    z-index: -1;\n                    opacity: 0.1;\n                    position: fixed;\n                    transform: translate(calc(50% - 35rem), -50%);\n                    max-height: 100%;\n\n                    .lights-on & {\n                      opacity: 0.05;\n                      filter: grayscale(1);\n                    }\n\n                    @media screen and (max-width: 1000px) {\n                      transform: translate(-50%, -50%);\n                    }\n                    @media screen and (max-width: 766px) {\n                      transform: translate(-25%, -50%);\n                    }\n                  "]))),alt:""},t.props.pageBg)))}})},t}return(0,g.Z)(t,e),t}(y.Component)},3647:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a,i,r,o,l,s,c=n(5761),m=n(1788),d=n(5444),f=n(5253),p=n(7294),h=n(1584),g=n(7027),v=n(5769),y=n(7556),u=n.n(y),b=function(e){function t(){for(var t,n=arguments.length,m=new Array(n),p=0;p<n;p++)m[p]=arguments[p];return(t=e.call.apply(e,[this].concat(m))||this).render=function(){return(0,f.tZ)(h.Z,{pageBg:(0,f.tZ)(u(),null),title:"Uses - Chandu J S",description:"Stuff I use in a daily basis."},(0,f.tZ)("div",{css:(0,f.iv)(a||(a=(0,c.Z)(["\n            li {\n              line-height: 2;\n              &:hover > span {\n                color: ",";\n                .lights-on & {\n                  color: ",";\n                }\n              }\n            }\n          "])),g.wL.accent,g.MQ.accentLightsOn),className:"content-wrap"},(0,f.tZ)("div",{className:"h1 font-weight-bold mb-3"},(0,f.tZ)("span",{className:"high"},"Uses"),(0,f.tZ)("span",{className:"blinker"},"."),(0,f.tZ)("br",null)),(0,f.tZ)("div",{className:"h5 mb-4 pb-4",css:(0,f.iv)(i||(i=(0,c.Z)(["\n              line-height: 1.6;\n            "])))},"Curious to know what gear I use on a daily basis? ",(0,f.tZ)("br",null),"My setup changes from time to time. Will try to keep this page updated.",(0,f.tZ)("span",{css:(0,f.iv)(r||(r=(0,c.Z)(["\n                margin-left: 5px;\n              "]))),role:"img","aria-label":"smile"},"😁")),(0,f.tZ)(d.i1,{query:"3120352352",render:function(e){var t=e.allSanityUses;return(0,f.tZ)("div",{className:"row"},t.edges.map((function(e,t){var n=e.node,a=n.items,i=n.categoryName,r=n.description;return(0,f.tZ)("div",{key:t,className:"col-lg-4 col-md-6 mb-4 mt-1"},(0,f.tZ)("div",{className:"h3 mb-2"},i),(0,f.tZ)("p",{className:r?"mb-4":"pb-0"},r),(0,f.tZ)("ul",{className:"no-bullets"},a.map((function(e,t){return(0,f.tZ)("li",{key:t},e.emoji?(0,f.tZ)("span",{role:"img","aria-label":"smile",css:(0,f.iv)(o||(o=(0,c.Z)(["\n                                display: inline-block;\n                                width: 2.3rem;\n                              "])))},e.emoji):"",(0,f.tZ)("span",{css:(0,f.iv)(l||(l=(0,c.Z)(["\n                              font-weight: ",";\n                            "])),e.details?"bold":"inherit")},e.url?(0,f.tZ)(v.MS,{eventLabel:"Uses ("+e.title+")",href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title):e.title),e.details?(0,f.tZ)("div",{className:"mb-3",css:(0,f.iv)(s||(s=(0,c.Z)(["\n                                line-height: 1.5;\n                                margin-left: 2.3rem;\n                              "])))},e.details):"")}))))})))}})))},t}return(0,m.Z)(t,e),t}(p.Component)},7556:function(e,t,n){var a=n(7294);function i(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"code_thinking"),a.createElement("polygon",{fill:"#ffb9b9",points:"77.591 390.495 52.772 388.84 61.045 426.069 89.173 414.487 77.591 390.495",key:1}),a.createElement("polygon",{fill:"#2f2e41",points:"305.1 321.001 247.189 264.744 214.096 290.391 148.739 368.985 156.185 380.567 235.606 326.792 289.381 397.113 340.674 371.467 305.1 321.001",key:2}),a.createElement("polygon",{points:"305.1 321.001 247.189 264.744 214.096 290.391 148.739 368.985 156.185 380.567 235.606 326.792 289.381 397.113 340.674 371.467 305.1 321.001",opacity:".1",key:3}),a.createElement("path",{fill:"#ffb9b9",d:"M368.84451,583.28933l-7.44576,5.79115-60.39337-20.68267-14.06421-5.79114-28.12842,5.79114s0-23.16458,26.47381-22.33727l27.30111,6.61845,32.265,2.48192Z",transform:"translate(-58.78049 -225.05938)",key:4}),a.createElement("polygon",{fill:"#2f2e41",points:"363.839 419.451 345.638 431.033 324.128 431.033 224.024 393.804 77.591 420.278 73.454 388.84 207.478 330.102 324.956 368.985 363.839 419.451",key:5}),a.createElement("path",{fill:"#ffb9b9",d:"M305.14191,497.24946l-12.4096,2.48191-2.70423-3.15494a16.71669,16.71669,0,0,1-2.25961-18.355h0l34.74687-45.50186s9.92768-22.33728,25.6465-13.23691-13.2369,23.99189-13.2369,23.99189l-17.37344,27.30112,1.65461,14.06421Z",transform:"translate(-58.78049 -225.05938)",key:6}),a.createElement("circle",{cx:"324.956",cy:"186.15",r:"32.265",fill:"#ffb9b9",key:7}),a.createElement("path",{fill:"#ffb9b9",d:"M369.25817,434.78781,384.14968,470.362l35.57418-14.89151s-11.58229-28.12842-11.58229-28.95573S369.25817,434.78781,369.25817,434.78781Z",transform:"translate(-58.78049 -225.05938)",key:8}),a.createElement("path",{fill:"#575a89",d:"M467.21951,540.02944a185.3827,185.3827,0,0,1-9.09209,57.34061l-2.41572,7.42925-11.5823,52.94762-12.40959,3.30922-9.10037-11.58229L404.41869,636.237l-13.2369-21.51-11.35062-18.91222-3.5409-5.907-12.4096-62.048L316.7242,501.386l-15.71882-2.48192,3.30923-9.10037,14.06421-19.02805L332.443,469.121l4.13653-3.30922,3.30923,1.65461,13.2369-7.44576,4.13653,1.65462,24.19044,2.25025,14.693-3.07756L417.275,449.50558l8.65364,1.41471,29.783,24.8192A185.22006,185.22006,0,0,1,467.21951,540.02944Z",transform:"translate(-58.78049 -225.05938)",key:9}),a.createElement("path",{fill:"#2f2e41",d:"M119.17072,628.36472s7.40995-12.55867,4.28015-14.02487-16.42157-7.31125-16.42157-7.31125l-19.49215-6.45971s-28.126-41.801-28.74337-5.45025,20.47916,45.08869,20.47916,45.08869S98.0885,680.7,108.74669,674.243,130.07,645.86717,130.07,645.86717,110.85,635.53508,119.17072,628.36472Z",transform:"translate(-58.78049 -225.05938)",key:10}),a.createElement("polygon",{points:"399.413 307.764 367.975 328.447 321.051 370.755 317.51 364.848 307.582 315.21 310.064 315.21 335.711 268.054 399.413 307.764",opacity:".1",key:11}),a.createElement("polygon",{fill:"#575a89",points:"335.711 263.09 310.064 310.246 300.964 310.246 295.173 326.792 281.936 330.102 317.51 368.985 367.975 323.483 399.413 302.8 335.711 263.09",key:12}),a.createElement("path",{fill:"#2f2e41",d:"M358.64047,387.21919l-3.49581,1.345a4.88017,4.88017,0,0,1-1.24759-6.86l-6.4602-.30231a48.78211,48.78211,0,0,1,72.82519-5.86988c.29412-1.013,3.50037.95787,4.80938,2.95626.43984-1.64837,3.4461,6.31994,4.5094,11.95247.49227-1.8754,2.385,1.15218.72681,4.05727,1.05066-.15351,1.52525,2.53462.71189,4.0322,1.1494-.54.95568,2.66884-.29057,4.81326,1.64017-.14573-12.93544,22.47575-18.83687,35.696-1.71358-7.87343-3.64027-16.1643-9.16573-22.02916-.93919-.99689-1.96768-1.90488-2.9945-2.81126l-5.55369-4.90228c-6.4579-5.70042-12.33246-12.7359-20.93549-14.8664-5.91224-1.46413-9.65052-1.7947-6.42852-8.45681-2.911,1.21478-5.6294,3.02129-8.5665,4.14957C358.28712,389.19225,358.69761,388.15058,358.64047,387.21919Z",transform:"translate(-58.78049 -225.05938)",key:13}),a.createElement("circle",{cx:"341.088",cy:"189.873",r:"5.791",fill:"#ffb9b9",key:14}),a.createElement("rect",{width:"28",height:"28",x:"178.439",y:"59.71",fill:"#6c63ff",key:15}),a.createElement("path",{fill:"#3f3d56",d:"M282.21951,296.76953h-34v-34h34Zm-32.52174-1.47826h31.04348V264.24779H249.69777Z",transform:"translate(-58.78049 -225.05938)",key:16}),a.createElement("rect",{width:"28",height:"28",x:"108.808",y:"374.617",fill:"#6c63ff",transform:"translate(403.98758 -61.23638) rotate(74.06317)",key:17}),a.createElement("path",{fill:"#3f3d56",d:"M133.24341,417.87594l-9.33563-32.69321,32.69321-9.33564,9.33563,32.69321Zm-7.50829-31.67767,8.52384,29.85032,29.85032-8.52383-8.52384-29.85033Z",transform:"translate(-58.78049 -225.05938)",key:18}),a.createElement("rect",{width:"28",height:"28",x:"118.487",y:"239.049",fill:"#6c63ff",transform:"translate(349.04671 103.9752) rotate(133.06281)",key:19}),a.createElement("path",{fill:"#3f3d56",d:"M112.78106,277.063l23.21519-24.8406,24.84059,23.21519-23.21518,24.84059Zm23.28586-22.75121-21.19647,22.68054L137.551,298.18876l21.19647-22.68054Z",transform:"translate(-58.78049 -225.05938)",key:20}),a.createElement("path",{fill:"#3f3d56",d:"M1085.0123,230.4217H824.8427v-5.36232h-117.971v5.36232H445.62961a17.5985,17.5985,0,0,0-17.59851,17.59851V604.2724A17.59855,17.59855,0,0,0,445.62961,621.871H1085.0123a17.59855,17.59855,0,0,0,17.59851-17.59857V248.02021A17.5985,17.5985,0,0,0,1085.0123,230.4217Z",transform:"translate(-58.78049 -225.05938)",key:21}),a.createElement("rect",{width:"627.391",height:"353.913",x:"392.845",y:"36.464",fill:"#6c63ff",key:22}),a.createElement("circle",{cx:"706.004",cy:"20.377",r:"6.435",fill:"#6c63ff",key:23}),a.createElement("polygon",{points:"840.813 390.377 392.845 390.377 392.845 36.464 840.813 390.377",opacity:".1",key:24}),a.createElement("circle",{cx:"491.013",cy:"303.587",r:"60.307",fill:"#f2f2f2",key:25}),a.createElement("path",{fill:"#3f3d56",d:"M563.21822,573.97237A75.01578,75.01578,0,1,1,638.234,498.9566,75.10088,75.10088,0,0,1,563.21822,573.97237Zm0-149.05095A74.03518,74.03518,0,1,0,637.2534,498.9566,74.119,74.119,0,0,0,563.21822,424.92142Z",transform:"translate(-58.78049 -225.05938)",key:26}),a.createElement("rect",{width:"58.605",height:"12.246",x:"852.392",y:"227.332",fill:"#3f3d56",key:27}),a.createElement("rect",{width:"200.307",height:"5.248",x:"781.541",y:"131.989",fill:"#3f3d56",key:28}),a.createElement("rect",{width:"200.307",height:"5.248",x:"781.541",y:"148.608",fill:"#3f3d56",key:29}),a.createElement("rect",{width:"200.307",height:"5.248",x:"781.541",y:"165.228",fill:"#3f3d56",key:30}),a.createElement("rect",{width:"200.307",height:"5.248",x:"781.541",y:"181.847",fill:"#3f3d56",key:31}),a.createElement("rect",{width:"200.307",height:"5.248",x:"781.541",y:"198.467",fill:"#3f3d56",key:32}),a.createElement("rect",{width:"24.492",height:"24.492",x:"957.356",y:"43.644",fill:"#f2f2f2",key:33}),a.createElement("path",{fill:"#3f3d56",d:"M1051.99965,304.56621h-29.74v-29.74h29.74Zm-28.44691-1.293h27.15387V276.1193h-27.15387Z",transform:"translate(-58.78049 -225.05938)",key:34}),a.createElement("path",{fill:"#3f3d56",d:"M1120.2266,609.00139h-61.22932v-4.41153a.87467.87467,0,0,0-.8747-.87471h-20.99291a.87468.87468,0,0,0-.8747.87471v4.41153H1023.1344v-4.41153a.87468.87468,0,0,0-.8747-.87471h-20.99291a.87468.87468,0,0,0-.87471.87471v4.41153H987.27152v-4.41153a.87468.87468,0,0,0-.87471-.87471H965.4039a.87468.87468,0,0,0-.8747.87471v4.41153H951.40863v-4.41153a.87468.87468,0,0,0-.8747-.87471H929.541a.87467.87467,0,0,0-.8747.87471v4.41153H915.54575v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H879.68286v-4.41153a.87468.87468,0,0,0-.8747-.87471H857.81525a.87468.87468,0,0,0-.8747.87471v4.41153H843.82v-4.41153a.87468.87468,0,0,0-.8747-.87471H678.50083a.87468.87468,0,0,0-.8747.87471v4.41153H664.50556v-4.41153a.87468.87468,0,0,0-.87471-.87471H642.638a.87468.87468,0,0,0-.87471.87471v4.41153H628.64267v-4.41153a.87467.87467,0,0,0-.8747-.87471H606.77506a.87468.87468,0,0,0-.8747.87471v4.41153H592.77979v-4.41153a.87468.87468,0,0,0-.8747-.87471H570.91218a.87468.87468,0,0,0-.87471.87471v4.41153H556.91691v-4.41153a.87468.87468,0,0,0-.87471-.87471H535.04929a.87468.87468,0,0,0-.8747.87471v4.41153H521.054v-4.41153a.87468.87468,0,0,0-.8747-.87471H499.18641a.87467.87467,0,0,0-.8747.87471v4.41153H485.19114v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H422.21241a20.99292,20.99292,0,0,0-20.9929,20.99291v9.4925a20.99291,20.99291,0,0,0,20.9929,20.99285H1120.2266a20.99292,20.99292,0,0,0,20.99291-20.99285v-9.4925A20.99293,20.99293,0,0,0,1120.2266,609.00139Z",transform:"translate(-58.78049 -225.05938)",key:35})])}i.defaultProps={id:"e189b3b9-b88e-4ad6-86fc-a3cf637fca9f",width:"1082.439",height:"449.881","data-name":"Layer 1",viewBox:"0 0 1082.439 449.881"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-pages-uses-js-2ec030a9137ca83c429e.js.map