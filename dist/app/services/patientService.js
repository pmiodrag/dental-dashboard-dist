//import { Injectable, EventEmitter } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
////Grab everything with import 'rxjs/Rx';
//import {Observable} from 'rxjs/Observable';
//import {Observer} from 'rxjs/Observer';
//import 'rxjs/add/operator/map'; 
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/share';
//
//export interface IPatient {
//    id: number; 
//    firstname: string;
//    lastname: string;
//    middlename: string,
//    gender: string,
//    address: string;
//    place: string;    
//    birthdate: Date;
//    email : string;
//    phone: string;
//    mobilephone: string;
//}
//
//export class Patient implements IPatient {
////    static create(data){
////        return new Patient(data);
////    }
////    
//    constructor (public id: number, public firstname: string, public lastname: string, public middlename: string,
//                public gender: string, public address: string, public place: string,  public birthdate: Date, public email : string,
//                public phone: string,  public mobilephone: string) {
//    }
//}
//
//@Injectable()
//export class PatientService {
//    baseUrl: string = '/';
//    formAction$: EventEmitter<string>  = new EventEmitter();
//    patients$: Observable<Patient[]>;
//    private _patientsObserver: Observer<Patient[]>;
//    private _dataStore: {
//        patients: Patient[]
//    };
//    constructor(private _http: Http) { 
//        this._dataStore = { patients: [] };
//        // Create Observable Stream to output our data
//        this.patients$ = new Observable(observer =>  this._patientsObserver = observer).share();
//        console.log("constructor this._patientsObserver", this._patientsObserver);
//    }
//   
//    getFormActionEmitter() {
//        return this.formAction$;
//    }
//    action(agreed: string): void {
//        console.log("action in service", agreed);
//        this.formAction$.emit(agreed);
//        this.formAction$.next(agreed);
//    }
//    
//    
//    loadAll() {
//        this._http.get(`${this.baseUrl}patient`).map(response => response.json()).subscribe(data => {
//            this._dataStore.patients = data;
//            console.log("loadTodos this._patientsObserver", this._patientsObserver);
//            this._patientsObserver.next(this._dataStore.patients);
//        }, error => console.log('Could not load todos.'));
//    }
//    getPacient(id: number) {
//        return this._http.get(this.baseUrl + 'patient/' + id)
//                        .map((res: Response) => res.json())
//                        .catch(this.handleError);
//    }
//    getPatients() { 
//        return this._http.get(this.baseUrl + 'patient')
//                       .map((res: Response) => res.json())
//                        .catch(this.handleError);
//    }
//    getPatientTreatments(patientid:number, firstname: string, lastname: string){        
//        return this._http.get(this.baseUrl + 'patient/'+ patientid + '/'+ firstname + '/'+ lastname +  '/treatments')
//                    .map((res: Response) => res.json())
//                    .catch(this.handleError);    
//    }
//    getPatientTreatmentList(patientId:number){        
//        return this._http.get(this.baseUrl + 'patient/'+ patientId + '/treatments')
//                    .map((res: Response) => res.json())
//                    .catch(this.handleError);    
//    }
//   
//    addPatient (patient: IPatient) : Observable<IPatient>  {
//  
//        let body = JSON.stringify( patient )
//        let headers = new Headers({ 'Content-Type': 'application/json' });
//        let options = new RequestOptions({ headers: headers });
//
//        return this._http.post(this.baseUrl + 'patient', body, options)
//         .map(response => <IPatient> response.json()).subscribe(data => {
//            this._dataStore.patients.push(data);   
//            this._patientsObserver.next(this._dataStore.patients);
//        }, error => console.log('Could not create patient.'));
//           // .map((res: Response) => res.json())
////                        .catch(this.handleError)
//    }
//    
//    updatePatient (patient: IPatient) : Observable<IPatient>  {
//
//        let body = JSON.stringify( patient )
//        let headers = new Headers({ 'Content-Type': 'application/json' });
//        let options = new RequestOptions({ headers: headers });
//
//        return this._http.put((this.baseUrl + 'patient/' + patient.id), body, options)
//                         .catch(this.handleError)
//    }   
//   
//    
//    deletePatient(id:number){
//        return this._http.delete(this.baseUrl + 'patient/' + id)
//                       // .map((res: Response) => res.json())
//                        .catch(this.handleError);
//    }
//    handleError(error: any) {
//        console.error(error);
//        return Observable.throw(error.json().error || 'Server error');
//    }
//
//}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3BhdGllbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRDtBQUMzRCwwRUFBMEU7QUFDMUUsMENBQTBDO0FBQzFDLDZDQUE2QztBQUM3Qyx5Q0FBeUM7QUFDekMsa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsRUFBRTtBQUNGLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLHVCQUF1QjtBQUN2Qix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQixvQkFBb0I7QUFDcEIsMEJBQTBCO0FBQzFCLEdBQUc7QUFDSCxFQUFFO0FBQ0YsNENBQTRDO0FBQzVDLDRCQUE0QjtBQUM1QixxQ0FBcUM7QUFDckMsU0FBUztBQUNULFFBQVE7QUFDUixtSEFBbUg7QUFDbkgsc0lBQXNJO0FBQ3RJLHNFQUFzRTtBQUN0RSxPQUFPO0FBQ1AsR0FBRztBQUNILEVBQUU7QUFDRixlQUFlO0FBQ2YsK0JBQStCO0FBQy9CLDRCQUE0QjtBQUM1Qiw4REFBOEQ7QUFDOUQsdUNBQXVDO0FBQ3ZDLHFEQUFxRDtBQUNyRCwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUix5Q0FBeUM7QUFDekMsNkNBQTZDO0FBQzdDLHdEQUF3RDtBQUN4RCxrR0FBa0c7QUFDbEcsb0ZBQW9GO0FBQ3BGLE9BQU87QUFDUCxLQUFLO0FBQ0wsOEJBQThCO0FBQzlCLGtDQUFrQztBQUNsQyxPQUFPO0FBQ1Asb0NBQW9DO0FBQ3BDLG1EQUFtRDtBQUNuRCx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLE9BQU87QUFDUCxNQUFNO0FBQ04sTUFBTTtBQUNOLGlCQUFpQjtBQUNqQix1R0FBdUc7QUFDdkcsOENBQThDO0FBQzlDLHNGQUFzRjtBQUN0RixvRUFBb0U7QUFDcEUsNERBQTREO0FBQzVELE9BQU87QUFDUCw4QkFBOEI7QUFDOUIsK0RBQStEO0FBQy9ELDZEQUE2RDtBQUM3RCxtREFBbUQ7QUFDbkQsT0FBTztBQUNQLHNCQUFzQjtBQUN0Qix5REFBeUQ7QUFDekQsNERBQTREO0FBQzVELG1EQUFtRDtBQUNuRCxPQUFPO0FBQ1AsMEZBQTBGO0FBQzFGLHVIQUF1SDtBQUN2SCx5REFBeUQ7QUFDekQsbURBQW1EO0FBQ25ELE9BQU87QUFDUCx3REFBd0Q7QUFDeEQscUZBQXFGO0FBQ3JGLHlEQUF5RDtBQUN6RCxtREFBbUQ7QUFDbkQsT0FBTztBQUNQLEtBQUs7QUFDTCw4REFBOEQ7QUFDOUQsSUFBSTtBQUNKLDhDQUE4QztBQUM5Qyw0RUFBNEU7QUFDNUUsaUVBQWlFO0FBQ2pFLEVBQUU7QUFDRix5RUFBeUU7QUFDekUsMkVBQTJFO0FBQzNFLHFEQUFxRDtBQUNyRCxvRUFBb0U7QUFDcEUsZ0VBQWdFO0FBQ2hFLG1EQUFtRDtBQUNuRCxvREFBb0Q7QUFDcEQsT0FBTztBQUNQLE1BQU07QUFDTixpRUFBaUU7QUFDakUsRUFBRTtBQUNGLDhDQUE4QztBQUM5Qyw0RUFBNEU7QUFDNUUsaUVBQWlFO0FBQ2pFLEVBQUU7QUFDRix3RkFBd0Y7QUFDeEYsbURBQW1EO0FBQ25ELFVBQVU7QUFDVixLQUFLO0FBQ0wsTUFBTTtBQUNOLCtCQUErQjtBQUMvQixrRUFBa0U7QUFDbEUsK0RBQStEO0FBQy9ELG1EQUFtRDtBQUNuRCxPQUFPO0FBQ1AsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQix3RUFBd0U7QUFDeEUsT0FBTztBQUNQLEVBQUU7QUFDRixHQUFHIiwiZmlsZSI6InNlcnZpY2VzL3BhdGllbnRTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuLy8vL0dyYWIgZXZlcnl0aGluZyB3aXRoIGltcG9ydCAncnhqcy9SeCc7XHJcbi8vaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG4vL2ltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJ3J4anMvT2JzZXJ2ZXInO1xyXG4vL2ltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJzsgXHJcbi8vaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbi8vaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XHJcbi8vXHJcbi8vZXhwb3J0IGludGVyZmFjZSBJUGF0aWVudCB7XHJcbi8vICAgIGlkOiBudW1iZXI7IFxyXG4vLyAgICBmaXJzdG5hbWU6IHN0cmluZztcclxuLy8gICAgbGFzdG5hbWU6IHN0cmluZztcclxuLy8gICAgbWlkZGxlbmFtZTogc3RyaW5nLFxyXG4vLyAgICBnZW5kZXI6IHN0cmluZyxcclxuLy8gICAgYWRkcmVzczogc3RyaW5nO1xyXG4vLyAgICBwbGFjZTogc3RyaW5nOyAgICBcclxuLy8gICAgYmlydGhkYXRlOiBEYXRlO1xyXG4vLyAgICBlbWFpbCA6IHN0cmluZztcclxuLy8gICAgcGhvbmU6IHN0cmluZztcclxuLy8gICAgbW9iaWxlcGhvbmU6IHN0cmluZztcclxuLy99XHJcbi8vXHJcbi8vZXhwb3J0IGNsYXNzIFBhdGllbnQgaW1wbGVtZW50cyBJUGF0aWVudCB7XHJcbi8vLy8gICAgc3RhdGljIGNyZWF0ZShkYXRhKXtcclxuLy8vLyAgICAgICAgcmV0dXJuIG5ldyBQYXRpZW50KGRhdGEpO1xyXG4vLy8vICAgIH1cclxuLy8vLyAgICBcclxuLy8gICAgY29uc3RydWN0b3IgKHB1YmxpYyBpZDogbnVtYmVyLCBwdWJsaWMgZmlyc3RuYW1lOiBzdHJpbmcsIHB1YmxpYyBsYXN0bmFtZTogc3RyaW5nLCBwdWJsaWMgbWlkZGxlbmFtZTogc3RyaW5nLFxyXG4vLyAgICAgICAgICAgICAgICBwdWJsaWMgZ2VuZGVyOiBzdHJpbmcsIHB1YmxpYyBhZGRyZXNzOiBzdHJpbmcsIHB1YmxpYyBwbGFjZTogc3RyaW5nLCAgcHVibGljIGJpcnRoZGF0ZTogRGF0ZSwgcHVibGljIGVtYWlsIDogc3RyaW5nLFxyXG4vLyAgICAgICAgICAgICAgICBwdWJsaWMgcGhvbmU6IHN0cmluZywgIHB1YmxpYyBtb2JpbGVwaG9uZTogc3RyaW5nKSB7XHJcbi8vICAgIH1cclxuLy99XHJcbi8vXHJcbi8vQEluamVjdGFibGUoKVxyXG4vL2V4cG9ydCBjbGFzcyBQYXRpZW50U2VydmljZSB7XHJcbi8vICAgIGJhc2VVcmw6IHN0cmluZyA9ICcvJztcclxuLy8gICAgZm9ybUFjdGlvbiQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ICA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuLy8gICAgcGF0aWVudHMkOiBPYnNlcnZhYmxlPFBhdGllbnRbXT47XHJcbi8vICAgIHByaXZhdGUgX3BhdGllbnRzT2JzZXJ2ZXI6IE9ic2VydmVyPFBhdGllbnRbXT47XHJcbi8vICAgIHByaXZhdGUgX2RhdGFTdG9yZToge1xyXG4vLyAgICAgICAgcGF0aWVudHM6IFBhdGllbnRbXVxyXG4vLyAgICB9O1xyXG4vLyAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IFxyXG4vLyAgICAgICAgdGhpcy5fZGF0YVN0b3JlID0geyBwYXRpZW50czogW10gfTtcclxuLy8gICAgICAgIC8vIENyZWF0ZSBPYnNlcnZhYmxlIFN0cmVhbSB0byBvdXRwdXQgb3VyIGRhdGFcclxuLy8gICAgICAgIHRoaXMucGF0aWVudHMkID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4gIHRoaXMuX3BhdGllbnRzT2JzZXJ2ZXIgPSBvYnNlcnZlcikuc2hhcmUoKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKFwiY29uc3RydWN0b3IgdGhpcy5fcGF0aWVudHNPYnNlcnZlclwiLCB0aGlzLl9wYXRpZW50c09ic2VydmVyKTtcclxuLy8gICAgfVxyXG4vLyAgIFxyXG4vLyAgICBnZXRGb3JtQWN0aW9uRW1pdHRlcigpIHtcclxuLy8gICAgICAgIHJldHVybiB0aGlzLmZvcm1BY3Rpb24kO1xyXG4vLyAgICB9XHJcbi8vICAgIGFjdGlvbihhZ3JlZWQ6IHN0cmluZyk6IHZvaWQge1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24gaW4gc2VydmljZVwiLCBhZ3JlZWQpO1xyXG4vLyAgICAgICAgdGhpcy5mb3JtQWN0aW9uJC5lbWl0KGFncmVlZCk7XHJcbi8vICAgICAgICB0aGlzLmZvcm1BY3Rpb24kLm5leHQoYWdyZWVkKTtcclxuLy8gICAgfVxyXG4vLyAgICBcclxuLy8gICAgXHJcbi8vICAgIGxvYWRBbGwoKSB7XHJcbi8vICAgICAgICB0aGlzLl9odHRwLmdldChgJHt0aGlzLmJhc2VVcmx9cGF0aWVudGApLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuLy8gICAgICAgICAgICB0aGlzLl9kYXRhU3RvcmUucGF0aWVudHMgPSBkYXRhO1xyXG4vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZFRvZG9zIHRoaXMuX3BhdGllbnRzT2JzZXJ2ZXJcIiwgdGhpcy5fcGF0aWVudHNPYnNlcnZlcik7XHJcbi8vICAgICAgICAgICAgdGhpcy5fcGF0aWVudHNPYnNlcnZlci5uZXh0KHRoaXMuX2RhdGFTdG9yZS5wYXRpZW50cyk7XHJcbi8vICAgICAgICB9LCBlcnJvciA9PiBjb25zb2xlLmxvZygnQ291bGQgbm90IGxvYWQgdG9kb3MuJykpO1xyXG4vLyAgICB9XHJcbi8vICAgIGdldFBhY2llbnQoaWQ6IG51bWJlcikge1xyXG4vLyAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuYmFzZVVybCArICdwYXRpZW50LycgKyBpZClcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuLy8gICAgfVxyXG4vLyAgICBnZXRQYXRpZW50cygpIHsgXHJcbi8vICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ3BhdGllbnQnKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbi8vICAgIH1cclxuLy8gICAgZ2V0UGF0aWVudFRyZWF0bWVudHMocGF0aWVudGlkOm51bWJlciwgZmlyc3RuYW1lOiBzdHJpbmcsIGxhc3RuYW1lOiBzdHJpbmcpeyAgICAgICAgXHJcbi8vICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ3BhdGllbnQvJysgcGF0aWVudGlkICsgJy8nKyBmaXJzdG5hbWUgKyAnLycrIGxhc3RuYW1lICsgICcvdHJlYXRtZW50cycpXHJcbi8vICAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpOyAgICBcclxuLy8gICAgfVxyXG4vLyAgICBnZXRQYXRpZW50VHJlYXRtZW50TGlzdChwYXRpZW50SWQ6bnVtYmVyKXsgICAgICAgIFxyXG4vLyAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuYmFzZVVybCArICdwYXRpZW50LycrIHBhdGllbnRJZCArICcvdHJlYXRtZW50cycpXHJcbi8vICAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpOyAgICBcclxuLy8gICAgfVxyXG4vLyAgIFxyXG4vLyAgICBhZGRQYXRpZW50IChwYXRpZW50OiBJUGF0aWVudCkgOiBPYnNlcnZhYmxlPElQYXRpZW50PiAge1xyXG4vLyAgXHJcbi8vICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KCBwYXRpZW50IClcclxuLy8gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4vLyAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4vL1xyXG4vLyAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAncGF0aWVudCcsIGJvZHksIG9wdGlvbnMpXHJcbi8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiA8SVBhdGllbnQ+IHJlc3BvbnNlLmpzb24oKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4vLyAgICAgICAgICAgIHRoaXMuX2RhdGFTdG9yZS5wYXRpZW50cy5wdXNoKGRhdGEpOyAgIFxyXG4vLyAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzT2JzZXJ2ZXIubmV4dCh0aGlzLl9kYXRhU3RvcmUucGF0aWVudHMpO1xyXG4vLyAgICAgICAgfSwgZXJyb3IgPT4gY29uc29sZS5sb2coJ0NvdWxkIG5vdCBjcmVhdGUgcGF0aWVudC4nKSk7XHJcbi8vICAgICAgICAgICAvLyAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4vLy8vICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbi8vICAgIH1cclxuLy8gICAgXHJcbi8vICAgIHVwZGF0ZVBhdGllbnQgKHBhdGllbnQ6IElQYXRpZW50KSA6IE9ic2VydmFibGU8SVBhdGllbnQ+ICB7XHJcbi8vXHJcbi8vICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KCBwYXRpZW50IClcclxuLy8gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4vLyAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4vL1xyXG4vLyAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KCh0aGlzLmJhc2VVcmwgKyAncGF0aWVudC8nICsgcGF0aWVudC5pZCksIGJvZHksIG9wdGlvbnMpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxyXG4vLyAgICB9ICAgXHJcbi8vICAgXHJcbi8vICAgIFxyXG4vLyAgICBkZWxldGVQYXRpZW50KGlkOm51bWJlcil7XHJcbi8vICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodGhpcy5iYXNlVXJsICsgJ3BhdGllbnQvJyArIGlkKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgLy8gLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbi8vICAgIH1cclxuLy8gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4vLyAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
