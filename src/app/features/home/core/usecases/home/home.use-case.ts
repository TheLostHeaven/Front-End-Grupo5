import { UseCase } from "src/app/core/base";
import { HomeRepository } from "@home/core/repositories/home.repository";
import { HomeResponseEntity } from "@home/core/entities/home-response.entity";
import { HomeRequestEntity } from "@home/core/entities/home-information.entity";
import { Observable } from "rxjs";

export class HomeUseCase implements UseCase<HomeRequestEntity, HomeResponseEntity> {
  constructor (private homeRepository: HomeRepository){}

  public execute (params: HomeRequestEntity): Observable<HomeResponseEntity>{
    return this.homeRepository.homeUser(params)
  }
}

