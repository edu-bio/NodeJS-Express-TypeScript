import express, {Application} from 'express';
import morgan from 'morgan';

import IndexRoutes from './routes/index.routes'
import PostRoutes from './routes/post.routes'

export class App{
    app:Application;

    constructor(private port?: number | string){
        this.app= express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3001)
    } 

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }
 
    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/libros',PostRoutes);
    }
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Servidor en puerto 3001',this.app.get('port'))
    }
}