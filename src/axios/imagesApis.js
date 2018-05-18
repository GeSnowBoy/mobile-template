import axios from 'axios'
///*
// 图片
//   get  获取   list 列表
//  delete/remove 删除
//  create 创建
// write/updatae 更新
// */
export default {
  getImageList(send){
    return axios.post('api/ueditor/controller?',send,{
      params:{
        ...send,
        action:'listimage'
      }
    })
  },

  deleteImage(send){
    return axios.post('api/image/delete',send)
  },
  undateImage(send){
    return axios.post('api/image/update',send)
  }
}
