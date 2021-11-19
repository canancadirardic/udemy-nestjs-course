import { Module } from '@nestjs/common';
import { ResourceService } from './resource.service';

@Module({
  imports: [],
  providers: [ResourceService],
})
export class LibsModule {}