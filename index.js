'use strict';

const through = require('through2');
const gutil = require('gulp-util');
const path = require('path');
const slash = require('slash');

const PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-filenames-to-txt';

const gulpFilenamesToTxt = (options = {}) => {
    if (typeof options.fileName === 'undefined') {
        options.fileName = 'file.txt';
    }

    function combine(file, enc, cb) {
        if (typeof(this.files) === 'undefined') {
            this.files = [];
        }

        let fileName = slash(path.relative(file.cwd, file.path));

        if (typeof options.base !== 'undefined') {
            fileName = fileName.replace(options.base, '');
        }

        this.files.push(file);

        cb();
    }

    function flush (cb) {
        const file = new gutil.File({
            cwd: '',
            base: '',
            path: path.join(options.fileName),
            contents: new Buffer(this.files.join('\n'))
        });

        this.push(file);
        
        cb();
    }

    return through.obj(combine, flush);
}

module.exports = gulpFilenamesToTxt;