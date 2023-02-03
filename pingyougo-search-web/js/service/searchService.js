app.service('searchService',function($http){
	
	var URL = "http://localhost:8989/shopping-search/";
	this.search=function(searchMap){
		return $http.post(URL+'itemsearch-ms/search',searchMap);
	}
	
});