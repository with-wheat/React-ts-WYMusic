import React, { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
const Discover = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/DjRadio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/Album">新碟上架</Link>
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default Discover
