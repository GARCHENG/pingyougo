//服务层
app.service('contentCategoryService',function($http){
	    	
	 
	var URL = "http://localhost:8989/shopping-content/";   	 
	    	
	//读取列表数据绑定到表单中
	this.findAll=function(){
		console.log("111111111");
		
		return $http.get(URL+'contentCategory-ms/findAll');		
	}
	//分页 
	this.findPage=function(page,rows){
		return $http.get(URL+'contentCategory-ms/findPage?page='+page+'&rows='+rows);
	}
	//查询实体
	this.findOne=function(id){
		return $http.get('../contentCategory-ms/findOne?id='+id);
	}
	//增加 
	this.add=function(entity){
		return  $http.post('../contentCategory-ms/add',entity );
	}
	//修改 
	this.update=function(entity){
		return  $http.post('../contentCategory-ms/update',entity );
	}
	//删除
	this.dele=function(ids){
		return $http.get('../contentCategory-ms/delete?ids='+ids);
	}
	//搜索
	this.search=function(page,rows,searchEntity){
		return $http.post('../contentCategory/search?page='+page+"&rows="+rows, searchEntity);
	}    	
});
