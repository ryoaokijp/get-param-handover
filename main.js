// class属性にtargetが指定されているaタグの遷移先(href属性)にGETパラメータを引き継ぐ
$('.target').click(function() {
	var obj = $(this);
	var link = obj.attr("href");
	var param = location.search;
	
	obj.attr("href",link + param);
});
