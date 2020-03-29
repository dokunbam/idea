import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dtos';
@Controller('idea')
export class IdeaController {
    constructor(private ideaService: IdeaService) { }

    @Get()
    GetAllIdeas() {
        return this.ideaService.GetAllIdeas();
    }

    @Post()
    CreateIdea(@Body() data: IdeaDTO) {
        return this.ideaService.CreateIdea(data)
    }

    @Get(':id')
    GetIdea(@Param('id') id: string) {
        return this.ideaService.GetIdea(id);
    }

    @Put(':id')
    UpdateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
        return this.ideaService.UpdateIdea(id, data)
    }

    @Delete(':id')
    RemoveIdea(@Param('id') id: string) {
        return this.ideaService.RemoveIdea(id);
    }
}
