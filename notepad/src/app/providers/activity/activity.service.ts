import { Injectable } from '@angular/core';

/************ Manual Imports ************/
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import 'rxjs/add/operator/toPromise';

export interface ActivityFeed {
	UserName: string;
	Id: number;
	Type: string;
	StartTimeString: string;
	EndTimeString: string;
	BodyPart: string;
	ExerciseName: string;
	ExerciseId: number;
	WorkoutName: string;
	WorkoutId: number;
	Duration: string;
	Reps: number;
	Weight: number;
	Distance: number;
	MostRecent: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class ActivityService {
	constructor(public http: HttpClient) { }

	// activity/getFeed/{userName}/{seed}/{count}
	async getFeed(userName: string,
		seed: number = 0,
		count: number = 100) {

		/******* housekeeping *******/
		if (userName === undefined ||
			userName === null ||
			userName.trim() === '') {
			throw new Error(`Username is not specified.`);
		}

		if (count === 0) {
			throw new RangeError(`The count must be greater than 0.`);
		}

		let maxCount: number = 500;

		if (count > maxCount) {
			throw new RangeError(`The max count is ${maxCount}`);
		}

		/******* prepare *******/
		let url = `${environment.apiEndpoint}activity/getFeed/${userName}/${seed}/${count}`;

		/******* action *******/
		return this.http.get<ActivityFeed[]>(url).toPromise();
	}
}
