<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.util.*"%>
<%@page import="util.*"%>
<%@page import="net.jntoo.db.*"%>
<%@ taglib prefix="ssm" uri="http://ssm" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


    

<div class="jm-header">
        <div class="top-bar animate-dropdown">
            <div class="container"><!-- 使用bootstrap css框架，container定宽，并剧中 https://v3.bootcss.com/css/#overview-container -->

                <div class="header-top-inner">
                    <div class="cnt-account">
                        <ul class="list-unstyled">
                            <c:choose>
<c:when test="${sessionScope.username != null && '' !=  sessionScope.username }">

                            <li><a href="main.do"><i class="icon fa fa-user"></i>个人中心</a></li>
                            <li><a href="logout.do" onclick="return confirm('确定退出？')"><i class="icon fa fa-sign-out"></i>退出</a></li>
                            </c:when><c:otherwise>
                            <li><a href="#" data-toggle="modal" data-target="#loginModel"><i class="icon fa fa-lock"></i>系统登录</a></li>
                                                        </c:otherwise></c:choose>
                        </ul>
                    </div>
                    <!-- /.cnt-account -->
                    <!-- /.cnt-cart -->
                    <div class="clearfix"></div>
                </div>
                <!-- /.header-top-inner -->
            
<!-- container定宽，并剧中结束 --></div>
            <!-- /.container -->
        </div>


        <div class="main-header">
            <div class="container"><!-- 使用bootstrap css框架，container定宽，并剧中 https://v3.bootcss.com/css/#overview-container -->

                <div class="row" gutter="20">
    

                    <div class="col-xs-12 col-sm-12 col-md-7 logo-holder">
    
                        <!-- ============================================================= LOGO ============================================================= -->
                        <div class="logo"><a href="./"> 常州好爱它宠物管理服务系统 </a></div>
                        <!-- /.logo -->
                        <!-- ============================================================= LOGO : END ============================================================= -->
                    
</div>
                    <!-- /.logo-holder -->

                    
                    <!-- /.top-search-holder -->
                    <!-- /.top-cart-row -->
                
</div>
                <!-- /.row -->
            
<!-- container定宽，并剧中结束 --></div>
            <!-- /.container -->
        </div>

        <div class="header-nav">
            <div class="container"><!-- 使用bootstrap css框架，container定宽，并剧中 https://v3.bootcss.com/css/#overview-container -->

                <div class="nav-list clearfix">
                    <ul class="clearfix" id="navbar-str">
                        <li>
<a href="./">首页
</a>
</li>
<li>
<a href="shangpinxinxilist.do">周边商品
</a>
<ul class="nav-child">
                    <ssm:sql var="mapshangpinfenlei1" type="select">SELECT id,fenlei FROM shangpinfenlei</ssm:sql>
<c:forEach items="${mapshangpinfenlei1}" var="m"><c:set var="m" value="${m}" scope="request" />
<li><a href="shangpinxinxilist.do?fenlei=${m.id}">${m.fenlei}</a></li>
</c:forEach>
</ul>
</li>
<li>
<a href="fenxiangqushilist.do">宠物趣事
</a>
</li>
<li>
<a href="yiliaofuwulist.do">医疗服务
</a>
</li>
<li>
<a href="chongwuzixunlist.do">宠物资讯
</a>
<ul class="nav-child">
                    <ssm:sql var="mapzixunfenlei2" type="select">SELECT id,fenleimingcheng FROM zixunfenlei</ssm:sql>
<c:forEach items="${mapzixunfenlei2}" var="m"><c:set var="m" value="${m}" scope="request" />
<li><a href="chongwuzixunlist.do?fenlei=${m.id}">${m.fenleimingcheng}</a></li>
</c:forEach>
</ul>
</li>
<li>
<a href="liuyanfankuiadd.do">留言反馈
</a>
</li>
<li>
<a href="guanyudetail.do?id=1">关于我们
</a>
<ul class="nav-child">
                    <li><a href="guanyudetail.do?id=2">联系我们</a></li>
</ul>
</li>
<li>
<a href="yonghuadd.do">用户注册
</a>
</li>
<li>
<a href="login.do">后台管理
</a>
</li>                    </ul>
                </div>
            
<!-- container定宽，并剧中结束 --></div>
        </div>

        <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="0" id="loginModel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title" id="0">登录</h4>
            </div>
            <div class="modal-body">
                <div class="pa10">
                    
            <form action="authLogin.do?ac=login&a=a" method="post"><!-- form 标签开始 -->
    
                <div class="form-group">
    
    
                    <input type="text" class="form-control" name="username" placeholder="输入帐号"/>
                
</div>
                <div class="form-group">
    
    
                    <input type="password" class="form-control" name="pwd" placeholder="密码"/>
                
</div>
                <div class="form-group">
    
    
                    <select class="form-control" name="cx">

                        <option value="用户">用户</option>                    
</select>
                
</div>
                <div class="form-group">
    
    
                    <div class="input-group">
    
                        <input type="text" class="form-control" name="pagerandom" placeholder="输入验证码"/>
                        
                    
    <span class="input-group-addon"><img src="captcha.do" style="width: 60px;height: 20px;max-width: none; max-height: none;" onclick="this.src='captcha.do?rand='+new Date().getTime()"/></span>
</div>
                
</div>
                <div class="form-group">
    <div class="row">
        <label style="max-width: 120px;min-height:18px;text-align: right" class="col-sm-2 hiddex-xs"> </label>
        <div class="col-sm-10">
            
                    <button type="submit" class="btn btn-primary">
    登录
</button>
                
        </div>
        
    </div>
</div>
            
<!--form标签结束--></form>
        
                </div>
            </div>
        </div>
    </div>
</div>

    </div>



