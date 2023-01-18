import React, { Suspense } from 'react'
import route from '@/router'
import { useRoutes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Suspense fallback="">
        <Link to={'/discover'}>发现音乐</Link>
        <Link to={'/main'}>我的音乐</Link>
        <Link to={'/focus'}>关注</Link>
        <Link to={'/download'}>下载客户端</Link>
        <div className="count">{useRoutes(route)}</div>
      </Suspense>
    </div>
  )
}

export default App
