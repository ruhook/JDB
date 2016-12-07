mui.ajax('{WEB_PATH}/mobile/ajaxupdateone/ajaxcarousel', {
	dataType: 'json', //服务器返回json格式数据
	type: 'post', //HTTP请求类型
	success: function(data) {
		var str = "";
		var loop = document.getElementById('slider-loop').innerHTML;
		var obj = {
			prop: data.data
		};
		Mustache.parse(loop);
		var htmlAfterRendered = Mustache.render(loop, obj);
		$('.mui-slider-loop').append(htmlAfterRendered);
	},
	error: function(xhr, type, errorThrown) {
		//异常处理；
		console.log(type);
	}
});