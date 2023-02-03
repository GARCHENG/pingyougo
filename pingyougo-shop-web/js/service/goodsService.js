//服务层
app.service('goodsService',function($http){
	var URL = "http://localhost:8989/shopping-manager/";    	
	//读取列表数据绑定到表单中
	this.findAll=function(){
		return $http.get(URL+'goods-ms/findAll');			
	}
	//分页 
	this.findPage=function(page,rows){
		return $http.get(URL+'goods-ms/findPage?page='+page+'&rows='+rows);
	}
	//查询实体
	this.findOne=function(id){
		return $http.get(URL+'goods-ms/findOne?id='+id);
	}
	//增加 
	this.add=function(entity){
		return  $http.post(URL+'goods-ms/add',entity );
	}
	//修改 
	this.update=function(entity){
		return  $http.post(URL+'goods-ms/update',entity );
	}
	//删除
	this.dele=function(ids){
		return $http.get(URL+'goods-ms/delete?ids='+ids);
	}
	//搜索
	this.search=function(page,rows,searchEntity){
		return $http.post(URL+'goods-ms/search?page='+page+"&rows="+rows, searchEntity);
	}    	
});
