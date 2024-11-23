import {inject, Injectable} from '@angular/core';
import {ApiService} from "@core/http/api.service";
import {BehaviorSubject} from "rxjs";
import {Server} from "@features/feature-servers-catalog/models/server.model";

@Injectable({
  providedIn: 'root'
})
export class MyServersService {

  private readonly apiService = inject(ApiService);

  private readonly _myServersSubject$ = new BehaviorSubject<Server[]>([]);
  public readonly myServers$ = this._myServersSubject$.asObservable();


  public loadServers() {
    return this.apiService.get<Server[]>('/servers/my').subscribe(
      (servers) => this._myServersSubject$.next(servers)
    );
  }
}
