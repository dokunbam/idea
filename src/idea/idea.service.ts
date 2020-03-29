import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { IdeaEntity } from './idea.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaDTO } from './idea.dtos';

@Injectable()
export class IdeaService {
    constructor(@InjectRepository(IdeaEntity) private ideaRepository: Repository<IdeaEntity>) { }
    async GetAllIdeas() {
        return await this.ideaRepository.find();
    }

    async CreateIdea(data: IdeaDTO) {
        const idea = await this.ideaRepository.create(data);
        await this.ideaRepository.save(idea);
        return idea;

    }

    async GetIdea(id: string) {
        return await this.ideaRepository.findOne({ where: { id } });
    }

    async UpdateIdea(id: string, data: Partial<IdeaDTO>) {
        await this.ideaRepository.update({ id }, data);
        return await this.ideaRepository.findOne({ id });
    }

    async RemoveIdea(id: string) {
        await this.ideaRepository.delete({ id });
        return { deleted: true };
    }

}
