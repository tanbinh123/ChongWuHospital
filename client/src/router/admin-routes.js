import store from '@/store';

export default [
{
    path: 'pay',
        name: 'AdminPay',
    component: () => import('@/views/zhifu/zhifu'),
    meta: {authLogin: true},
},

{
    path: 'shoucangjilu',
        name: 'Adminshoucangjilu',
    component: () => import('@/views/shoucangjilu/list'),
    meta: {authLogin: true},
},

{
    path:"admins",
        name:"AdminadminsList",
    component: () => import("@/views/admins/list"),
    meta: { title:"管理员列表",authLogin:true }
},
{
    path:"adminsadd",
        name:"AdminadminsAdd",
    component: () => import("@/views/admins/add"),
    meta: { title:"添加管理员",authLogin:true }
},
{
    path:"adminsupdt",
        name:"AdminadminsUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/admins/updt"),
    meta: { title:"编辑管理员",authLogin:true }
},
{
    path:"adminsupdtself",
        name:"AdminadminsUpdtSelf",
    props:route=>({id:store.state.user.session.id}),
    component: () => import("@/views/admins/updt"),
    meta: { title:"编辑管理员",authLogin:true }
},
{
    path:"yonghu",
        name:"AdminyonghuList",
    component: () => import("@/views/yonghu/list"),
    meta: { title:"用户列表",authLogin:true }
},
{
    path:"yonghuadd",
        name:"AdminyonghuAdd",
    component: () => import("@/views/yonghu/add"),
    meta: { title:"添加用户",authLogin:true }
},
{
    path:"yonghuupdt",
        name:"AdminyonghuUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/yonghu/updt"),
    meta: { title:"编辑用户",authLogin:true }
},
{
    path:"yonghuupdtself",
        name:"AdminyonghuUpdtSelf",
    props:route=>({id:store.state.user.session.id}),
    component: () => import("@/views/yonghu/updt"),
    meta: { title:"编辑用户",authLogin:true }
},
{
    path:"zixunfenlei",
        name:"AdminzixunfenleiList",
    component: () => import("@/views/zixunfenlei/list"),
    meta: { title:"资讯分类列表",authLogin:true }
},
{
    path:"zixunfenleiadd",
        name:"AdminzixunfenleiAdd",
    component: () => import("@/views/zixunfenlei/add"),
    meta: { title:"添加资讯分类",authLogin:true }
},
{
    path:"zixunfenleiupdt",
        name:"AdminzixunfenleiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/zixunfenlei/updt"),
    meta: { title:"编辑资讯分类",authLogin:true }
},
{
    path:"chongwuzixun",
        name:"AdminchongwuzixunList",
    component: () => import("@/views/chongwuzixun/list"),
    meta: { title:"宠物资讯列表",authLogin:true }
},
{
    path:"chongwuzixun_tianjiaren",
        name:"AdminchongwuzixunListtianjiaren",
    component: () => import("@/views/chongwuzixun/list-tianjiaren"),
    meta: { title:"宠物资讯列表",authLogin:true }
},
{
    path:"chongwuzixunadd",
        name:"AdminchongwuzixunAdd",
    component: () => import("@/views/chongwuzixun/add"),
    meta: { title:"添加宠物资讯",authLogin:true }
},
{
    path:"chongwuzixunupdt",
        name:"AdminchongwuzixunUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/chongwuzixun/updt"),
    meta: { title:"编辑宠物资讯",authLogin:true }
},
{
    path:"chongwuzixundetail",
        props:route=>({id:route.query.id}),
    name:"AdminchongwuzixunDetail",
    component: () => import("@/views/chongwuzixun/detail"),
    meta: { title:"宠物资讯详情" }
},
{
    path:"youqinglianjie",
        name:"AdminyouqinglianjieList",
    component: () => import("@/views/youqinglianjie/list"),
    meta: { title:"友情链接列表",authLogin:true }
},
{
    path:"youqinglianjieadd",
        name:"AdminyouqinglianjieAdd",
    component: () => import("@/views/youqinglianjie/add"),
    meta: { title:"添加友情链接",authLogin:true }
},
{
    path:"youqinglianjieupdt",
        name:"AdminyouqinglianjieUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/youqinglianjie/updt"),
    meta: { title:"编辑友情链接",authLogin:true }
},
{
    path:"liuyanfankui",
        name:"AdminliuyanfankuiList",
    component: () => import("@/views/liuyanfankui/list"),
    meta: { title:"留言反馈列表",authLogin:true }
},
{
    path:"liuyanfankui_liuyanren",
        name:"AdminliuyanfankuiListliuyanren",
    component: () => import("@/views/liuyanfankui/list-liuyanren"),
    meta: { title:"留言反馈列表",authLogin:true }
},
{
    path:"liuyanfankuiadd",
        name:"AdminliuyanfankuiAdd",
    component: () => import("@/views/liuyanfankui/add"),
    meta: { title:"添加留言反馈",authLogin:true }
},
{
    path:"liuyanfankuiupdt",
        name:"AdminliuyanfankuiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/liuyanfankui/updt"),
    meta: { title:"编辑留言反馈",authLogin:true }
},
{
    path:"lunbotu",
        name:"AdminlunbotuList",
    component: () => import("@/views/lunbotu/list"),
    meta: { title:"轮播图列表",authLogin:true }
},
{
    path:"lunbotuadd",
        name:"AdminlunbotuAdd",
    component: () => import("@/views/lunbotu/add"),
    meta: { title:"添加轮播图",authLogin:true }
},
{
    path:"lunbotuupdt",
        name:"AdminlunbotuUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/lunbotu/updt"),
    meta: { title:"编辑轮播图",authLogin:true }
},
{
    path:"shangpinfenlei",
        name:"AdminshangpinfenleiList",
    component: () => import("@/views/shangpinfenlei/list"),
    meta: { title:"商品分类列表",authLogin:true }
},
{
    path:"shangpinfenleiadd",
        name:"AdminshangpinfenleiAdd",
    component: () => import("@/views/shangpinfenlei/add"),
    meta: { title:"添加商品分类",authLogin:true }
},
{
    path:"shangpinfenleiupdt",
        name:"AdminshangpinfenleiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/shangpinfenlei/updt"),
    meta: { title:"编辑商品分类",authLogin:true }
},
{
    path:"shangpinxinxi",
        name:"AdminshangpinxinxiList",
    component: () => import("@/views/shangpinxinxi/list"),
    meta: { title:"商品信息列表",authLogin:true }
},
{
    path:"shangpinxinxiadd",
        name:"AdminshangpinxinxiAdd",
    component: () => import("@/views/shangpinxinxi/add"),
    meta: { title:"添加商品信息",authLogin:true }
},
{
    path:"shangpinxinxiupdt",
        name:"AdminshangpinxinxiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/shangpinxinxi/updt"),
    meta: { title:"编辑商品信息",authLogin:true }
},
{
    path:"shangpinxinxidetail",
        props:route=>({id:route.query.id}),
    name:"AdminshangpinxinxiDetail",
    component: () => import("@/views/shangpinxinxi/detail"),
    meta: { title:"商品信息详情" }
},
{
    path:"gouwuche",
        name:"AdmingouwucheList",
    component: () => import("@/views/gouwuche/list"),
    meta: { title:"购物车列表",authLogin:true }
},
{
    path:"gouwuche_goumairen",
        name:"AdmingouwucheListgoumairen",
    component: () => import("@/views/gouwuche/list-goumairen"),
    meta: { title:"购物车列表",authLogin:true }
},
{
    path:"gouwucheadd",
        name:"AdmingouwucheAdd",
    component: () => import("@/views/gouwuche/add"),
    meta: { title:"添加购物车",authLogin:true }
},
{
    path:"gouwucheupdt",
        name:"AdmingouwucheUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/gouwuche/updt"),
    meta: { title:"编辑购物车",authLogin:true }
},
{
    path:"gouwuchedetail",
        props:route=>({id:route.query.id}),
    name:"AdmingouwucheDetail",
    component: () => import("@/views/gouwuche/detail"),
    meta: { title:"购物车详情" }
},
{
    path:"dingdanxinxi",
        name:"AdmindingdanxinxiList",
    component: () => import("@/views/dingdanxinxi/list"),
    meta: { title:"订单信息列表",authLogin:true }
},
{
    path:"dingdanxinxi_xiadanren",
        name:"AdmindingdanxinxiListxiadanren",
    component: () => import("@/views/dingdanxinxi/list-xiadanren"),
    meta: { title:"订单信息列表",authLogin:true }
},
{
    path:"dingdanxinxiadd",
        name:"AdmindingdanxinxiAdd",
    component: () => import("@/views/dingdanxinxi/add"),
    meta: { title:"添加订单信息",authLogin:true }
},
{
    path:"dingdanxinxiupdt",
        name:"AdmindingdanxinxiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/dingdanxinxi/updt"),
    meta: { title:"编辑订单信息",authLogin:true }
},
{
    path:"dingdanxinxidetail",
        props:route=>({id:route.query.id}),
    name:"AdmindingdanxinxiDetail",
    component: () => import("@/views/dingdanxinxi/detail"),
    meta: { title:"订单信息详情" }
},
{
    path:"guanyu",
        name:"AdminguanyuList",
    component: () => import("@/views/guanyu/list"),
    meta: { title:"关于列表",authLogin:true }
},
{
    path:"guanyuadd",
        name:"AdminguanyuAdd",
    component: () => import("@/views/guanyu/add"),
    meta: { title:"添加关于",authLogin:true }
},
{
    path:"guanyuupdt",
        name:"AdminguanyuUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/guanyu/updt"),
    meta: { title:"编辑关于",authLogin:true }
},
{
    path:"guanyudetail",
        props:route=>({id:route.query.id}),
    name:"AdminguanyuDetail",
    component: () => import("@/views/guanyu/detail"),
    meta: { title:"关于详情" }
},
{
    path:"fenxiangqushi",
        name:"AdminfenxiangqushiList",
    component: () => import("@/views/fenxiangqushi/list"),
    meta: { title:"分享趣事列表",authLogin:true }
},
{
    path:"fenxiangqushi_fenxiangren",
        name:"AdminfenxiangqushiListfenxiangren",
    component: () => import("@/views/fenxiangqushi/list-fenxiangren"),
    meta: { title:"分享趣事列表",authLogin:true }
},
{
    path:"fenxiangqushiadd",
        name:"AdminfenxiangqushiAdd",
    component: () => import("@/views/fenxiangqushi/add"),
    meta: { title:"添加分享趣事",authLogin:true }
},
{
    path:"fenxiangqushiupdt",
        name:"AdminfenxiangqushiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/fenxiangqushi/updt"),
    meta: { title:"编辑分享趣事",authLogin:true }
},
{
    path:"fenxiangqushidetail",
        props:route=>({id:route.query.id}),
    name:"AdminfenxiangqushiDetail",
    component: () => import("@/views/fenxiangqushi/detail"),
    meta: { title:"分享趣事详情" }
},
{
    path:"yiliaofuwu",
        name:"AdminyiliaofuwuList",
    component: () => import("@/views/yiliaofuwu/list"),
    meta: { title:"医疗服务列表",authLogin:true }
},
{
    path:"yiliaofuwuadd",
        name:"AdminyiliaofuwuAdd",
    component: () => import("@/views/yiliaofuwu/add"),
    meta: { title:"添加医疗服务",authLogin:true }
},
{
    path:"yiliaofuwuupdt",
        name:"AdminyiliaofuwuUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/yiliaofuwu/updt"),
    meta: { title:"编辑医疗服务",authLogin:true }
},
{
    path:"yiliaofuwudetail",
        props:route=>({id:route.query.id}),
    name:"AdminyiliaofuwuDetail",
    component: () => import("@/views/yiliaofuwu/detail"),
    meta: { title:"医疗服务详情" }
},
{
    path:"fuwuyuyue",
        name:"AdminfuwuyuyueList",
    component: () => import("@/views/fuwuyuyue/list"),
    meta: { title:"服务预约列表",authLogin:true }
},
{
    path:"fuwuyuyue_yuyueren",
        name:"AdminfuwuyuyueListyuyueren",
    component: () => import("@/views/fuwuyuyue/list-yuyueren"),
    meta: { title:"服务预约列表",authLogin:true }
},
{
    path:"fuwuyuyueadd",
        name:"AdminfuwuyuyueAdd",
    component: () => import("@/views/fuwuyuyue/add"),
    meta: { title:"添加服务预约",authLogin:true }
},
{
    path:"fuwuyuyueupdt",
        name:"AdminfuwuyuyueUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/fuwuyuyue/updt"),
    meta: { title:"编辑服务预约",authLogin:true }
},
{
    path:"fuwuyuyuedetail",
        props:route=>({id:route.query.id}),
    name:"AdminfuwuyuyueDetail",
    component: () => import("@/views/fuwuyuyue/detail"),
    meta: { title:"服务预约详情" }
},
{
    path:"yuyuechuli",
        name:"AdminyuyuechuliList",
    component: () => import("@/views/yuyuechuli/list"),
    meta: { title:"预约处理列表",authLogin:true }
},
{
    path:"yuyuechuli_yuyueren",
        name:"AdminyuyuechuliListyuyueren",
    component: () => import("@/views/yuyuechuli/list-yuyueren"),
    meta: { title:"预约处理列表",authLogin:true }
},
{
    path:"yuyuechuliadd",
        name:"AdminyuyuechuliAdd",
    component: () => import("@/views/yuyuechuli/add"),
    meta: { title:"添加预约处理",authLogin:true }
},
{
    path:"yuyuechuliupdt",
        name:"AdminyuyuechuliUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/yuyuechuli/updt"),
    meta: { title:"编辑预约处理",authLogin:true }
},
{
    path:"yuyuechulidetail",
        props:route=>({id:route.query.id}),
    name:"AdminyuyuechuliDetail",
    component: () => import("@/views/yuyuechuli/detail"),
    meta: { title:"预约处理详情" }
},
{
    path:"pinglun",
        name:"AdminpinglunList",
    component: () => import("@/views/pinglun/list"),
    meta: { title:"评论列表",authLogin:true }
},
{
    path:"pinglun_yuyueren",
        name:"AdminpinglunListyuyueren",
    component: () => import("@/views/pinglun/list-yuyueren"),
    meta: { title:"评论列表",authLogin:true }
},
{
    path:"pinglunadd",
        name:"AdminpinglunAdd",
    component: () => import("@/views/pinglun/add"),
    meta: { title:"添加评论",authLogin:true }
},
{
    path:"pinglunupdt",
        name:"AdminpinglunUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/pinglun/updt"),
    meta: { title:"编辑评论",authLogin:true }
},
{
    path:"pinglundetail",
        props:route=>({id:route.query.id}),
    name:"AdminpinglunDetail",
    component: () => import("@/views/pinglun/detail"),
    meta: { title:"评论详情" }
},
{
    path:"huifupinglun",
        name:"AdminhuifupinglunList",
    component: () => import("@/views/huifupinglun/list"),
    meta: { title:"回复评论列表",authLogin:true }
},
{
    path:"huifupinglun_yuyueren",
        name:"AdminhuifupinglunListyuyueren",
    component: () => import("@/views/huifupinglun/list-yuyueren"),
    meta: { title:"回复评论列表",authLogin:true }
},
{
    path:"huifupinglunadd",
        name:"AdminhuifupinglunAdd",
    component: () => import("@/views/huifupinglun/add"),
    meta: { title:"添加回复评论",authLogin:true }
},
{
    path:"huifupinglunupdt",
        name:"AdminhuifupinglunUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/huifupinglun/updt"),
    meta: { title:"编辑回复评论",authLogin:true }
},
{
    path:"huifupinglundetail",
        props:route=>({id:route.query.id}),
    name:"AdminhuifupinglunDetail",
    component: () => import("@/views/huifupinglun/detail"),
    meta: { title:"回复评论详情" }
},
{
    path:"chongzhi",
        name:"AdminchongzhiList",
    component: () => import("@/views/chongzhi/list"),
    meta: { title:"充值列表",authLogin:true }
},
{
    path:"chongzhi_chongzhiren",
        name:"AdminchongzhiListchongzhiren",
    component: () => import("@/views/chongzhi/list-chongzhiren"),
    meta: { title:"充值列表",authLogin:true }
},
{
    path:"chongzhiadd",
        name:"AdminchongzhiAdd",
    component: () => import("@/views/chongzhi/add"),
    meta: { title:"添加充值",authLogin:true }
},
{
    path:"chongzhiupdt",
        name:"AdminchongzhiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/chongzhi/updt"),
    meta: { title:"编辑充值",authLogin:true }
},
]
