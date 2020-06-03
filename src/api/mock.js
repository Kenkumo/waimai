import Mock from 'mockjs'

import position from '../api/mockServerData/position'

// 配置请求延迟
Mock.setup({
  timeout: 1000
})

Mock.mock('/api/position', position)