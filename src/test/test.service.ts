import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestEntity } from './test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
    constructor(@InjectRepository(TestEntity) private testRepository: Repository<TestEntity>) { }

    async GetAllTestCase() {
        return await this.testRepository.find();


    }

    async CreateTestCase(data) {
        const idea = await this.testRepository.create(data);
        await this.testRepository.save(idea);
        return idea;

    }
}

