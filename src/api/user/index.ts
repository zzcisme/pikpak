import http from '@/utils/axios'
import {client_id, client_secret}  from '@/config'
import { AxiosResponse } from 'axios'
const baseURL = 'https://user.mypikpak.com/v1'
const randomString = () =>  {
  let len = 32;
  let chars ='abcdefhijkmnprstwxyz2345678';
  let maxPos = chars.length;
  let character = '';
  for (let i = 0; i < len; i++) {
    character += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return character;
}
const deviceId = randomString()
interface LoginData {
  access_token: string,
  expires_in: number,
  refresh_token: string
  sub: string
  token_type: string
}

let captcha_token = ''
let verification_id = ''
let is_user = false

export function initCaptcha({action, phone_number, email}: {
  action: 'POST:/v1/auth/verification' |  'POST:/v1/auth/signin' | 'POST:/v1/auth/signup',
  phone_number?: string,
  email?: string
}): Promise<AxiosResponse<{captcha_token: string}>> {
  return (http.post(baseURL + '/shield/captcha/init', {
    action: action,
    captcha_token,
    client_id,
    device_id: deviceId,
    meta: {
      phone_number: phone_number,
      email: email
    },
    redirect_uri: 'xlaccsdk01://xunlei.com/callback?state\u003dharbor'
  }) as Promise<AxiosResponse<{captcha_token: string}>>)
    .then(res => {
      captcha_token = res.data.captcha_token
      return res
    })
}

export function sendCode(codeData : {
  email?: string,
  phone_number?: string
}): Promise<AxiosResponse<{verification_id: string, is_user?: boolean, selected_channel?: "VERIFICATION_PHONE"}>> {
  return initCaptcha({action: 'POST:/v1/auth/verification', ...codeData})
    .then(res => {
      return (http.post(baseURL + '/auth/verification', {
                client_id,
                captcha_token: captcha_token,
                locale: "zh-cn",
                target: "ANY",
                ...codeData
              }) as Promise<AxiosResponse<{verification_id: string, is_user?: boolean, selected_channel?: "VERIFICATION_PHONE"}>>)
                .then(code => {
                  verification_id = code.data.verification_id
                  is_user = !!code.data.is_user
                  return code
                })
    })
}

export function verifiyCode(code:string): Promise<AxiosResponse<{verification_token: string}>>{
    return http.post(baseURL + '/auth/verification/verify', {
        client_id,
        verification_id,
        verification_code: code
    })
}

export function register({verification_code, ...register}: {verification_code: string,phone_number?: string, password?: string, name?: string, email?:string}): Promise<AxiosResponse<LoginData>> {
    return verifiyCode(verification_code)
      .then(res => {
        return initCaptcha({action: !is_user ? 'POST:/v1/auth/signup' : 'POST:/v1/auth/signin'})
                .then(() => {
                  if(!is_user) {
                    return signup({verification_token: res.data.verification_token, ...register})
                  } else {
                    return signin({username: register.phone_number || '', captcha_token, verification_token: res.data.verification_token})
                  }
                })
      })
}

export function signup({verification_token, phone_number, password, name, email}:{verification_token: string, phone_number?: string, password?: string, name?: string, email?: string}): Promise<AxiosResponse<LoginData>> {
  return http.post(baseURL + '/auth/signup', {
    client_id,
    client_secret,
    captcha_token,
    verification_token: verification_token,
    password: password || '',
    phone_number,
    email,
    name: name || ('U_' + (phone_number ? phone_number.slice(-4) : '') + (email ? email.split('@')[0] || '' : ''))
  })
}

export function signin(login : { username:string, password?:string, captcha_token?:string, verification_token?:string }): Promise<AxiosResponse<LoginData>> {
  return http.post(baseURL + '/auth/signin', {
    client_id,
    client_secret,
    ...login,
    captcha_token: login.captcha_token || ''
  })
}

export function me(): Promise<AxiosResponse<{
  sub: string, // 用户id
  name: string, // 用户名称
  email: string, // 用户邮箱
  password: 'SET' | null, // 设置密码
  created_at: string, // 注册时间
  password_updated_at: string, // 密码设置时间
}>> {
  return http.get('/user/me')
}

export function signout(): Promise<AxiosResponse<null>> {
  return http.post('/auth/revoke')
}