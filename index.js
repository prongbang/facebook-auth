const app = require('express')();

app.set('port', (process.env.PORT || 5000));

app.get('/redirect', (req, res) => {
    let qs = req._parsedUrl.query;
    res.redirect('https://fb-authen.herokuapp.com/redirect/?' + qs);
});

app.get('/facebook', (req, res) => {
    res.sendFile('public/facebook.html', {root: __dirname});
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});