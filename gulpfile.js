var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');
 
var taskConfig = {

  component: {
    file: 'index.js',
    name: 'DropDown',
    dependencies: [
      'classnames',
      'react',
      'react-dom'
    ],
    files: [
      'style.css'
    ],
    src: 'src',
    dist: 'dist',
    lib: 'lib'
  },

  example: {
    src: 'example/src',
    dist: 'example/dist',
    files: [
      'index.html',
      'style.css'
    ],
    scripts: [
      'app.js'
    ]
  }

};

initGulpTasks(gulp, taskConfig);

gulp.task('copystatic:plugin', function () {
  gulp.src(taskConfig.component.src+'/'+taskConfig.component.files)
      .pipe(gulp.dest(taskConfig.component.dist))
  gulp.src(taskConfig.component.src+'/'+taskConfig.component.files)
      .pipe(gulp.dest(taskConfig.component.lib))
});

gulp.task('copystatic:pluginwatch', function() {
  gulp.watch(taskConfig.component.src+'/'+taskConfig.component.files, ['copystatic:plugin'])
});

gulp.task('dev:plugin', ['watch:lib', 'copystatic:pluginwatch', 'dev']);