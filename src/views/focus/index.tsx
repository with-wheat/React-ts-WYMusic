import React, { memo, FC, ReactNode } from 'react'

interface propTypes {
  children?: ReactNode
}

const Focus: FC<propTypes> = () => {
  return <div>Focus</div>
}

export default memo(Focus)
