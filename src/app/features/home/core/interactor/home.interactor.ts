import { Injectable } from "@angular/core";
import { HomeUseCase } from "../usecases";
import { HomeRepository } from '../repositories/home.repository';
import { HomeRequestEntity } from "../entities/home-information.entity";
import { HomeResponseEntity } from "../entities/home-response.entity";
import { Observable } from "rxjs";

@Injectable()
export class HomeInteractor {
  private homeUseCase: HomeUseCase;

  constructor(readonly homeRepository: HomeRepository){
    this.homeUseCase = new HomeUseCase(homeRepository)
  }

  public homeUser (params: HomeRequestEntity): Observable<HomeResponseEntity>{
    return this.homeUseCase.execute(params)
  }
}


