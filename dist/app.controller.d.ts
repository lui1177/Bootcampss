import { AppService } from './app.service';
import { Student } from './entidades/Student';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    ejemplo(): string;
    getIdentificacion(id: number, nom: string, tel: number, ed: number): Student;
}
