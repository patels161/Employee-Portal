/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app=angular.module("myapp",['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/tab1", {
        templateUrl : "home.html",
        controller: "mainCtrl"
    })
    .when("/tab2", {
        templateUrl : "login.html",
        controller: "mainCtrl"
    })
    .when("/tab3", {
        templateUrl : "list.html"
    })
    .when("/tab4", {
        templateUrl : "add_emp.html"
    })
    .when("/tab5", {
        templateUrl : "modify.html"
    });
    
});

app.controller('editCtrl',['$scope','$location','EmployeeService',function($scope,$location,EmployeeService){
    $scope.user_edit = EmployeeService.editObj;
    $scope.employees = EmployeeService.employees;

    
    $scope.modify = function(employee){
        console.log(employee);
        debugger;
        for(i=0; i<EmployeeService.employees.length ; i++ )
        {
            if(EmployeeService.editObj.id === EmployeeService.employees[i].id)
            {
                EmployeeService.employees[i] = employee;
                break;
            }
        }
        console.log(EmployeeService.editObj);
        $scope.goNewForm('tab3');
    };
    
    $scope.goNewForm = function(custPath){
        console.log('New Path');
        $location.path(custPath);
    };

}]);

app.controller('addCtrl',['$scope','$location','EmployeeService',function($scope,$location,EmployeeService){
    $scope.user = {};
    $scope.employees = EmployeeService.employees;
    
    $scope.addRow = function(){
        debugger;
        $scope.addemployee = $scope.user;
        $scope.employees.push($scope.addemployee);
        console.log($scope.addemployee);
        $scope.goNewForm('tab3');
    };
    $scope.goNewForm = function(custPath){
        console.log('New Path');
        $location.path(custPath);
    };
}]);

app.controller('mainCtrl',['$scope','$location','EmployeeService',function($scope,$location,EmployeeService){
    
    $scope.employees = EmployeeService.employees;
    $scope.goNewForm = function(custPath){
        console.log('New Path');
        $location.path(custPath);
    };
    $scope.editBtn = function(employee){debugger;
        EmployeeService.editObj = angular.copy(employee);
        console.log(EmployeeService.editObj);
        $scope.goNewForm('tab5');
        //EmployeeService.editObj = null;
        
    };
    //$scope.addRow = EmployeeService.addRow;
   
    $scope.sortColumn = function(item){
        if(isNaN(item[$scope.sortColumn]))
        return item[$scope.sortColumn];
        return parseInt(item[$scope.sortColumn]);
    };
        
    $scope.remove = function(index){
        $scope.employees.splice(index,1);
    };
//    $scope.addRow = function(){	
//     debugger;
//       
//       var name = document.getElementById('ename').value,
//           id = document.getElementById('eid').value,
//           bdate = document.getElementById('bdate').value,
//           age = document.getElementById('age').value;
//   
//       console.log(document.getElementById('ename'));
//	$scope.employees.push({'id':id, 'name':name, 'birthdate': bdate, 'age': age});
//	EmployeeService.employees = $scope.employees;
//        $scope.goNewForm('tab3');
//    }; 

    
    
//    $scope.editingData = {};
//    
//    for (var i = 0, length = $scope.employees.length; i < length; i++) {
//      $scope.editingData[$scope.employees[i].idd] = false;
//    }

//    $scope.update = function(employees){
//        $scope.editingData[employees.idd] = false;
//    };
}]);

app.service('EmployeeService',function(){
    this.employees = [{"id": "abc123", "name":"Sajni D Patel", "birthdate": "01/16/1994", "age":23},
                        {"id": "abc124", "name":"Sajni D Patel", "birthdate": "12/21/1992", "age":24},
                        {"id": "abc125", "name":"Sajni D Patel", "birthdate": "04/27/1990", "age":26},
                        {"id": "abc126", "name":"Sajni D Patel", "birthdate": "03/13/1991", "age":26},
                        {"id": "abc127", "name":"Sajni D Patel", "birthdate": "06/04/1995", "age":22}
    ];
//    var addRow = function() {
//        debugger;
//        employees.push({"id":id, "name":name, "birthdate":birthdate, "age":age});
//	id='';
//        name='';
//	birthdate='';
//	age='';
//    }; 
//    this.obj={};
//    
//    var getList = function(){
//        return getList;
//    };
    
    this.editObj = {};
    this.obj = {};
    
});
