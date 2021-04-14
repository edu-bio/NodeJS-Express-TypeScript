import express, {Application} from 'express';

export class App{
    app:Application;
    constructor(){
        this.app= express();
    }

    async listen(){
        await this.app.listen(3001);
        console.log('Servidor en puerto 30