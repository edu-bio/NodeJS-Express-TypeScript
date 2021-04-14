import express, {Application} from 'express';

export class App{
    app:Application;

    constructor(private port?: number | string){
        this.app= express();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3001)
    }

    async listen(){
        await this.app.listen();
        console.log('Servidor en puerto 3001')
    }
}