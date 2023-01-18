import React, { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Album = lazy(() => import('@/views/discover/c-cmp/album'))
const Artist = lazy(() => import('@/views/discover/c-cmp/artist'))
const DjRadio = lazy(() => import('@/views/discover/c-cmp/djRadio'))
const Ranking = lazy(() => import('@/views/discover/c-cmp/Ranking'))
const Songs = lazy(() => import('@/views/discover/c-cmp/songs'))
const Recommend = lazy(() => import('@/views/discover/c-cmp/recommend'))

const Main = lazy(() => import('@/views/main'))
const Focus = lazy(() => import('@/views/focus'))
const NotFund = lazy(() => import('@/components/NotFund'))
const Download = lazy(() => import('@/components/NotFund'))

const route: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'discover'} />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to={'/discover/recommend'} />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djRadio',
        element: <DjRadio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/main',
    element: <Main />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '*',
    element: <NotFund />
  }
]

export default route
