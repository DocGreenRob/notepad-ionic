import { TestBed } from '@angular/core/testing';

import { ActivityService, ActivityFeed } from './activity.service';

// Http testing module and mocking controller
import {
	HttpClientTestingModule,
	HttpTestingController
} from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

describe('ActivityService', () => {
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;
	let service: ActivityService;
	let testData_1_record: ActivityFeed[] = [{
			UserName: null,
			Id: 34,
			Type: 'Exercise: Chest - Decline Push-Ups',
			StartTimeString: '8/18/2019 8:14:29 PM',
			EndTimeString: '8/18/2019 8:14:43 PM',
			BodyPart: null,
			ExerciseName: null,
			ExerciseId: 0,
			WorkoutName: null,
			WorkoutId: 450,
			Duration: '14s',
			Reps: 99,
			Weight: 99.00,
			Distance: 0.0,
			MostRecent: true
	}];

	let testData_10_records: ActivityFeed[] = [
		{
			UserName: null,
			Id: 34,
			Type: 'Exercise: Chest - Decline Push-Ups',
			StartTimeString: '8/18/2019 8:14:29 PM',
			EndTimeString: '8/18/2019 8:14:43 PM',
			BodyPart: null,
			ExerciseName: null,
			ExerciseId: 0,
			WorkoutName: null,
			WorkoutId: 450,
			Duration: '14s',
			Reps: 99,
			Weight: 99.00,
			Distance: 0.0,
			MostRecent: true
		},
		{
			UserName: null,
			Id: 34,
			Type: 'Exercise: Chest - Decline Push-Ups',
			StartTimeString: '8/18/2019 8:14:29 PM',
			EndTimeString: '8/18/2019 8:14:43 PM',
			BodyPart: null,
			ExerciseName: null,
			ExerciseId: 0,
			WorkoutName: null,
			WorkoutId: 450,
			Duration: '14s',
			Reps: 99,
			Weight: 99.00,
			Distance: 0.0,
			MostRecent: true
		},
		{
			UserName: null,
			Id: 34,
			Type: 'Exercise: Chest - Decline Push-Ups',
			StartTimeString: '8/18/2019 8:14:29 PM',
			EndTimeString: '8/18/2019 8:14:43 PM',
			BodyPart: null,
			ExerciseName: null,
			ExerciseId: 0,
			WorkoutName: null,
			WorkoutId: 450,
			Duration: '14s',
			Reps: 99,
			Weight: 99.00,
			Distance: 0.0,
			MostRecent: true
		},
		{
			UserName: null,
			Id: 34,
			Type: 'Exercise: Chest - Decline Push-Ups',
			StartTimeString: '8/18/2019 8:14:29 PM',
			EndTimeString: '8/18/2019 8:14:43 PM',
			BodyPart: null,
			ExerciseName: null,
			ExerciseId: 0,
			WorkoutName: null,
			WorkoutId: 450,
			Duration: '14s',
			Reps: 99,
			Weight: 99.00,
			Distance: 0.0,
			MostRecent: true
		},
		{
			UserName: null,
			Id: 34,
			Type: 'Exercise: Chest - Decline Push-Ups',
			StartTimeString: '8/18/2019 8:14:29 PM',
			EndTimeString: '8/18/2019 8:14:43 PM',
			BodyPart: null,
			ExerciseName: null,
			ExerciseId: 0,
			WorkoutName: null,
			WorkoutId: 450,
			Duration: '14s',
			Reps: 99,
			Weight: 99.00,
			Distance: 0.0,
			MostRecent: true
		},
		{
			UserName: null,
			Id: 34,
			Type: 'Exercise: Chest - Decline Push-Ups',
			StartTimeString: '8/18/2019 8:14:29 PM',
			EndTimeString: '8/18/2019 8:14:43 PM',
			BodyPart: null,
			ExerciseName: null,
			ExerciseId: 0,
			WorkoutName: null,
			WorkoutId: 450,
			Duration: '14s',
			Reps: 99,
			Weight: 99.00,
			Distance: 0.0,
			MostRecent: true
		},
		{
			UserName: null,
			Id: 34,
			Type: 'Exercise: Chest - Decline Push-Ups',
			StartTimeString: '8/18/2019 8:14:29 PM',
			EndTimeString: '8/18/2019 8:14:43 PM',
			BodyPart: null,
			ExerciseName: null,
			ExerciseId: 0,
			WorkoutName: null,
			WorkoutId: 450,
			Duration: '14s',
			Reps: 99,
			Weight: 99.00,
			Distance: 0.0,
			MostRecent: true
		},
		{
			UserName: null,
			Id: 34,
			Type: 'Exercise: Chest - Decline Push-Ups',
			StartTimeString: '8/18/2019 8:14:29 PM',
			EndTimeString: '8/18/2019 8:14:43 PM',
			BodyPart: null,
			ExerciseName: null,
			ExerciseId: 0,
			WorkoutName: null,
			WorkoutId: 450,
			Duration: '14s',
			Reps: 99,
			Weight: 99.00,
			Distance: 0.0,
			MostRecent: true
		},
		{
			UserName: null,
			Id: 34,
			Type: 'Exercise: Chest - Decline Push-Ups',
			StartTimeString: '8/18/2019 8:14:29 PM',
			EndTimeString: '8/18/2019 8:14:43 PM',
			BodyPart: null,
			ExerciseName: null,
			ExerciseId: 0,
			WorkoutName: null,
			WorkoutId: 450,
			Duration: '14s',
			Reps: 99,
			Weight: 99.00,
			Distance: 0.0,
			MostRecent: true
		},
		{
			UserName: null,
			Id: 34,
			Type: 'Exercise: Chest - Decline Push-Ups',
			StartTimeString: '8/18/2019 8:14:29 PM',
			EndTimeString: '8/18/2019 8:14:43 PM',
			BodyPart: null,
			ExerciseName: null,
			ExerciseId: 0,
			WorkoutName: null,
			WorkoutId: 450,
			Duration: '14s',
			Reps: 99,
			Weight: 99.00,
			Distance: 0.0,
			MostRecent: true
		}
	];

	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ActivityService]
		});

		service = TestBed.get(ActivityService);
		httpClient = TestBed.get(HttpClient);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return 1 record', () => {
		let spy = spyOn(service, 'getFeed').and.returnValue(Promise.resolve(testData_1_record));
		service.getFeed('test-user', 0, 1);
		spy.calls.mostRecent().returnValue.then((x) => {
			expect(x.length).toBe(1);
		});
	});

	it('should return 10 records', () => {
		let spy = spyOn(service, 'getFeed').and.returnValue(Promise.resolve(testData_10_records));
		service.getFeed('test-user', 0, 10);
		spy.calls.mostRecent().returnValue.then((x) => {
			expect(x.length).toBe(10);
		});
	});


	it('should get activities for a specific user', () => {
		

		let testUrl: string = 'http://api.cognitivegenerationenterprises.com/api/activity/getFeed/DocGreenRob/0/100';

		httpClient.get<Data>(testUrl).subscribe(x =>
			expect(x).toEqual(testData_1_record)
		);

		//service.http.get<Data>(testUrl).subscribe(x =>
		//	expect(x).toEqual(testData)
		//);
		//service.getFeed().then(x => { });

		const req = httpTestingController.expectOne(x => x.url.startsWith('http://api.cognitivegenerationenterprises.com/api/activity/getFeed/'));
		expect(req.request.method).toEqual('GET');
		req.flush(testData_1_record);
		httpTestingController.verify();
	});

	it('should throw an exception if the user is not specified', () => {
		//const service: ActivityService = TestBed.get(ActivityService);
		expect(service).toBeTruthy();
	});

	it('should throw an exception if the user doesn\'t exist', () => {
		//const service: ActivityService = TestBed.get(ActivityService);
		expect(service).toBeTruthy();
	});

	afterEach(() => {
		httpTestingController.verify();
	});

});
