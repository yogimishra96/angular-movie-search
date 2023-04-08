import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/';
  private apiKey = '62bd252e';
  public movieNameSubject = new BehaviorSubject<string[]>([]);
  // private movieData
  let dataA

  constructor(private http: HttpClient) { }

  getMovieDetails(movieName: string): Observable<any> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&t=${movieName}`;
    return this.http.get(url);
  }

  setMovieName(name: string) {
    let data = [...movieNameSubject, name];
    this.movieNameSubject.next(data);
  }

  getMovieName() {
    return this.movieNameSubject.asObservable();
  }
}
