import React, { memo, FC, ReactNode, useEffect } from 'react'
import { useAppSelect, appShallowEqual, useAppDispatch } from '@/store'
import { setName } from '@/store/modules/discover'
import { getTest } from '@/service/modules/demo'

interface propTypes {
  children?: ReactNode
}

const Recommend: FC<propTypes> = () => {
  const { name } = useAppSelect(
    (state) => ({
      name: state.discover.name
    }),
    appShallowEqual
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    getTest().then((res) => {
      console.log('====================================')
      console.log(res)
      console.log('====================================')
    })
  })

  const setNames = () => {
    dispatch(setName('111'))
  }
  return (
    <div>
      Recommend--{name}
      <button onClick={() => setNames()}>修改名字</button>
    </div>
  )
}

export default memo(Recommend)
