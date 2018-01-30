# Gulp filenames to Txt

Iterates over the set of files from `gulp.src` and save their filenames to `.txt` file.

Plugin is designed to help with dynamically creating clientlibs in Adobe Exprience Manager.

## Usage

```
const filenames = require("gulp-filenames-to-txt");

gulp.task('css:txt', () => {
	return gulp.src('css/**/*.css'])
		.pipe(filenames({
			fileName: 'css.txt'
		}))
		.pipe(gulp.dest('css'));
});


```

## License

MIT