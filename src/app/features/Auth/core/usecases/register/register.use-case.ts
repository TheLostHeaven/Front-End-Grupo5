import { UseCase } from "src/app/core/base";
import { AuthRepository } from "@auth/core/repositories/auth.repository";

export class RegisterUseCase implements UseCase<void, void>{
  constructor (private registerRepository: AuthRepository){}
  public execute(): Promise<void>{
    return this.registerRepository.auth()
  }
}
