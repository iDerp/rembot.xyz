const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

app.set('port', process.env.PORT || 87);

var server = app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + server.address().port);
});
