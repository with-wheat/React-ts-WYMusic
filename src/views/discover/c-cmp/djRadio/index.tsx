import React, { memo, FC, ReactNode } from 'react'

interface propTypes {
  children?: ReactNode
}

const DjRadio: FC<propTypes> = () => {
  return <div>DjRadio</div>
}

export default memo(DjRadio)
