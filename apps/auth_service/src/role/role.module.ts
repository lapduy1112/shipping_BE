import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { RoleRepository } from './role.repository';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { PermissionModule } from '../permission/permission.module';
@Module({
  imports: [TypeOrmModule.forFeature([Role]), PermissionModule],
  controllers: [RoleController],
  providers: [RoleRepository, RoleService],
  exports: [RoleService],
})
export class RoleModule {}
