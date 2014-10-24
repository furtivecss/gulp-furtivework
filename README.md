# Furtivework

Gulp wrapper for furtivework.

## Installation

```
npm install --save gulp-furtivework
```

## Usage

```js
var gulp    = require('gulp'),
    furtive = require('gulp-furtivework');

gulp.task('furtive', function() {
  return gulp.src('rework/furtive.css')
    .pipe(furtive())
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['furtive']);
```

## License

MIT

## Acknowledgements

Based off of <https://github.com/jxnblk/gulp-basswork>.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
