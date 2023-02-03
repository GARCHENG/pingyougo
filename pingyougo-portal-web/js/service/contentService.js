app.service("contentService",function($http){
	var URL = "http://localhost:8989/shopping-content/";
	this.findByCategoryId = function(categoryId){
		return $http.get(URL+"content-ms/findByCategoryId?categoryId="+categoryId);
	}
});