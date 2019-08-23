/// <reference path="../../environments/environment.ts" />
import { Injectable } from '@angular/core';

/************ Manual Imports ************/
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
	async getFeed(userName:string,
		seed: number = 0,
		count: number = 100) {
		if (userName === '' ||
			userName === undefined ||
			userName === null) {
			throw new DOMException(`Username ${userName} does not exsit!`, 'InvalidUserName');
		}
		return this.http.get<ActivityFeed[]>(`${environment.apiEndpoint}activity/getFeed/${userName}/${seed}/${count}`).toPromise();
	}
}
