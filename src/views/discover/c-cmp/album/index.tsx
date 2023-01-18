import React, { memo, FC, ReactNode } from 'react'

interface propTypes {
  children?: ReactNode
}

const Album: FC<propTypes> = () => {
  return <div>Album</div>
}

export default memo(Album)
