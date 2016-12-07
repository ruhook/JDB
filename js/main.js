var addTimer = function() {
	var list = [],
		interval;

	return function(id, timeStamp) {
		if (!interval) {
			interval = setInterval(go, 1);
		}
		list.push({
			ele: document.getElementById(id),
			time: timeStamp
		});
	}

	function go() {
		for (var i = 0; i < list.length; i++) {
			list[i].ele.innerHTML = changeTimeStamp(list[i].time);
			if (!list[i].time)
				list.splice(i--, 1);
		}
	}

	//传入unix时间戳，得到倒计时
	function changeTimeStamp(timeStamp) {
		var distancetime = new Date(timeStamp * 1000).getTime() - new Date().getTime();
		if (distancetime > 0) {　　　　　　　　　　　　　　 //如果大于0.说明尚未到达截止时间       
			var ms1 = Math.floor(distancetime % 1000);

			function PreFixInterge(num, n) {
				//num代表传入的数字，n代表要保留的字符的长度  
				return (Array(n).join(0) + num).slice(-n);
			};
			var ms = PreFixInterge(ms1, 2)
			var sec = Math.floor(distancetime / 1000 % 60);
			var min = Math.floor(distancetime / 1000 / 60 % 60);
			var hour = Math.floor(distancetime / 1000 / 60 / 60 % 24);

			if (sec < 10) {
				sec = "0" + sec;
			}
			if (min < 10) {
				min = "0" + min;
			}
			if (hour < 10) {
				hour = "0" + hour;
			}

			return "<span style='color:#9B9B9B'>倒计时   </span>"+min + ":" + sec + ":" + '<span style="display:inline-block;width: 0.5rem;">' + ms + '</span>';
		} else {　　　　　　　　　　　　　　 //若否，就是已经到截止时间了
			return "已开奖!"
		}
	}
}();