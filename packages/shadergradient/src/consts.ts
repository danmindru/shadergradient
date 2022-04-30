export const initialActivePreset = 0

export const canvasProps = (pixelDensity: number) => ({
  dpr: pixelDensity, //device pixel ratio - 1 default and fast, 2 detailed and slow
  // mode: 'concurrent' as 'legacy' | 'blocking' | 'concurrent',
  // camera: { fov: 45 }, // could be replaced with zoom or distance?
  // linear: true, //sRGBEncoding
  // flat: true, //ACESFilmicToneMapping
})

export const links = [
  {
    title: 'Figma  →',
    link: 'https://www.figma.com/community/plugin/958202093377483021/Mesh-Gradient',
  },
  {
    title: 'React  →',
    link: 'https://codesandbox.io/s/optimistic-benji-pw64i',
  },
  {
    title: 'Framer  →',
    link: 'https://framer.com/projects/ShaderGradient--7fmA9c0AApv3vyjCPpS3-emceg',
  },
]

// useCameraAnimation
export const defaultDistance = 10
export const defaultZoom = 1
