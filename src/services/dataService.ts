import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

@inject(HttpClient)
export class DataService {
  speakers;
  sessions;

  constructor(private http: HttpClient) {
    this.http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8080/api/')
        .withInterceptor({
          request(request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          },
          response(response) {
            console.log(`Received ${response.status} ${response.url}`);
            return response;
          },
          responseError(err) {
            console.log(`Response Err: ${err}`);
            // We can't see a status code for the error here?
            console.log(typeof err.status === 'undefined' ? 'status is not set!' : 'status is set');
            return Promise.reject(err);
          },
          requestError(err) {
            console.log(`Request Err: ${err}`);
            return Promise.reject(err);
          }
        });
    });
  }

  async getSpeakers() {
    if (!this.speakers) {
      try {
        let response = await this.http.fetch('speakers', { method: 'get' });
        let results = await response.json();

        this.speakers = results.sort((a,b) => { return a.lastName > b.lastName ? 0 : -1; });
      } catch (error) {
        console.error(error);
        return;
      }
    }
    return this.speakers;
  }

  async getSessions() {
    if (!this.sessions) {
      try {
        let response = await this.http.fetch('sessions', { method: 'get' });
        let results = await response.json();
        
        this.sessions = results.sort((a,b) => { return a.timeSlot == b.timeSlot ? 0 : +(a.timeSlot > b.timeSlot) || -1; });
      } catch (error) {
        console.error(error);
      }
    }
    return this.sessions;
  }
}