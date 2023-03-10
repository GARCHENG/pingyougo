//控制层 
app.controller('itemCatController', function($scope, $controller, itemCatService) {

	$controller('baseController', {
		$scope: $scope
	}); //继承

	//读取列表数据绑定到表单中  
	$scope.findAll = function() {
		itemCatService.findAll().success(
			function(response) {
				$scope.list = response;
			}
		);
	}

	//分页
	$scope.findPage = function(page, rows) {
		itemCatService.findPage(page, rows).success(
			function(response) {
				$scope.list = response.rows;
				$scope.paginationConf.totalItems = response.total; //更新总记录数
			}
		);
	}

	//查询实体 
	$scope.findOne = function(id) {
		itemCatService.findOne(id).success(
			function(response) {
				$scope.entity = response;
			}
		);
	}

	//保存 
	$scope.save = function() {
		var serviceObject; //服务层对象  



		if ($scope.entity.id != null) { //如果有ID
		
			serviceObject = itemCatService.update($scope.entity); //修改  
		} else {
			
			console.log($scope.grade);
			
			if ($scope.grade == 1) {
				$scope.entity.parentId = 0;
			} else if ($scope.grade == 2) {
				$scope.entity.parentId = $scope.entity_1.id;
			} else if ($scope.grade == 3) {
				$scope.entity.parentId = $scope.entity_2.id;
			}
			
			serviceObject = itemCatService.add($scope.entity); //增加 
		}
		serviceObject.success(
			function(response) {
				if (response.success) {
					$scope.entity={};
					//重新查询 
					$scope.grade = 1;
					$scope.selectList({id:0}); //重新加载
				} else {
					alert(response.message);
				}
			}
		);
	}
	
	$scope.clear = function(){
		$scope.entity = {};
	}


	//批量删除 
	$scope.dele = function() {
		//获取选中的复选框			
		itemCatService.dele($scope.selectIds).success(
			function(response) {
				if (response.success) {
					$scope.grade = 1;
					$scope.selectList({id:0}); //重新加载
					$scope.selectIds = [];
				}
			}
		);
	}

	$scope.searchEntity = {}; //定义搜索对象 

	//搜索
	$scope.search = function(page, rows) {
		itemCatService.search(page, rows, $scope.searchEntity).success(
			function(response) {
				$scope.list = response.rows;
				$scope.paginationConf.totalItems = response.total; //更新总记录数
			}
		);
	}

	// 根据父ID查询分类
	$scope.findByParentId = function(parentId) {
		itemCatService.findByParentId(parentId).success(function(response) {
			$scope.list = response;
		});
	}

	// 定义一个变量记录当前是第几级分类
	$scope.grade = 1;
	
	$scope.entity_1 = null;
	$scope.entity_2 = null;

	$scope.setGrade = function(value) {
		$scope.grade = value;
	}

	$scope.selectList = function(p_entity) {

		if ($scope.grade == 1) {
			$scope.entity_1 = null;
			$scope.entity_2 = null;
		}
		if ($scope.grade == 2) {
			$scope.entity_1 = p_entity;
			$scope.entity_2 = null;
		}
		if ($scope.grade == 3) {
			$scope.entity_2 = p_entity;
		}

		$scope.findByParentId(p_entity.id);
	}

	$scope.TypeTemplateList = []; //模板类型列表

	//读取规格列表
	$scope.findTypeTemplateList = function() {
		itemCatService.selectTypeTemplateList().success(
			function(response) {
				// console.log(response);
				$scope.TypeTemplateList = response;
			}
		);
	}











});
