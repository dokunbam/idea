import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestService } from './test.service';
import { TestDTO } from './test.dtos';
import { TestResponseDTO } from './TestResponse.dtos';

@Controller('test')
export class TestController {
    constructor(private testService: TestService) { }

    @Get()
    GetAllIdeas() {
        var AllIdeas = this.testService.GetAllTestCase();
        return AllIdeas;
    }

    @Post()
    CreateIdea(@Body() data: TestDTO) {
        return this.testService.CreateTestCase(data)
    }
}
