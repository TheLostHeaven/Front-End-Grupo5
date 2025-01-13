import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { HomeRepository } from '@home/core/repositories/home.repository';
import { HomeRequestEntity } from '@home/core/entities/home-information.entity';
import { HomeResponseEntity } from '@home/core/entities/home-response.entity';
import { homeUserMock } from '@shared/mocks/home-user.mock';

@Injectable ({
  providedIn: 'root'
})
export class HomeImplementationRepositoryFake extends HomeRepository {
  public homeUser(params: HomeRequestEntity): Observable<HomeResponseEntity>{
    return of(homeUserMock).pipe(delay(1500))
  }
}
