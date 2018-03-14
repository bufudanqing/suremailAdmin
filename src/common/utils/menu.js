export const allMenu = [
    {
        name:"首页",
        url:"index",
        icon:"home",
    },
    {
        name:"邮箱申请",
        url:'mailApplyList',
        icon:'inbox',
    },
    {
        name:"用户信息",
        url:"index",
        icon:"user",
    },
    {
        name:"常规更新",
        url:"banner",
        icon:"cloud-upload-o",
        children:[
            {name:'首页轮播', url:'banner'},
            {name:'新闻上传', url:'banner'},
            {name:'业界动态', url:'banner'},
            {name:'视频上传', url:'banner'},
            {name:'客户端上传', url:'banner'},
        ]
    },
    {
        name:"公司动态",
        url:"banner",
        icon:"appstore",
        children:[
            {name:'成功案例', url:'banner'},
            {name:'招聘信息', url:'banner'},
            {name:'奖杯表扬', url:'banner'},
        ]
    },
    {
        name:"网站管理",
        url:"banner",
        icon:"solution",
        children:[
            {name:'后台用户', url:'banner'},
            {name:'管理日志', url:'banner'},
        ]
    }
]