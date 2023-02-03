//服务层
app.service('contentService',function($http){
	var URL = "http://localhost:8989/shopping-content/";   	
	//读取列表数据绑定到表单中
	this.findAll=function(){
		return $http.get(URL+'content-ms/findAll');		
	}
	//分页 
	this.findPage=function(page,rows){
		return $http.get(URL+'content-ms/findPage?page='+page+'&rows='+rows);
	}
	//查询实体
	this.findOne=function(id){
		return $http.get(URL+'content-ms/findOne?id='+id);
	}
	//增加 
	this.add=function(entity){
		return  $http.post(URL+'content-ms/add',entity );
	}
	//修改 
	this.update=function(entity){
		return  $http.post(URL+'content-ms/update',entity );
	}
	//删除
	this.dele=function(ids){
		return $http.get(URL+'content-ms/delete?ids='+ids);
	}
	//搜索
	this.search=function(page,rows,searchEntity){
		return $http.post(URL+'content-ms/search?page='+page+"&rows="+rows, searchEntity);
	}    	
});
