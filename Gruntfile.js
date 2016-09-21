// 包装函数
module.exports = function(grunt){

    // 任务配置，所有插件配置信息
    grunt.initConfig({

        // 获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            jquery: {
                expand: true,
                cwd: 'node_modules/jquery/dist/',
                src: '*.js',
                dest: 'dest/common/jquery/'
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/',
                src: '**',
                dest: 'dest/common/bootstrap/'
            },
            angular: {
                expand: true,
                cwd: 'node_modules/angular/',
                src: '*.js',
                dest: 'dest/common/angular/'
            }
        },

        sass: {
            dist: {
                files: {
                    'themes/admin/css/components.css'   : 'style/global/components.scss',
                    'themes/admin/css/plugins.css'      : 'style/global/plugins.scss',
                    'themes/admin/css/layout.css'       : 'style/admin/layout/layout.scss',
                    'themes/admin/css/darkblue.css'     : 'style/admin/layout/themes/darkblue.scss'
                },
                options: {
                    style: 'expanded'
                }
            }
        }

    });

    // 加载提供sass编译的插件
    grunt.loadNpmTasks('grunt-contrib-sass');

    // 加载提供copy任务的插件
    grunt.loadNpmTasks('grunt-contrib-copy');

    // 告诉grunt当我们在终端输入grunt时需要做什么（注意先后顺序）
    grunt.registerTask('default',['sass','copy']);
    
};