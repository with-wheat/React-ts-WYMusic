import React, { memo, FC, ReactNode } from 'react'

interface propTypes {
  children?: ReactNode
}

const Artist: FC<propTypes> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
