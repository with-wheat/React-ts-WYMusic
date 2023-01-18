import React, { memo, FC, ReactNode } from 'react'

interface propTypes {
  children?: ReactNode
}

const Ranking: FC<propTypes> = () => {
  return <div>Ranking</div>
}

export default memo(Ranking)
