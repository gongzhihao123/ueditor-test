import axios from './axios'

// 年龄分类
// 获取分类导出报表--年龄恒牙
export function exportHyhqByAge (data) {
  return axios.get('/statisticsExport/exportHyhqByAge', { params: data }).then((res) => res.data)
}

// 获取分类导出报表--年龄乳牙
export function exportRyhqByAge (data) {
  return axios.get('/statisticsExport/exportRyhqByAge', { params: data }).then((res) => res.data)
}

// 获取分类导出报表--年龄沙眼
export function exportSyByAge (data) {
  return axios.get('/statisticsExport/exportSyByAge', { params: data }).then((res) => res.data)
}

// 获取分类导出报表--年龄身高
export function exportSgdjByAge (data) {
  return axios.get('/statisticsExport/exportSgdjByAge', { params: data }).then((res) => res.data)
}

// 获取分类导出报表--年龄体重
export function exportTzdjByAge (data) {
  return axios.get('/statisticsExport/exportTzdjByAge', { params: data }).then((res) => res.data)
}

// 获取分类导出报表--年龄肠道蠕虫
export function exportCdrcByAge (data) {
  return axios.get('/statisticsExport/exportCdrcByAge', { params: data }).then((res) => res.data)
}

// 获取分类导出报表--年龄贫血
export function exportPxzkByAge (data) {
  return axios.get('/statisticsExport/exportPxzkByAge', { params: data }).then((res) => res.data)
}

// 获取分类导出报表--年龄肺活量
export function exportFhlByAge (data) {
  return axios.get('/statisticsExport/exportFhlByAge', { params: data }).then((res) => res.data)
}

// 获取分类导出报表--年龄视力
export function exportSlByAge (data) {
  return axios.get('/statisticsExport/exportSlByAge', { params: data }).then((res) => res.data)
}

// 年级分类
// 获取分类导出表--年级身高
export function exportSgdjByGrade (data) {
  return axios.get('/statisticsExport/exportSgdjByGrade', { params: data }).then((res) => res.data)
}

// 获取分类导出表--年级恒牙患龋
export function exportHyhqByGrade (data) {
  return axios.get('/statisticsExport/exportHyhqByGrade', { params: data }).then((res) => res.data)
}

// 获取分类导出表--年级乳牙患龋
export function exportRyhqByGrade (data) {
  return axios.get('/statisticsExport/exportRyhqByGrade', { params: data }).then((res) => res.data)
}

// 获取分类导出表--年级肠道蠕虫
export function exportCdrcByGrade (data) {
  return axios.get('/statisticsExport/exportCdrcByGrade', { params: data }).then((res) => res.data)
}

// 获取分类导出表--年级肺活量
export function exportFhlByGrade (data) {
  return axios.get('/statisticsExport/exportFhlByGrade', { params: data }).then((res) => res.data)
}

// 获取分类导出表--年级沙眼
export function exportSyByGrade (data) {
  return axios.get('/statisticsExport/exportSyByGrade', { params: data }).then((res) => res.data)
}

// 获取分类导出表--年级体重
export function exportTzdjByGrade (data) {
  return axios.get('/statisticsExport/exportTzdjByGrade', { params: data }).then((res) => res.data)
}

// 获取分类导出表--年级贫血
export function exportPxzkByGrade (data) {
  return axios.get('/statisticsExport/exportPxzkByGrade', { params: data }).then((res) => res.data)
}

// 获取分类导出表--年级窝沟封闭
export function exportWgfbzkByGrade (data) {
  return axios.get('/statisticsExport/exportWgfbzkByGrade', { params: data }).then((res) => res.data)
}

// 获取分类导出表--年级视力
export function exportSlByGrade (data) {
  return axios.get('/statisticsExport/exportSlByGrade', { params: data }).then((res) => res.data)
}

// 营养报表
// 获取分类导出表--营养报表牙周疾病
export function exportYzjbjcjg (data) {
  return axios.get('/statisticsExport/exportYzjbjcjg', { params: data }).then((res) => res.data)
}

// 获取分类导出表--营养报表身高标准差
export function exportSgBzc (data) {
  return axios.get('/statisticsExport/exportSgBzc', { params: data }).then((res) => res.data)
}

// 获取分类导出表--营养报表体重标准差
export function exportTzBzc (data) {
  return axios.get('/statisticsExport/exportTzBzc', { params: data }).then((res) => res.data)
}

// 获取分类导出表--营养报表肺活量标准差
export function exportFhlBzc (data) {
  return axios.get('/statisticsExport/exportFhlBzc', { params: data }).then((res) => res.data)
}

// 获取分类导出表--营养报表BMI年龄
export function exportBmiByAge (data) {
  return axios.get('/statisticsExport/exportBmiByAge', { params: data }).then((res) => res.data)
}

// 获取分类导出表--营养报表BMI年级
export function exportBmiByGrade (data) {
  return axios.get('/statisticsExport/exportBmiByGrade', { params: data }).then((res) => res.data)
}

// 获取分类导出表--营养报表身高标准体重 年龄
export function exportSgbztzByAge (data) {
  return axios.get('/statisticsExport/exportSgbztzByAge', { params: data }).then((res) => res.data)
}

// 获取分类导出表--营养报表身高标准体重 年级
export function exportSgbztzByGrade (data) {
  return axios.get('/statisticsExport/exportSgbztzByGrade', { params: data }).then((res) => res.data)
}

// 获取分类导出表--营养报表收缩压标准差
export function exportSsyBzc (data) {
  return axios.get('/statisticsExport/exportSsyBzc', { params: data }).then((res) => res.data)
}

// 获取分类导出表--营养报表收缩压标准差
export function exportSzyBzc (data) {
  return axios.get('/statisticsExport/exportSzyBzc', { params: data }).then((res) => res.data)
}

// 血压

// 获取分类导出表--血压报表年龄
export function exportXyByAge (data) {
  return axios.get('/statisticsExport/exportXyByAge', { params: data }).then((res) => res.data)
}

// 获取分类导出表--血压报表年级
export function exportXyByGrade (data) {
  return axios.get('/statisticsExport/exportXyByGrade', { params: data }).then((res) => res.data)
}
