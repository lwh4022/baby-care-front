import express from 'express';
import ejs from 'ejs';

const app: express.Application = express();

app.get("/", function(req:express.Request, res:express.Response, next: express.NextFunction){
  res.render('index.html');
})

app.set('view engine', 'ejs')
app.set('views', __dirname + '/public');
app.engine('html', ejs.renderFile)
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));

export default app;