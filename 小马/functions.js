	var $win = $(window);
	var clientWidth = $win.width();
	var clientHeight = $win.height();
	
	$(window).resize(function() {
	    var newWidth = $win.width();
	    var newHeight = $win.height();
	    if (newWidth != clientWidth && newHeight != clientHeight) {
	        location.replace(location);
	    }
	});
	
	(function($) {
		$.fn.typewriter = function() {
			this.each(function() {
				var $ele = $(this), str = $ele.html(), progress = 0;
				$ele.html('');
				var timer = setInterval(function() {
					var current = str.substr(progress, 1);
					if (current == '<') {
						progress = str.indexOf('>', progress) + 1;
					} else {
						progress++;
					}
					$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
					if (progress >= str.length) {
						clearInterval(timer);
					}
				}, 75);
			});
			return this;
		};
	})(jQuery);
	
	

	
	
	function timeElapse(date){
		/* var current = Date();
		console.log(current)
		console.log(date)
		var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
		var days = Math.floor(seconds / (3600 * 24));
		seconds = seconds % (3600 * 24);
		var hours = Math.floor(seconds / 3600);
		if (hours < 10) {
			hours = "0" + hours;
		}
		seconds = seconds % 3600;
		var minutes = Math.floor(seconds / 60);
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		seconds = seconds % 60;
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		
		
		
		var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
		$("#clock").html(result); */
		
		var new_date = new Date(); //新建一个日期对象，默认现在的时间
			var old_date = new Date("2023-11-25 00:00:00"); //设置过去的一个时间点，"yyyy-MM-dd HH:mm:ss"格式化日期
			var difftime = (new_date - old_date)/1000; //计算时间差,并把毫秒转换成秒
			var days = parseInt(difftime/86400); // 天  24*60*60*1000 
		   	var hours = parseInt(difftime/3600)-24*days;    // 小时 60*60 总小时数-过去的小时数=现在的小时数 
		   	var minutes = parseInt(difftime%3600/60); // 分钟 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
		   	var seconds = parseInt(difftime%60);  // 以60秒为一整份 取余 剩下秒数
		   // console.log("时间差是: "+days+"天, "+hours+"小时, "+minutes+"分钟, "+seconds+"秒")
		var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
		$("#clock").html(result);
		
		
		
		
		
		
	}