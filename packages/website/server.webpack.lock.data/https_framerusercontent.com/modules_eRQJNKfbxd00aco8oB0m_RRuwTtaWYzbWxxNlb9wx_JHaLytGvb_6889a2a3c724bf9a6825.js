// Generated by Framer (3d65904)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,RichText,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import{Gradient}from"https://framerusercontent.com/modules/z3nMGg5wkheHH1MRKNH0/YmCkRdsUWHyAjWliluLk/Gradient.js";const GradientFonts=getFonts(Gradient);const cycleOrder=["qNQXI2WCx","bKMSmPYhR","d2cbYjRNR","G3inmaPXP","lGGDP898q","DPBqBKSP9"];const variantClassNames={bKMSmPYhR:"framer-v-l63d96",d2cbYjRNR:"framer-v-h649ku",DPBqBKSP9:"framer-v-7wmcbk",G3inmaPXP:"framer-v-6g1j6z",lGGDP898q:"framer-v-y35h28",qNQXI2WCx:"framer-v-1ilyfw5"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={"Variant 2":"bKMSmPYhR","Variant 4":"G3inmaPXP","Variant 6":"DPBqBKSP9",Plane:"d2cbYjRNR",Sphere:"qNQXI2WCx",WaterPlane:"lGGDP898q"};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="qNQXI2WCx",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"qNQXI2WCx",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onMouseEnteruhlbq6=activeVariantCallback(async(...args)=>{setVariant("bKMSmPYhR");});const onMouseLeave1murvly=activeVariantCallback(async(...args)=>{setVariant("qNQXI2WCx");});const onMouseEnter1r7lm74=activeVariantCallback(async(...args)=>{setVariant("G3inmaPXP");});const onMouseLeaveyomd7q=activeVariantCallback(async(...args)=>{setVariant("d2cbYjRNR");});const onMouseEnter16cme3v=activeVariantCallback(async(...args)=>{setVariant("DPBqBKSP9");});const onMouseLeave1baiu04=activeVariantCallback(async(...args)=>{setVariant("lGGDP898q");});const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-AuJWM",classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-1ilyfw5",className),"data-framer-name":"Sphere","data-highlight":true,layoutDependency:layoutDependency,layoutId:"qNQXI2WCx",onMouseEnter:onMouseEnteruhlbq6,ref:ref,style:{...style},transition:transition,...addPropertyOverrides({bKMSmPYhR:{"data-framer-name":"Variant 2",onMouseEnter:undefined,onMouseLeave:onMouseLeave1murvly},d2cbYjRNR:{"data-framer-name":"Plane",onMouseEnter:onMouseEnter1r7lm74},DPBqBKSP9:{"data-framer-name":"Variant 6",onMouseEnter:undefined,onMouseLeave:onMouseLeave1baiu04},G3inmaPXP:{"data-framer-name":"Variant 4",onMouseEnter:undefined,onMouseLeave:onMouseLeaveyomd7q},lGGDP898q:{"data-framer-name":"WaterPlane",onMouseEnter:onMouseEnter16cme3v}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-ctgeeh-container",layoutDependency:layoutDependency,layoutId:"or7elkDzY-container",transition:transition,children:/*#__PURE__*/ _jsx(Gradient,{activeTab:"Colors",animate:"on",brightness:1.2,cameraZoom:9.5,cAzimuthAngle:180,cDistance:7,color1:"rgb(0, 38, 131)",color2:"rgb(44, 126, 254)",color3:"rgb(224, 233, 255)",control:"props",cPolarAngle:90,envPreset:"city",grain:"on",height:"100%",id:"or7elkDzY",layoutId:"or7elkDzY",lightType:"3d",pixelDensity:1,positionX:0,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:80,rotationZ:190,shader:"defaults",style:{height:"100%",width:"100%"},toggleAxis:false,type:"sphere",uAmplitude:3.2,uDensity:.8,urlString:"",uSpeed:.5,uStrength:.7,uTime:6,width:"100%",zoomOut:false,...addPropertyOverrides({bKMSmPYhR:{activeTab:"View",cameraZoom:2},d2cbYjRNR:{activeTab:"View",cDistance:4,color1:"rgb(144, 122, 255)",color2:"rgb(66, 194, 139)",color3:"rgb(255, 207, 15)",grain:"off",positionY:.5,rotationX:50,rotationY:0,rotationZ:30,type:"plane",uDensity:1,uStrength:1.9},DPBqBKSP9:{activeTab:"View",cDistance:20,color1:"rgb(255, 191, 122)",color2:"rgb(152, 128, 250)",color3:"rgb(255, 67, 10)",rotationX:50,rotationY:0,rotationZ:30,type:"waterPlane",uDensity:1,uStrength:1.9},G3inmaPXP:{activeTab:"View",cDistance:20,color1:"rgb(144, 122, 255)",color2:"rgb(66, 194, 139)",color3:"rgb(255, 207, 15)",grain:"off",rotationX:50,rotationY:0,rotationZ:30,type:"plane",uDensity:1,uStrength:1.9},lGGDP898q:{activeTab:"View",cDistance:4,color1:"rgb(255, 191, 122)",color2:"rgb(152, 128, 250)",color3:"rgb(255, 67, 10)",positionY:.5,rotationX:50,rotationY:0,rotationZ:30,type:"waterPlane",uDensity:1,uStrength:1.9}},baseVariant,gestureVariant)})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--framer-font-size":"60px","--framer-text-color":"var(--extracted-r6o4lv)"},children:"Hover me"})}),className:"framer-z14gyj",layoutDependency:layoutDependency,layoutId:"UwrRKLjsc",style:{"--extracted-r6o4lv":"rgb(255, 255, 255)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px",opacity:1},transformTemplate:(_,t)=>`translate(-50%, -50%) ${t}`,transition:transition,variants:{bKMSmPYhR:{opacity:0}},verticalAlignment:"top",withExternalLayout:true})]})})});});const css=['.framer-AuJWM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-AuJWM * { box-sizing: border-box; }",".framer-AuJWM .framer-xt3mw { display: block; }",".framer-AuJWM .framer-1ilyfw5 { height: 1922px; overflow: hidden; position: relative; width: 1080px; }",".framer-AuJWM .framer-ctgeeh-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }",".framer-AuJWM .framer-z14gyj { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }",".framer-AuJWM.framer-v-6g1j6z .framer-ctgeeh-container, .framer-AuJWM.framer-v-7wmcbk .framer-ctgeeh-container { bottom: -50px; left: calc(50.00000000000002% - 100% / 2); top: unset; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 1922
 * @framerIntrinsicWidth 1080
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"bKMSmPYhR":{"layout":["fixed","fixed"]},"d2cbYjRNR":{"layout":["fixed","fixed"]},"G3inmaPXP":{"layout":["fixed","fixed"]},"lGGDP898q":{"layout":["fixed","fixed"]},"DPBqBKSP9":{"layout":["fixed","fixed"]}}}
 */ const FramerJHaLytGvb=withCSS(Component,css);export default FramerJHaLytGvb;FramerJHaLytGvb.displayName="Animate";FramerJHaLytGvb.defaultProps={height:1922,width:1080};addPropertyControls(FramerJHaLytGvb,{variant:{options:["qNQXI2WCx","bKMSmPYhR","d2cbYjRNR","G3inmaPXP","lGGDP898q","DPBqBKSP9"],optionTitles:["Sphere","Variant 2","Plane","Variant 4","WaterPlane","Variant 6"],title:"Variant",type:ControlType.Enum}});addFonts(FramerJHaLytGvb,[...GradientFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerJHaLytGvb","slots":[],"annotations":{"framerContractVersion":"1","framerIntrinsicWidth":"1080","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"bKMSmPYhR\":{\"layout\":[\"fixed\",\"fixed\"]},\"d2cbYjRNR\":{\"layout\":[\"fixed\",\"fixed\"]},\"G3inmaPXP\":{\"layout\":[\"fixed\",\"fixed\"]},\"lGGDP898q\":{\"layout\":[\"fixed\",\"fixed\"]},\"DPBqBKSP9\":{\"layout\":[\"fixed\",\"fixed\"]}}}","framerIntrinsicHeight":"1922"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./JHaLytGvb.map