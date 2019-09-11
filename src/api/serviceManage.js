import axios from './axios'

// 登录
export function login (data) {
  return axios.post('/sso/login', data).then((res) => res.data)
}

// 测试
export function ces () {
  return axios.get('/home/hello').then((res) => res.data)
}

// 获取列表
export function departmentList (data) {
  return axios.get('/orgnization/departmentList', { params: data }).then((res) => res.data)
}

// 修改树形列表名称
export function editDepartment (data) {
  return axios.patch(`/orgnization/department?deptId=${data.id}&deptName=${data.label}`).then((res) => res.data)
}

// 删除树形列表名称
export function deleteDepartment (data) {
  return axios.delete(`/orgnization/department?deptId=${data.id}`).then((res) => res.data)
}

// 添加树形列表名称
export function addDepartment (data) {
  return axios.get('/orgnization/department', { params: data }).then((res) => res.data)
}

// 添加成员 -- 组织架构
export function addStructureUser (data) {
  return axios.post('/orgnization/user', { params: data }).then((res) => res.data)
}

// 编辑用户 -- 组织架构
export function editStructureUser (data) {
  return axios.patch('/orgnization/user', { params: data }).then((res) => res.data)
}

// 重置密码 -- 组织架构
export function reastStructurePassword (data) {
  return axios.patch('/orgnization/password', { params: data }).then((res) => res.data)
}

// 禁用/解禁用户 -- 组织架构
export function prohibitStructureUser (data) {
  return axios.patch('/orgnization/user', { params: data }).then((res) => res.data)
}
