jQuery(document).ready(function() {
    Metronic.init();
    Layout.init();
    QuickSidebar.init();
});

// 对象应用
var app = angular.module("system-admin",['ngRoute']);



// 配置路由规则
app.config(['$routeProvider', function($routeProvider){

    // 设置默认访问页面
    $routeProvider.otherwise({redirectTo:'/main'});

    // 主页面路由
    $routeProvider.when('/main',{
        templateUrl : 'main.html',
        controller  : 'MainPage'
    });

    // 设置页面路由
    $routeProvider.when('/setting',{
        templateUrl : 'setting.html',
        controller  : 'SettingPage'
    });

    // 自定义导航路由
    $routeProvider.when('/navigation',{
        templateUrl : 'navigation-list.html',
        controller  : 'NavigationListPage'
    });

    // 自定义导航路由
    $routeProvider.when('/navigation-new',{
        templateUrl : 'navigation-edit.html',
        controller  : 'NavigationNewPage'
    });

    // 独立页面路由
    $routeProvider.when('/independent',{
        templateUrl : 'independent-list.html',
        controller  : 'IndependentListPage'
    });

    // 独立页面路由
    $routeProvider.when('/independent-new',{
        templateUrl : 'independent-edit.html',
        controller  : 'IndependentEditPage'
    });

    // 文章分类路由
    $routeProvider.when('/article-category',{
        templateUrl : 'article-category.html',
        controller  : 'ArticleCategoryPage'
    });

    // 新增文章分类路由
    $routeProvider.when('/article-category-new',{
        templateUrl : 'category-edit.html',
        controller  : 'ArticleCategoryNewPage'
    });

    // 新增文章分类路由
    $routeProvider.when('/article-category-:id',{
        templateUrl : 'category-edit.html',
        controller  : 'ArticleCategoryEditPage'
    });

    // 文章分类路由
    $routeProvider.when('/article-list',{
        templateUrl : 'article-list.html',
        controller  : 'ArticleListPage'
    });

    // 文章分类路由
    $routeProvider.when('/article-content-new',{
        templateUrl : 'article-edit.html',
        controller  : 'ArticleContentNewPage'
    });

}]);

app.directive('editor', function () {
    return {
        restrict : "E",
        link : function (scope, element, attrs, ctrl) {
            switch(attrs.driver){
                case 'ueditor': return this.initUeditor(scope, element, attrs, ctrl);
            }
        },
        initUeditor : function (scope, element, attrs, ctrl) {
            var id = 'editor-' + Date.now();
            element[0].id = id;
            var ue = UE.getEditor(id, {
                initialFrameWidth: '100%',
                initialFrameHeight: '300',
                autoHeightEnabled: true
            });
        }
    };
});

// 主页控制器
app.controller('MainPage', function ($scope) {
    Layout.fixContentHeight();
    Layout.setSidebarMenuActiveLink('match');
    Themes.init();
});

// 主页控制器
app.controller('SettingPage', function ($scope) {
    Layout.fixContentHeight();
    Layout.setSidebarMenuActiveLink('match');
});

// 自定义导航控制器
app.controller('NavigationListPage', function ($scope) {
    Layout.fixContentHeight();
    Layout.setSidebarMenuActiveLink('match');
});

// 自定义导航控制器
app.controller('NavigationNewPage', function ($scope) {
    Layout.fixContentHeight();
    Layout.setSidebarMenuActiveLink('match');
    $scope.page = {
        title       : '新增导航',
        title_small : 'new navigation'
    };
});

// 独立页管理控制器
app.controller('IndependentListPage', function ($scope) {
    Layout.fixContentHeight();
    Layout.setSidebarMenuActiveLink('match');
});

// 独立页管理控制器
app.controller('IndependentEditPage', function ($scope) {
    Layout.fixContentHeight();
    Layout.setSidebarMenuActiveLink('match');
    $scope.page = {
        title       : '新增独立页面',
        title_small : 'new independent page'
    }
});

// 文章分类控制器
app.controller('ArticleCategoryPage', function ($scope) {
    Layout.fixContentHeight();
    Layout.setSidebarMenuActiveLink('match');
});

// 新增文章分类控制器
app.controller('ArticleCategoryNewPage', function ($scope) {
    Layout.fixContentHeight();
    Layout.setSidebarMenuActiveLink('match');
    $scope.page = {
        title       : '新增分类',
        title_small : 'new article category'
    }
});

// 新增文章分类控制器
app.controller('ArticleCategoryEditPage', function ($scope, $routeParams) {
    Layout.fixContentHeight();
    Layout.setSidebarMenuActiveLink('match');
    $scope.page = {
        title       : '编辑分类',
        title_small : 'edit article category'
    };
    id = $routeParams.id;
});

// 文章列表控制器
app.controller('ArticleListPage', function ($scope) {
    Layout.fixContentHeight();
    Layout.setSidebarMenuActiveLink('match');
});

// 发布文章控制器
app.controller('ArticleContentNewPage', function ($scope) {
    Layout.fixContentHeight();
    Layout.setSidebarMenuActiveLink('match');
    $scope.page = {
        title       : '新增文章',
        title_small : 'new article content'
    }
});