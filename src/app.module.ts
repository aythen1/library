import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UserModule } from './user/user.module';
import { AuthJwtModule } from './auth-jwt/auth-jwt.module';
import { SendMailModule } from './send-mail/send-mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot(DataSourceConfig),
    UserModule,
    AuthJwtModule,
    SendMailModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
