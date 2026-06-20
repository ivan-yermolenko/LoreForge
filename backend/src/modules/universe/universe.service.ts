import { Injectable } from '@nestjs/common';
import { WorldsService } from './worlds/worlds.service';
import { CharactersService } from './characters/characters.service';
import { TagsService } from './tags/tags.service';

export interface NarrativeContextValidationResult {
  isValid: boolean;
  reason?:
    | 'WORLD_NOT_FOUND'
    | 'CHARACTERS_NOT_FOUND'
    | 'CHARACTER_WORLD_MISMATCH';
  details?: string;
}

@Injectable()
export class UniverseService {
  constructor(
    private readonly worldsService: WorldsService,
    private readonly charactersService: CharactersService,
    private readonly tagsService: TagsService,
  ) {}
}
