import { Component } from '@angular/core';
import { MovieService } from '../shared/services/movie.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  movieName: string = "test name";

  constructor(private movieService: MovieService) {
    this.movieService.getMovieName().subscribe(name => {
      console.log(name); // prints the current movie name
      // this.movieName = name
    });
  }
}
