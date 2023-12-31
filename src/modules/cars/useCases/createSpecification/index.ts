import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import CreateSpecificationController from './createSpecificationController';
import CreateSpecificationUseCase from './CreateSpecificationUseCase';

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);

export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);
