
export default [
{
    path:"yonghuadd",
        name:"IndexyonghuAdd",
    component: () => import("@/views/yonghu/webadd"),
    meta: { title:"用户添加"  }
},
{
    path:"chongwuzixun",
        name:"IndexchongwuzixunList",
    component: () => import("@/views/chongwuzixun/index"),
    meta: { title:"宠物资讯列表"  }
},
{
    path:"chongwuzixundetail",
        name:"IndexchongwuzixunDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/chongwuzixun/webdetail"),
    meta: { title:"宠物资讯详情"  }
},
{
    path:"liuyanfankuiadd",
        name:"IndexliuyanfankuiAdd",
    component: () => import("@/views/liuyanfankui/webadd"),
    meta: { title:"留言反馈添加" ,authLogin:true,msg:true }
},
{
    path:"shangpinxinxi",
        name:"IndexshangpinxinxiList",
    component: () => import("@/views/shangpinxinxi/index"),
    meta: { title:"商品信息列表"  }
},
{
    path:"shangpinxinxidetail",
        name:"IndexshangpinxinxiDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/shangpinxinxi/webdetail"),
    meta: { title:"商品信息详情"  }
},
{
    path:"gouwucheadd",
        name:"IndexgouwucheAdd",
    component: () => import("@/views/gouwuche/webadd"),
    meta: { title:"购物车添加" ,authLogin:true,msg:true }
},
{
    path:"guanyudetail",
        name:"IndexguanyuDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/guanyu/webdetail"),
    meta: { title:"关于详情"  }
},
{
    path:"fenxiangqushi",
        name:"IndexfenxiangqushiList",
    component: () => import("@/views/fenxiangqushi/index"),
    meta: { title:"分享趣事列表"  }
},
{
    path:"fenxiangqushidetail",
        name:"IndexfenxiangqushiDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/fenxiangqushi/webdetail"),
    meta: { title:"分享趣事详情"  }
},
{
    path:"yiliaofuwu",
        name:"IndexyiliaofuwuList",
    component: () => import("@/views/yiliaofuwu/index"),
    meta: { title:"医疗服务列表"  }
},
{
    path:"yiliaofuwudetail",
        name:"IndexyiliaofuwuDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/yiliaofuwu/webdetail"),
    meta: { title:"医疗服务详情"  }
},
{
    path:"fuwuyuyueadd",
        name:"IndexfuwuyuyueAdd",
    component: () => import("@/views/fuwuyuyue/webadd"),
    meta: { title:"服务预约添加" ,authLogin:true,msg:true }
},
]
