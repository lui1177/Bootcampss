import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsampsController } from './controllers/bootcampsamps.controller';
import { UsersController } from './controllers/users.controller';
import { ReviewsController } from './controllers/reviews.controller';
import { CoursesController } from './controllers/courses.controller';
import { BootcampsModule } from './bootcamps/bootcamps.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BootcampsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bootcamps_2898754',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true,
      debug: true
    }),
  ],
  controllers: [AppController, BootcampsampsController, UsersController, ReviewsController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
  