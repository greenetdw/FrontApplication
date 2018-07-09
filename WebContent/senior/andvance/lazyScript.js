// 旧方法

function createXHR() {
	var xhr;
	try {
		xhr = new XMLHttpRequest();
	} catch (e) {
		handleErr(e);

		try {
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				xhr = null;
			}
		}
	}

	return xhr;
}

function handleErr(error) {
	// 这一步在实战中很重要，因为catch会延长作用域链，所以是在全局作用域声明的e
	// 这里我们把它赋给局部变量，则查找更快
	var err = error;

	// do sth.
}

// 惰性函数
// 第二次才生效
// 作用：优化对于被频繁使用的函数
function createXHR() {
	var xhr;
	if (typeof XMLHttpRequest != 'undefined') {
		xhr = new XMLHttpRequest();
		createXHR = function() {
			return new XMLHttpRequest();
		}
	} else {
		try {
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
			createXHR = function() {
				return new ActiveXObject("Msxml2.XMLHTTP");
			}
		} catch (e) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
				createXHR = function() {
					return new ActiveXObject("Microsoft.XMLHTTP");
				}
			} catch (e) {
				createXHR = function() {
					return null;
				}
			}
		}
	}
	return xhr
}