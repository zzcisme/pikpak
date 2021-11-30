import http from '@/utils/axios'
import { AxiosResponse } from 'axios'

interface Media {
  category: '',
  icon_link: '',
  is_default: boolean, // 是否默认
  is_origin: boolean,
  is_visible: boolean, // 是否可见
  link: {
    expire: string, // 过期时间
    token: string,
    url: string,
  }
  media_id: string,
  media_name: string,
  need_more_quota: boolean,
  priority: 0,
  redirect_link: '',
  resolution_name: ''
}

interface File {
  created_time: string, // 创建时间
  delete_time: string, // 删除时间
  file_extension?: string, // 文件后缀
  folder_type: 'DOWNLOAD' | 'NORMAL', // 文件夹类型
  hash: string, // 文件hash
  icon_link: URL, // 图标
  id: string, // 文件id
  kind: 'drive#folde' | 'drive#file', // 文件类型
  links: {}, //
  medias: Media[],
  mine_type: string, // 文件类型
  modified_time: string, // 修改时间
  name: string, // 文件名称
  parent_id: string, // 文件父级
  phase: 'PHASE_TYPE_COMPLETE',
  revision: '3',
  size: string, // 文件大小
  space: '',
  starred: boolean,
  thumbnail_link: string, // 缩略图
  trashed: boolean, // 是否删除
  user_id: string, // 所属用户
  web_content_link: string, // 文件下载链接
  writable: boolean
}

interface Task {
  created_time: string,
  file_id: string, // 文件id offline 返回文件id
  file_name: string,
  file_size: string,
  icon_link: string,
  id: string, // TaskID
  kind: 'drive#task',
  message: '保存中' | '完成',
  name: string,
  params: {
    mime_type?: string,
    predict_speed?: string,
    predict_type?: string
  },
  phase: 'PHASE_TYPE_RUNNING' | 'PHASE_TYPE_COMPLETE',
  progress: number, // 进度
  reference_resource: null,
  space: '',
  status_size: 0,
  statuses: [],
  third_task_id: '',
  type: 'offline' | 'deletefile' | 'event-deletion' | 'trash', // 离线 | 删除文件 | 时间删除
  updated_time: string,
  user_id: string,
  callback: '',
}

interface Event {
  created_time: string,
  device: '',
  file_id: string,
  file_name: string,
  folder_id: string,
  icon_url: string,
  id: string,
  kind: 'drive#event',
  label: 'wide',
  mime_type: string,
  params: {},
  progress: number,
  source: '',
  space: '',
  subject: '',
  type: 'TYPE_UPLOAD' | 'TYPE_RESTORE',
  type_name: '上传' | '添加',
  updated_time: string
}

const baseURL = 'https://api-drive.mypikpak.com/drive/v1'

export const files = ({id, page_token, trashed}: {id?: string, page_token?: string, trashed?: boolean}) : Promise<AxiosResponse<{files: File[], next_page_token?:string, kind: 'drive#fileList'}>> => {
  return http.get(baseURL + '/fiels', {
    params: {
      thumbnail_size: 'SIZE_LARGE',
      with_audit: true,
      filters: {
        "phase": {"eq": "PHASE_TYPE_COMPLETE"},
        "trashed":{"eq": !!trashed}
      },
      parent_id: id || '',
      page_token: page_token
    }
  })
}

export const file = (id: string): Promise<AxiosResponse<File>> => {
  return http.get(baseURL + '/files/' + id, {
    params: {
      thumbnail_size: 'SIZE_LARGE',
      usage: 'CACHE', // ALL
    }
  })
}

const urlUpload = ({url, id}: {url: string, id?: string}): Promise<AxiosResponse<{
  file: null,
  task: Task,
  upload_type: 'UPLOAD_TYPE_URL',
  url: {
    kind: 'upload#url'
  }
}>> => {
  return http.post(baseURL + '/files', {
    kind: "drive#file",
    name: "",
    parent_id: id || '',
    upload_type: "UPLOAD_TYPE_URL",
    url: {
      url: url
    },
    params: {"from":"file"},
    folder_type: "DOWNLOAD"
  })
}
const hashUpload = ({name, size, hash, id}: {name: string, size: string, hash: string, id?: string}): Promise<AxiosResponse<{
  file: File,
  task: null,
  upload_type: "UPLOAD_TYPE_UNKNOWN"
}>> => {
  return http.post(baseURL + '/files', {
    kind: "drive#file",
    parent_id: id || '',
    name: name,
    size: size,
    hash: hash,
    upload_type: "UPLOAD_TYPE_RESUMABLE",
    objProvider: {
      provider: "UPLOAD_TYPE_UNKNOWN"
    }
  })
}

export const folderUpload = ({id, name}: {id?: string, name: string}): Promise<AxiosResponse<{
  file: File,
  task: null,
  upload_type: "UPLOAD_TYPE_UNKNOWN"
}>> => {
  return http.post(baseURL + '/files', {
    "kind":"drive#folder",
    "parent_id": id || '',
    "name": name
  })
}

export const filesPost = ({url, id}:{url: string, id?: string}) => {
  if(url.indexOf('PikPak://') === 0) {
    const urlData = url.substring(9).split('|')
    if(urlData?.length != 3) {
      return Promise.reject('url格式不争取')
    }
    return hashUpload({
      name: urlData[0],
      size: urlData[1],
      hash: urlData[2],
      id
    })
  } else if(url.indexOf(':') !== -1) {
    return urlUpload({url, id})
  }
}

export const filesDelete = (ids: string | string[]): Promise<AxiosResponse<{
  task_id: string
}>> => {
  return http.post(baseURL + '/files:batchTrash', {
    ids: typeof ids === 'string' ? [ids] : ids
  })
}

export const filesMove = ({ids, parent_id}: {ids: string | string[], parent_id: string}): Promise<AxiosResponse<{
  task_id: string
}>> => {
  return http.post(baseURL + '/files:batchMove', {
    "to":{
      "parent_id": parent_id || ''
    },
    "ids": ids
  })
}

export const filesCopy = ({ids, parent_id}: {ids: string | string[], parent_id: string}): Promise<AxiosResponse<{
  task_id: string
}>> => {
  return http.post(baseURL + '/files:batchCopy', {
    "to":{
      "parent_id": parent_id || ''
    },
    "ids": ids
  })
}

export const trashDelete = (ids: string | string[]): Promise<AxiosResponse<{
  task_id: string
}>> => {
  return http.post(baseURL + '/files:batchDelete', {
    ids: typeof ids === 'string' ? [ids] : ids
  })
}

export const transhUn = (ids: string | string[]): Promise<AxiosResponse<{
  task_id: string
}>> => {
  return http.post(baseURL + '/files:batchUntrash', {
    ids: typeof ids === 'string' ? [ids] : ids
  })
}

export const filesRename = ({id, name}: {id: string, name: string}): Promise<AxiosResponse<File>> => {
  return http.patch(baseURL + '/files/' + id, {
    name: name
  })
}

export const tasks = ({page_token, id, gt}:{page_token?: string, id?: string, gt?: string}): Promise<AxiosResponse<{
  tasks: Task[],
  next_page_token: string,
  expires_in: number
}>> => {
  return http.get(baseURL + '/tasks', {
    params: {
      type: 'offline',
      page_token: page_token || '',
      thumbnail_size: 'SIZE_LARGE',
      filters: {
        id: id ? {
          in: id // taskid
        }: undefined,
        updated_time: gt ? {
          gt: gt // updated_time
        }: undefined
      },
      width: 'reference_resource'
    }
  })
}

export const events = (page_token?: string): Promise<AxiosResponse<{
  events: Event[]
  next_page_token: string
}>> => {
  return http.get(baseURL + '/events', {
    params: {
      page_token: page_token || '',
      thumbnail_size: 'SIZE_LARGE',
    }
  })
}

export const about = (): Promise<AxiosResponse<{
  kind: "drive#about",
  quota: {
    kind: "drive#quota",
    limit: string, // 全部空间
    usage: string, // 已使用空间
    usage_in_trash: string,
    play_times_limit: string,
    play_times_usage: string
  },
  expires_at: string
}>> => {
  return http.get(baseURL + '/about')
}

export const vip = (): Promise<AxiosResponse<{
  result: 'ACCEPTED',
  message: string,
  redirect_uri: string,
  data: {
    expire: string, // 到期时间
    status: 'ok',
    type: 'platinum',
    user_id: string, // 用户id
  }
}>> => {
  return http.get(baseURL + '/privilege/vip')
}