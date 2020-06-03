import axios from '@/api/axios'

export const getPosition = () => axios.request({
  url: "position", method: "get"
})

// 获取食物分类
export const msiteFoodTypes = () => axios.request({
  url: 'v2/index_entry',
  method: 'get'
})