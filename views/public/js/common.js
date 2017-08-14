
	// NProgress.start();
  //
	// NProgress.done();
  //
	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });

	// 验证是否登陆，如果没有登陆的话，则跳转到登陆页面
	if(!$.cookie('PHPSESSID')&&location.pathname!='/login'){
	///views/dashboard/login
		 window.location.href= '/login';
	}

	//判断  因为login页面没有侧栏和顶部

	if(location.pathname!='/login'&&location.pathname!='/dashboard/login'&&location.pathname!='/views/dashboard/login'){
  // var tcinfo = $.cookie('tcinfo');
  // tcinfo = JSON.parse(tcinfo);
  // var html = template('tpl_profile',tcinfo);
  var html = template('tpl_profile',JSON.parse($.cookie('tcinfo')));
  $('.aside>.profile').html(html);
	}