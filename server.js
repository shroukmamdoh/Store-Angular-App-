const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(store + '/angular-build'));
app.get('/*', function(req,res){
res.sendFile(path.join(store, 'angular-build', 'index.html'))
});
app.listen(process.env.PORT || 8080);