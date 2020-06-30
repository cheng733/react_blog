import axios from 'axios'
export default function ajax(path,data={},type='get') {
   return new Promise(function (resolve, reject) {
        if(type==='get'){
            let path1 = ''
            Object.keys(data).forEach(value =>{
                path1 = value+'='+data[value]+'&'
            })
            if(path1!==''){
                path = path+'?'+path1
                path = path.slice(0,path.lastIndexOf('&'))
            }
            axios.get(path).then(function (response) {
                 resolve(response.data)
            }).catch(function (error) {
                 console.log(error)
            })
        }else{
           return axios.post(path,data)
                .then(function (response) {
                     resolve(response.data)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    })


}
