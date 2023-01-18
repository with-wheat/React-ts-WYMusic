import React, { memo, FC, ReactNode } from 'react'

interface propTypes {
  children?: ReactNode
}

const Main: FC<propTypes> = () => {
  return <div>Main</div>
}

export default memo(Main)
