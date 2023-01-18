import React, { memo, FC, ReactNode } from 'react'

interface propTypes {
  children?: ReactNode // 插槽内容
}

const Download: FC<propTypes> = () => {
  return <div>Download</div>
}

export default memo(Download)
