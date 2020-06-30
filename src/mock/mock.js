import Mock from 'mockjs'
import data from './data'

Mock.mock('/js:1',{code:0,data:data["js"][0]})
Mock.mock('/js:2',{code:0,data:data["js"][1]})
Mock.mock('/js:3',{code:0,data:data["js"][2]})
Mock.mock('/react',{code:0,data:data["react"]})
Mock.mock('/vue',{code:0,data:data["vue"]})
Mock.mock('/all',{code:0,data:data["articleTitle"]})

