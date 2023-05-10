import * as express from 'express';
import * as dotenv from 'dotenv';
import * as mustache from 'mustache-express';
import * as path from 'path';
import mainRoutes from './routes/index'

dotenv.config();

const server = express();

server.set('view engine' , 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());


server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req, res) => {
    res.render('pages/404');
});

server.listen(process.env.PORT); {
    console.log('server listening on port 3000');
}
