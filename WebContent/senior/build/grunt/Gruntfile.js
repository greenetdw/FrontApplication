
module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            static_mappings: {
                // Because these src-dest file mappings are manually specified, every
                // time a new file is added or removed, the Gruntfile has to be updated.
                files: [
                  {src: 'js/index.js', dest: 'build/index.min.js'},
                  {src: 'js/main.js', dest: 'build/main.min.js'}
                ],
            },
        },
        concat : {
            bar : {
                src: ['build/*.js'],
                dest: 'dest/all.min.js'
            }
        }/*,
        watch : {
        	files : ['js/index.js'],
        	tasks : ['uglify', 'concat']
        }*/
        
    });
    // 载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
//    grunt.loadNpmTasks('grunt-contrib-watch');
    // 注册任务
    grunt.registerTask('default', ['concat', 'uglify'/*, 'watch'*/]);
};