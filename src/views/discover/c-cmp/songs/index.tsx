import React, { memo, FC, ReactNode } from 'react'

interface propTypes {
  children?: ReactNode
}

const Songs: FC<propTypes> = () => {
  return <div>Songs</div>
}

export default memo(Songs)
