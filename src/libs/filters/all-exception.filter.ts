import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { response } from 'express';

@Catch()
export class AllExceptionFilter extends BaseExceptionFilter {
  catch(exception, host: ArgumentsHost) {
     const ctx = host.switchToHttp();
     const request = ctx.getRequest();     
     const response = ctx.getResponse();
     //console.log(response);
     return response.status(500).json({exception});
  }
}