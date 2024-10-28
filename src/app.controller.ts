import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entidades/Student';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Ficha 2898754";
  }

  //EndPoint
  @Get("/ejemplo")
  ejemplo(): string {
    return "ejemplo"
  } 

  //EndPoint con parametros
  @Get("identificacion/:id/nombre/:nombre") 
  getIdentificacion(@Param("id") id:number,

                          @Param("nombre")nom:string,
                          @Query ("telefono") tel:number,
                          @Query("edad") ed:number):Student{
      return new Student(id, nom, tel, ed)
  }
}
