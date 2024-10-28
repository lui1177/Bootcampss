import { Controller, Get, Param } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsampsController {

    @Get()
        getAllBootcamps(): string{
            return "Aqui van a mostrarse todos los bootcamps"
        }
        @Get(`:id`)
        getAllBootcampsById(@Param("id") id:number): string{
            return `Aqui van a mostrarse todos los boot:${id}`;
        }
}
