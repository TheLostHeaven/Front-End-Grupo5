import { Observable } from "rxjs";
import { HomeRequestEntity } from "../entities/home-information.entity";
import { HomeResponseEntity } from "../entities/home-response.entity";

export abstract class HomeRepository {
  public abstract homeUser(params: HomeRequestEntity): Observable<HomeResponseEntity>
}

