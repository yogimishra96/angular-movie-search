import { Component, ChangeDetectorRef  } from '@angular/core';
import { MovieService } from '../shared/services/movie.service';


@Component({
	selector: 'app-movie-component',
	templateUrl: './movie-component.component.html',
	styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent {
	movie: any;
	title : string = "";
	constructor(private movieService: MovieService, private cdr: ChangeDetectorRef) { }

	ngOnInit() {
		console.log(this.title);
		this.cdr.detectChanges();	
	}

	ngOnChanges() {
		console.log(this.title);
	}
	

	getMovie() {
		this.movieService.setMovieName(this.title); 
		this.movieService.getMovieDetails(this.title).subscribe(data => {
			this.movie = data;
			console.log(this.movie);
		});
	}

	
}
