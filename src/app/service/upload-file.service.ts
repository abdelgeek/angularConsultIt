import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) {}


  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);


    const req = new HttpRequest('POST', 'api/uploadFile', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);

  }

}
