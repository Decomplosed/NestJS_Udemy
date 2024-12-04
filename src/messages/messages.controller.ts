import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessagess() {}

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {}
}
