import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom, Observable } from "rxjs";
import { environment } from "@environments/environment";
import { ApiService } from "@shared/services/api/api.service";
import { HomeRepository } from "@home/core/repositories/home.repository";
import { HomeRequestEntity } from "@home/core/entities/home-information.entity";
import { HomeResponseEntity } from "@home/core/entities/home-response.entity";

@Injectable({
  providedIn: 'root'
})

export class HomeImplementationRepository extends HomeRepository {

  public apiUrl : string;

  constructor (private readonly apiService : ApiService){
    super();
    this.apiUrl = environment?.API_SERVICES.API_URL;
  }

  public homeUser(params: HomeRequestEntity): Observable<HomeResponseEntity> {
      return this.apiService.get(`${this.apiUrl}/home`)
  }
}
