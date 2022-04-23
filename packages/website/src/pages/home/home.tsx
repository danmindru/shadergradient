import * as React from 'react'
import {
  GradientMesh,
  Button,
  TestControl,
  NumberInput,
  ToolsBox,
  PropertyControls,
} from 'shadergradient'
import styles from './Home.module.scss'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// dom components goes here
const DOM = () => {
  const [activeTab, setActiveTab] = React.useState('none')

  return (
    <div className={styles.wrap}>
      next.js (website)
      <Button />
      <TestControl />
      <NumberInput />
      <ToolsBox />
      <PropertyControls activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

// canvas components goes here
const R3F = () => {
  return (
    <>
      {/* <Shader /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <GradientMesh />
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
