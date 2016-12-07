//rem单位配合js 自适应各分辨率手机
// 注意 必须在head 中加载此文件  若在body后加载 刷新页面则会出现元素单位值改变的现象
function infinite() {
	var htmlWidth = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth)
	if(navigator.userAgent.indexOf('Mobile') != -1) {
		if(htmlWidth <= 320) {
			document.getElementsByTagName("html")[0].setAttribute("style", "font-size:20px;");
		} else {
			document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + (20 / 320 * htmlWidth).toFixed() + "px");
		};
	} else {
		document.getElementsByTagName('html')[0].style['font-size'] = 50 + 'px';
	};	
};

window.addEventListener('resize', function() {
	infinite();
}, false);

infinite();

// tip提示框 居中显示。动画时常和效果 可以在此函数内style样式自定义修改
// 使用时前必须引入jq框架 请与上面的js 分开使用
// 弹窗提示  
//function setAlert(say) {
//	var tpl = '<div class="tip" style="display:none; position: fixed;left: 50%;top: 50%;padding: .1rem .5rem;    background: rgba(0,0,0,.8);color:#fff;border-radius:.4rem;">' + say + '</div>';
//	$('body').append(tpl);
//	$('.tip').css({
//		marginLeft: -(parseInt($('.tip').width()) + parseInt($('.tip').css('paddingLeft')) * 2) / 2,
//		marginTop: -(parseInt($('.tip').height()) + parseInt($('.tip').css('paddingTop')) * 2) / 2,
//	});
//	$('.tip').fadeIn(300);
//	setTimeout(function() {
//		$('.tip').fadeOut(300);
//		setTimeout(function() {
//			$('.tip').remove();
//		}, 300)
//	}, 1300);
//};