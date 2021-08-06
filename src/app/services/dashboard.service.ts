import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IDashboardInfo } from "../business/IDashboardInfo";

@Injectable()
export class DashboardService {

    constructor(private http: HttpClient){
    }

    getDashboards() : Observable<IDashboardInfo[]> {
        return this.http.get<IDashboardInfo[]>("https://samples.revealbi.io/upmedia-backend/reveal-api/dashboards");
    }
}