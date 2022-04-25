// src/Gradient/comps/GradientMesh/shaders/tests/halftone/fragment.glsl
var fragment_default = "vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}float snoise(vec2 v){const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.0*dot(m,g);}float aastep(float threshold,float value){\n#ifdef GL_OES_standard_derivatives\nfloat afwidth=length(vec2(dFdx(value),dFdy(value)))*0.70710678118654757;return smoothstep(threshold-afwidth,threshold+afwidth,value);\n#else\nreturn step(threshold,value);\n#endif\n}vec3 halftone(vec3 texcolor,vec2 st,float frequency){float n=0.1*snoise(st*200.0);n+=0.05*snoise(st*400.0);n+=0.025*snoise(st*800.0);vec3 white=vec3(n*0.2+0.97);vec3 black=vec3(n+0.1);vec4 cmyk;cmyk.xyz=1.0-texcolor;cmyk.w=min(cmyk.x,min(cmyk.y,cmyk.z));cmyk.xyz-=cmyk.w;vec2 Kst=frequency*mat2(0.707,-0.707,0.707,0.707)*st;vec2 Kuv=2.0*fract(Kst)-1.0;float k=aastep(0.0,sqrt(cmyk.w)-length(Kuv)+n);vec2 Cst=frequency*mat2(0.966,-0.259,0.259,0.966)*st;vec2 Cuv=2.0*fract(Cst)-1.0;float c=aastep(0.0,sqrt(cmyk.x)-length(Cuv)+n);vec2 Mst=frequency*mat2(0.966,0.259,-0.259,0.966)*st;vec2 Muv=2.0*fract(Mst)-1.0;float m=aastep(0.0,sqrt(cmyk.y)-length(Muv)+n);vec2 Yst=frequency*st;vec2 Yuv=2.0*fract(Yst)-1.0;float y=aastep(0.0,sqrt(cmyk.z)-length(Yuv)+n);vec3 rgbscreen=1.0-0.9*vec3(c,m,y)+n;return mix(rgbscreen,black,0.85*k+0.3*n);}vec3 halftone(vec3 texcolor,vec2 st){return halftone(texcolor,st,30.0);}uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec2 vUv;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);vec2 st=vUv;gl_FragColor.rgb=halftone(color1*vNormal.x+color2*vNormal.y+color3*vNormal.z,st,500.0);}";

// src/Gradient/comps/GradientMesh/shaders/tests/halftone/vertex.glsl
var vertex_default = "#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)\nuniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;varying vec3 vNormal;varying vec2 vUv;void main(){float t=uTime*uSpeed;float distortion=cnoise3((normal+t)*uNoiseDensity)*uNoiseStrength;vec3 pos=position+(normal*distortion);vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/GradientMesh/shaders/tests/halftone/index.ts
var url = "?animate=on&brightness=1&cameraPositionX=0&cameraPositionY=0&cameraPositionZ=3.3&cameraZoom=1.2&color1=%230000ff&color2=%23ff0000&color3=%2300ff00&embedMode=off&envPreset=dawn&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&reflection=0.5&rotationX=45&rotationY=-45&rotationZ=0&type=sphere&uDensity=1.5&uSpeed=0.2&uStrength=0.2&uTime=0.2";
export {
  fragment_default as fragment,
  url,
  vertex_default as vertex
};