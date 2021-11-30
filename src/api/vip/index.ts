import http from '@/utils/axios'
import { AxiosResponse } from 'axios'

const baseURL = 'https://api-drive.mypikpak.com/vip/v1'

export const api = (code: string): Promise<AxiosResponse<{
  add_days: 7,
  data: {
      expire: string,
      status: 'ok',
      type: 'platinum',
      user_id: string
  },
  result: 'ACCEPTED',
  updated: true
}>> => {
    return http.post('/order/free', {
      activation_code: code
    })
}