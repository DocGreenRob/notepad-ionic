// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Data } from '@angular/router';
import { TestDataFactory } from '../../test-data-factory/test-data-factory';
import { ActivityFeed, ActivityService } from './activity.service';
import { environment } from '../../../environments/environment';

// https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712
describe('ActivityService', () => {
	let httpTestingController: HttpTestingController;
	let activityService: ActivityService;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ActivityService]
		});

		activityService = TestBed.get(ActivityService);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	it('should be created', () => {
		expect(activityService).toBeTruthy();
	});

	// +____________________________+
	// |----------------------------|
	// |       Positive Tests       |
	// |----------------------------|
	// |____________________________|

	// /api/activity/getFeed{userName}/0/10
	it('should get the feed', () => {
		// Arrange
		let userName: string = 'DocGreenRob';
		let seed: number = 0;
		let count: number = 10;
		let baseUri: string = environment.apiEndpoint;
		let api: string = `activity/getFeed/${userName}/${seed}/${count}`;
		let endpoint: string = `${baseUri}${api}`;

		// Act
		activityService.getFeed(userName, seed, count).then((x) => {
			expect(x.length).toBe(count);
			expect(x[0].Id).toBe(1);
			expect(x[0].Type).toBe('Exercise: Chest - Decline Push-Ups');
			expect(x[0].StartTimeString).toBe('8/18/2019 8:15:29 PM');
			expect(x[9].Id).toBe(10);
			expect(x[9].Type).toBe('Exercise: Chest - Decline Push-Ups');
			expect(x[9].StartTimeString).toBe('8/18/2019 8:10:29 PM');
		});

		// Assert
		let req: TestRequest = httpTestingController.expectOne(endpoint);
		expect(req.request.method).toEqual('GET');
		req.flush(new TestDataFactory().GetActivityFeed(count, seed));
	});

	// +_________________________________+
	// |---------------------------------|
	// |          Negative Tests         |
	// |---------------------------------|
	// |_________________________________|

	// /api/{userName}/0/501
	it('should throw a RangeError if the count > 500', () => {
		// Arrange
		let seed: number = 0;
		let count: number = 501;
		let errorMessage: string = 'The max count is 500';
		let userName: string = 'test-user-with-records';

		// Act
		let promise = activityService.getFeed(userName, seed, count);

		// Assert
		promise.catch((x) => {
			let expectedError: RangeError = new RangeError(errorMessage);
			expect(x).toEqual(expectedError);
		});
	});

	// /api/{userName}/0/0
	it('should throw a RangeError if the count = 0', () => {
		// Arrange
		let seed: number = 0;
		let count: number = 0;
		let errorMessage: string = 'The count must be greater than 0.';
		let userName: string = 'test-user-with-records';

		// Act
		let promise = activityService.getFeed(userName, seed, count);

		// Assert
		promise.catch((x) => {
			let expectedError: RangeError = new RangeError(errorMessage);
			expect(x).toEqual(expectedError);
		});
	});

	it('should throw an Error if the user is not specified', () => {
		// Arrange
		let seed: number = 0;
		let count: number = 0;
		let errorMessage: string = 'Username is not specified.';
		let invalidUserNames: Array<any> = [
			undefined,
			null,
			''
		];

		invalidUserNames.forEach((x) => {
			// Act
			let promise = activityService.getFeed(x, seed, count);

			// Assert

			promise.catch((x) => {
				let expectedError: Error = new Error(errorMessage);
				expect(x).toEqual(expectedError);
			});
		});
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	// ... aux ...
	/*******************************************************************/

	// /api/userName/0/1
	// maybe TestDataFactory test...
	// may not need to test the TestDataFactory - in large part - because the responsiblity of returning the correct data per request is of the Api...
	it('should get the first record', () => {
		// Arrange
		let spy = spyOn(activityService, 'getFeed').and.returnValue(Promise.resolve(new TestDataFactory().GetActivityFeed(1)));

		// Act (trigger)
		activityService.getFeed('test-user', 0, 1);

		// Assert
		spy.calls.mostRecent().returnValue.then((x: ActivityFeed[]) => {
			expect(x.length).toBe(1);
			expect(x[0].Id).toBe(1);
			expect(x[0].Type).toBe('Exercise: Chest - Decline Push-Ups');
		});
	});

	// /api/{userName}/2/2
	// maybe TestDataFactory test...
	// may not need to test the TestDataFactory - in large part - because the responsiblity of returning the correct data per request is of the Api...
	it('should get records 2 and 3', () => {
		// Arrange
		let seed: number = 2;
		let count: number = 2;
		let spy = spyOn(activityService, 'getFeed').and.returnValue(Promise.resolve(new TestDataFactory().GetActivityFeed(count, seed)));

		// Act
		activityService.getFeed('test-user', seed, count);

		// Assert
		spy.calls.mostRecent().returnValue.then((x) => {
			expect(x.length).toBe(count);
			expect(x[0].Id).toBe(2);
			expect(x[0].Type).toBe('Exercise: Chest - Decline Push-Ups');
			expect(x[0].StartTimeString).toBe('8/18/2019 8:14:29 PM');
			expect(x[1].Id).toBe(3);
			expect(x[1].Type).toBe('Exercise: Chest - Decline Push-Ups');
			expect(x[1].StartTimeString).toBe('8/18/2019 8:14:09 PM');
		});
	});

	// /api/{userName}/0/1
	// maybe TestDataFactory test...
	// may not need to test the TestDataFactory - in large part - because the responsiblity of returning the correct data per request is of the Api...
	it('should return empty Array if user doesn\'t have any records', () => {
		// Arrange
		let count: number = 0;
		let spy = spyOn(activityService, 'getFeed').and.returnValue(Promise.resolve(new TestDataFactory().GetActivityFeed(count)));

		// Act
		activityService.getFeed('test-user-without-records', 0, count);

		// Assert
		spy.calls.mostRecent().returnValue.then((x) => {
			expect(x.length).toBe(0);
		});
	});

	// need to handle this at the Interceptor level
	//it('should throw a 404 exception if the user doesn\'t exist', () => {
	//	//const service: ActivityService = TestBed.get(ActivityService);
	//	expect(service).toBeTruthy();
	//});

	/*******************************************************************/
});
