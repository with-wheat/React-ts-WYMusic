import React, { memo, FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface propTypes {
  children?: ReactNode
}

const Header: FC<propTypes> = () => {
  return (
    <div>
      <Link to={'/discover'}>发现音乐</Link>
      <Link to={'/main'}>我的音乐</Link>
      <Link to={'/focus'}>关注</Link>
      <Link to={'/download'}>下载客户端</Link>
    </div>
  )
}

export default memo(Header)
