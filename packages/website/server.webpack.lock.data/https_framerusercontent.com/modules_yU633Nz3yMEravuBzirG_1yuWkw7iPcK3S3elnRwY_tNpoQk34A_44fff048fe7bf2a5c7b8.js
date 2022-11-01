// Generated by Framer (c3ab1ed)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,SVG,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import{AllControls,Gradient}from"https://framerusercontent.com/modules/z3nMGg5wkheHH1MRKNH0/YCH7l8y9rkFSE6sNGsLq/DesignSystem.js";import{ActiveTitle,ArrowLeft,ArrowRight,HideScrollBar,insertCanvasAsImage,Tool3dAxis,ToolUndo,ToolZoomOut,UrlInput}from"https://framerusercontent.com/modules/yRl2cTj9EYORBGzVcYOX/AXR2UThKMeM9aXDoYfkh/Overrides.js";import{TailwindCSS}from"https://framerusercontent.com/modules/eV6Cwcfo8Bh3bvsz3IXI/vu3NC887AyJm8e1oQ2KH/TailwindCSS.js";import Text from"https://framerusercontent.com/modules/XqgKXxDc38KzNEOg3QqW/rRMXwig2AbYgfFeZo2I7/Text.js";import URLInput from"https://framerusercontent.com/modules/eQkCxDQDbDD9SfKhc7p6/2mhUHW69JN1LRZ2Bq5Pq/h2Wk0zVrf.js";import Tools from"https://framerusercontent.com/modules/wqnL792mTpIh6KOqQVE8/1FtEnvNEzwXFf94y3uCc/XWP78T8ip.js";const TextFonts=getFonts(Text);const GradientFonts=getFonts(Gradient);const URLInputFonts=getFonts(URLInput);const URLInputUrlInput=UrlInput(URLInput);const MotionDivArrowLeft=ArrowLeft(motion.div);const TextActiveTitle=ActiveTitle(Text);const MotionDivArrowRight=ArrowRight(motion.div);const ToolsFonts=getFonts(Tools);const ToolsToolUndo=ToolUndo(Tools);const ToolsTool3dAxis=Tool3dAxis(Tools);const ToolsToolZoomOut=ToolZoomOut(Tools);const AllControlsFonts=getFonts(AllControls);const TailwindCSSFonts=getFonts(TailwindCSS);const MotionDivHideScrollBar=HideScrollBar(motion.div);const MotionDivInsertCanvasAsImage=insertCanvasAsImage(motion.div);const cycleOrder=["ASohgaYfq","jJpM4l5cr"];const variantClassNames={ASohgaYfq:"framer-v-1pwgz07",jJpM4l5cr:"framer-v-5hfd4w"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={default:"ASohgaYfq",input:"jJpM4l5cr"};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="ASohgaYfq",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"ASohgaYfq",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onKeyDowncdlrqq=activeVariantCallback(async(...args)=>{setVariant("ASohgaYfq");});const onSubmitcdlrqq=activeVariantCallback(async(...args)=>{setVariant("ASohgaYfq");});const tapoq8wmn=activeVariantCallback(async(...args)=>{setVariant("jJpM4l5cr");});const tapcdlrqq=activeVariantCallback(async(...args)=>{setVariant("ASohgaYfq");});const isDisplayed1=()=>{if(baseVariant==="jJpM4l5cr")return true;return false;};const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-1qzC5",classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-1pwgz07",className),"data-framer-name":"default",layoutDependency:layoutDependency,layoutId:"ASohgaYfq",ref:ref,style:{...style},transition:transition,...addPropertyOverrides({jJpM4l5cr:{"data-framer-name":"input"}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1cqj63m","data-framer-name":"previewWrap",layoutDependency:layoutDependency,layoutId:"p4T5xNE_k",style:{backgroundColor:"rgb(0, 0, 0)"},transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-1t2zrgt-container",layoutDependency:layoutDependency,layoutId:"P47QAZfys-container",transformTemplate:(_,t)=>`translate(-50%, -50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(Text,{color:"rgb(255, 255, 255)",fontFamily:"Inter",fontSize:14,fontWeight:600,height:"100%",id:"P47QAZfys",layoutId:"P47QAZfys",lineHeight:1.5,text:"Loading",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1ay7sco-container",layoutDependency:layoutDependency,layoutId:"tGeOu2MHd-container",transition:transition,children:/*#__PURE__*/ _jsx(Gradient,{activeTab:"Colors",animate:"on",brightness:1.2,cameraZoom:1,cAzimuthAngle:180,cDistance:2.6,color1:"rgb(255, 80, 5)",color2:"rgb(219, 186, 149)",color3:"rgb(208, 188, 225)",control:"query",cPolarAngle:90,envPreset:"city",grain:"on",height:"100%",id:"tGeOu2MHd",layoutId:"tGeOu2MHd",lightType:"3d",positionX:-1.4,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:"defaults",style:{height:"100%",width:"100%"},type:"plane",uAmplitude:.1,uDensity:1.3,uFrequency:.1,uSpeed:.6,uStrength:4,uTime:0,width:"100%",zoomOut:false})}),isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-1p7lc8a-container",layoutDependency:layoutDependency,layoutId:"xVsNuZpf5-container",transformTemplate:(_,t)=>`translate(-50%, -50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(URLInputUrlInput,{height:"100%",id:"xVsNuZpf5",layoutId:"xVsNuZpf5",onKeyDown:onKeyDowncdlrqq,onSubmit:onSubmitcdlrqq,variant:"lbVuQwqk5",width:"100%"})})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-18e3n0t",layoutDependency:layoutDependency,layoutId:"zsa2gFwHi",style:{backgroundColor:"rgb(56, 56, 56)"},transition:transition,children:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-af8hm3",layoutDependency:layoutDependency,layoutId:"BHm_Pyq5B",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-z1j5eo-container",layoutDependency:layoutDependency,layoutId:"cWpxa6QTm-container",transition:transition,children:/*#__PURE__*/ _jsx(Text,{color:"rgb(255, 255, 255)",fontFamily:"Inter",fontSize:14,fontWeight:600,height:"100%",id:"cWpxa6QTm",layoutId:"cWpxa6QTm",lineHeight:1.5,text:"Preset",width:"100%"})}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1rpa8fh",layoutDependency:layoutDependency,layoutId:"uY8fShLYK",style:{backgroundColor:"rgb(82, 82, 82)",borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTopLeftRadius:8,borderTopRightRadius:8},transition:transition,children:[/*#__PURE__*/ _jsx(MotionDivArrowLeft,{className:"framer-ctetbh","data-framer-name":"button",layoutDependency:layoutDependency,layoutId:"tlLpsmFTi",style:{rotate:180},transition:transition,children:/*#__PURE__*/ _jsx(SVG,{className:"framer-writyi","data-framer-name":"graphic",fill:"hsl(0, 0%, 100%)",intrinsicHeight:24,intrinsicWidth:24,layoutDependency:layoutDependency,layoutId:"SQoqOYeW2",style:{rotate:180},svg:'<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIosIcon"><path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/></svg>',transition:transition,withExternalLayout:true})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1ofuadp-container",layoutDependency:layoutDependency,layoutId:"WG8sHQ7Sc-container",transition:transition,children:/*#__PURE__*/ _jsx(TextActiveTitle,{color:"rgb(255, 255, 255)",fontFamily:"Inter",fontSize:14,fontWeight:600,height:"100%",id:"WG8sHQ7Sc",layoutId:"WG8sHQ7Sc",lineHeight:1.5,text:"Halo",width:"100%"})}),/*#__PURE__*/ _jsx(MotionDivArrowRight,{className:"framer-y0b0qn","data-framer-name":"button",layoutDependency:layoutDependency,layoutId:"T53_afyFA",transition:transition,children:/*#__PURE__*/ _jsx(SVG,{className:"framer-8qnrqk","data-framer-name":"graphic",fill:"hsl(0, 0%, 100%)",intrinsicHeight:24,intrinsicWidth:24,layoutDependency:layoutDependency,layoutId:"yA8mKgD2k",style:{rotate:180},svg:'<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIosIcon"><path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/></svg>',transition:transition,withExternalLayout:true})})]})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-kq0p7r",layoutDependency:layoutDependency,layoutId:"RDGiziIji",style:{backgroundColor:"rgb(82, 82, 82)",borderBottomLeftRadius:100,borderBottomRightRadius:100,borderTopLeftRadius:100,borderTopRightRadius:100},transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-xcuylx-container",layoutDependency:layoutDependency,layoutId:"ccYBEn5cQ-container",transition:transition,children:/*#__PURE__*/ _jsx(ToolsToolUndo,{axisIcon:false,feather:true,height:"100%",hoverText:"undo",icon:"corner-up-left",id:"ccYBEn5cQ",layoutId:"ccYBEn5cQ",variant:"QOKSNfwYS",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-pwr3f4-container",layoutDependency:layoutDependency,layoutId:"WnXvem91x-container",transition:transition,children:/*#__PURE__*/ _jsx(ToolsTool3dAxis,{axisIcon:true,feather:false,height:"100%",hoverText:"3d axis",icon:"corner-up-left",id:"WnXvem91x",layoutId:"WnXvem91x",variant:"PJFWvoY8M",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1hb769c-container",layoutDependency:layoutDependency,layoutId:"z8Ve0GW4z-container",transition:transition,children:/*#__PURE__*/ _jsx(ToolsToolZoomOut,{axisIcon:false,feather:true,height:"100%",hoverText:"zoom out",icon:"minimize-2",id:"z8Ve0GW4z",layoutId:"z8Ve0GW4z",variant:"PJFWvoY8M",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-600kf6-container",layoutDependency:layoutDependency,layoutId:"beqsTygCF-container",transition:transition,children:/*#__PURE__*/ _jsx(Tools,{axisIcon:false,feather:true,height:"100%",hoverText:"import url",icon:"link",id:"beqsTygCF",layoutId:"beqsTygCF",tap:tapoq8wmn,variant:"QOKSNfwYS",width:"100%",...addPropertyOverrides({jJpM4l5cr:{tap:tapcdlrqq,variant:"cRsgIXvK1"}},baseVariant,gestureVariant)})})]})]}),/*#__PURE__*/ _jsxs(MotionDivHideScrollBar,{className:"framer-1jrti1w","data-framer-name":"scrollWrap",layoutDependency:layoutDependency,layoutId:"AeGXfvLJg",style:{backgroundColor:"rgb(246, 248, 248)"},transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-b4qjhb-container",layoutDependency:layoutDependency,layoutId:"CRnJVnMOu-container",transformTemplate:(_,t)=>`translateX(-50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(AllControls,{height:"100%",id:"CRnJVnMOu",isFigma:true,isMobile:true,layoutId:"CRnJVnMOu",style:{width:"100%"},width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-16fv3vz-container",layoutDependency:layoutDependency,layoutId:"zHhBZbUGx-container",style:{opacity:0},transition:transition,children:/*#__PURE__*/ _jsx(TailwindCSS,{height:"100%",id:"zHhBZbUGx",layoutId:"zHhBZbUGx",width:"100%"})})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1xipvue",layoutDependency:layoutDependency,layoutId:"xIm9hVJM1",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-124k4q5","data-framer-name":"Button",layoutDependency:layoutDependency,layoutId:"kO8EPcJXs",style:{backgroundColor:"var(--token-7f791c90-fa2a-4004-b0b3-eaae9cb65f59, rgb(255, 67, 10))",borderBottomLeftRadius:9,borderBottomRightRadius:9,borderTopLeftRadius:9,borderTopRightRadius:9},transition:transition,children:/*#__PURE__*/ _jsx(motion.div,{className:"framer-1wli7uu-container",layoutDependency:layoutDependency,layoutId:"aX6J_BevM-container",transformTemplate:(_,t)=>`translate(-50%, -50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(Text,{color:"rgb(255, 255, 255)",fontFamily:"Inter",fontSize:14,fontWeight:500,height:"100%",id:"aX6J_BevM",layoutId:"aX6J_BevM",lineHeight:1.5,text:"Extract GIF",width:"100%"})})}),/*#__PURE__*/ _jsx(MotionDivInsertCanvasAsImage,{className:"framer-egpbf3","data-border":true,"data-framer-name":"Button",layoutDependency:layoutDependency,layoutId:"sxKAAd2cv",style:{"--border-bottom-width":"1px","--border-color":'var(--token-7f791c90-fa2a-4004-b0b3-eaae9cb65f59, rgb(255, 67, 10)) /* {"name":"key-red"} */',"--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",borderBottomLeftRadius:9,borderBottomRightRadius:9,borderTopLeftRadius:9,borderTopRightRadius:9},transition:transition,children:/*#__PURE__*/ _jsx(motion.div,{className:"framer-13z039b-container",layoutDependency:layoutDependency,layoutId:"AZ86CfiwF-container",transformTemplate:(_,t)=>`translate(-50%, -50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(Text,{color:'var(--token-13249def-3e68-4fcf-937f-8c212f83898c, rgb(255, 67, 10)) /* {"name":"key-orange"} */',fontFamily:"Inter",fontSize:14,fontWeight:500,height:"100%",id:"AZ86CfiwF",layoutId:"AZ86CfiwF",lineHeight:1.5,text:"Snapshot",width:"100%"})})})]})]})})});});const css=['.framer-1qzC5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-1qzC5 * { box-sizing: border-box; }",".framer-1qzC5 .framer-1pwgz07 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 832px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 453px; }",".framer-1qzC5 .framer-1cqj63m { flex: none; height: 305px; overflow: hidden; position: relative; width: 100%; }",".framer-1qzC5 .framer-1t2zrgt-container, .framer-1qzC5 .framer-1p7lc8a-container, .framer-1qzC5 .framer-1wli7uu-container, .framer-1qzC5 .framer-13z039b-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; }",".framer-1qzC5 .framer-1ay7sco-container { flex: none; height: 100%; left: calc(49.90019960079842% - 100% / 2); position: absolute; top: calc(49.83606557377052% - 100% / 2); width: 100%; }",".framer-1qzC5 .framer-vnn989 { flex: none; height: 94px; left: calc(50.11037527593821% - 345px / 2); overflow: visible; position: absolute; top: 85px; width: 345px; }",".framer-1qzC5 .framer-139vojp { flex: none; height: 53px; left: calc(50.11037527593821% - 344px / 2); overflow: visible; position: absolute; top: calc(49.83606557377052% - 53px / 2); width: 344px; }",".framer-1qzC5 .framer-1elrb7l { flex: none; height: 45px; overflow: hidden; position: absolute; right: 79px; top: calc(50.16393442622953% - 45px / 2); width: 94px; }",".framer-1qzC5 .framer-18e3n0t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 6px 9px 6px 18px; position: relative; width: 100%; }",".framer-1qzC5 .framer-af8hm3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",".framer-1qzC5 .framer-z1j5eo-container, .framer-1qzC5 .framer-1ofuadp-container, .framer-1qzC5 .framer-xcuylx-container, .framer-1qzC5 .framer-pwr3f4-container, .framer-1qzC5 .framer-1hb769c-container, .framer-1qzC5 .framer-600kf6-container, .framer-1qzC5 .framer-1e8o2bz-container { flex: none; height: auto; position: relative; width: auto; }",".framer-1qzC5 .framer-1rpa8fh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 32px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 147px; }",".framer-1qzC5 .framer-ctetbh, .framer-1qzC5 .framer-y0b0qn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 20px; }",".framer-1qzC5 .framer-writyi, .framer-1qzC5 .framer-8qnrqk { aspect-ratio: 1 / 1; flex: none; height: 12px; position: relative; width: var(--framer-aspect-ratio-supported, 12px); }",".framer-1qzC5 .framer-kq0p7r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 3px 3px 3px 3px; position: relative; width: min-content; }",".framer-1qzC5 .framer-1jrti1w { flex: none; height: 390px; overflow: auto; position: relative; width: 100%; }",".framer-1qzC5 .framer-b4qjhb-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; width: 100%; }",".framer-1qzC5 .framer-16fv3vz-container { bottom: 0px; flex: none; height: auto; position: absolute; right: 0px; width: auto; }",".framer-1qzC5 .framer-1xipvue { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 16px 0px; position: relative; width: 100%; }",".framer-1qzC5 .framer-124k4q5, .framer-1qzC5 .framer-egpbf3 { flex: none; height: 56px; overflow: hidden; position: relative; width: 206px; will-change: transform; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1qzC5 .framer-1pwgz07, .framer-1qzC5 .framer-af8hm3, .framer-1qzC5 .framer-ctetbh, .framer-1qzC5 .framer-y0b0qn, .framer-1qzC5 .framer-kq0p7r, .framer-1qzC5 .framer-1xipvue { gap: 0px; } .framer-1qzC5 .framer-1pwgz07 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-1qzC5 .framer-1pwgz07 > :first-child { margin-top: 0px; } .framer-1qzC5 .framer-1pwgz07 > :last-child { margin-bottom: 0px; } .framer-1qzC5 .framer-af8hm3 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-1qzC5 .framer-af8hm3 > :first-child, .framer-1qzC5 .framer-ctetbh > :first-child, .framer-1qzC5 .framer-y0b0qn > :first-child, .framer-1qzC5 .framer-kq0p7r > :first-child, .framer-1qzC5 .framer-1xipvue > :first-child { margin-left: 0px; } .framer-1qzC5 .framer-af8hm3 > :last-child, .framer-1qzC5 .framer-ctetbh > :last-child, .framer-1qzC5 .framer-y0b0qn > :last-child, .framer-1qzC5 .framer-kq0p7r > :last-child, .framer-1qzC5 .framer-1xipvue > :last-child { margin-right: 0px; } .framer-1qzC5 .framer-ctetbh > *, .framer-1qzC5 .framer-y0b0qn > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-1qzC5 .framer-kq0p7r > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-1qzC5 .framer-1xipvue > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 832
 * @framerIntrinsicWidth 453
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"jJpM4l5cr":{"layout":["fixed","fixed"]}}}
 */ const FramertNpoQk34A=withCSS(Component,css);export default FramertNpoQk34A;FramertNpoQk34A.displayName="Figma Plugin";FramertNpoQk34A.defaultProps={height:832,width:453};addPropertyControls(FramertNpoQk34A,{variant:{options:["ASohgaYfq","jJpM4l5cr"],optionTitles:["default","input"],title:"Variant",type:ControlType.Enum}});addFonts(FramertNpoQk34A,[...TextFonts,...GradientFonts,...URLInputFonts,...ToolsFonts,...AllControlsFonts,...TailwindCSSFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramertNpoQk34A","slots":[],"annotations":{"framerIntrinsicWidth":"453","framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"jJpM4l5cr\":{\"layout\":[\"fixed\",\"fixed\"]}}}","framerIntrinsicHeight":"832"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./tNpoQk34A.map