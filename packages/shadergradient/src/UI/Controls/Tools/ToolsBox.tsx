import * as React from 'react'
import cx from 'classnames'
import { usePropertyStore } from '../../../store'
import { IconButtons } from './IconButtons'

type ControlTypeTitlePropsT = {
  title?: string
  darkMode?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ToolsBox: React.FC<ControlTypeTitlePropsT> = ({
  title,
  darkMode,
  ...rest
}) => {
  const zoomOut = usePropertyStore((state: any) => state.zoomOut)
  const toggleAxis = usePropertyStore((state: any) => state.toggleAxis)
  const [copyUrlText, setCopyUrl] = React.useState('copy url')

  return (
    <div
      className={cx(
        'flex items-center justify-center p-3',
        darkMode && 'bg-controls-sub-panel'
      )}
      style={{
        gap: 6,
        width: 'fit-content',
        height: 'fit-content',
        borderRadius: 40,
      }}
    >
      <IconButtons icon='CornerUpLeft' content='undo' />
      <IconButtons
        icon='Box'
        content='3d axis'
        active={toggleAxis}
        onClick={() => {
          usePropertyStore.setState({ toggleAxis: !toggleAxis })
        }}
      />
      <IconButtons
        icon='Minimize2'
        content='zoom out'
        active={zoomOut}
        onClick={() => {
          usePropertyStore.setState({ zoomOut: !zoomOut })
        }}
      />
      <IconButtons
        icon='Copy'
        content={copyUrlText}
        onClick={async () => {
          window.navigator.clipboard.writeText(window.location.href)
          setCopyUrl('copied!')
          await setTimeout(() => {
            setCopyUrl('copy url')
          }, 1000)
        }}
      />
    </div>
  )
}