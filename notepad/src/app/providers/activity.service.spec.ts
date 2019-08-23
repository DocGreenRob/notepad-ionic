import { HttpClient } from '@angular/common/http';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Data } from '@angular/router';
import { TestDataFactory } from '../test-data-factory/test-data-factory';
import { ActivityFeed, ActivityService } from './activity.service';




describe('ActivityService', () => {
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;
	let service: ActivityService;

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

	// /api/userName/0/1
	it('should get the first record', () => {
		let spy = spyOn(service, 'getFeed').and.returnValue(Promise.resolve(new TestDataFactory().GetActivityFeed(1)));
		service.getFeed('test-user', 0, 1);
		spy.calls.mostRecent().returnValue.then((x: ActivityFeed[]) => {
			expect(x.length).toBe(1);
			expect(x[0].Id).toBe(1);
		});
	});

	// /api/userName/0/10
	it('should get the first 10 records', () => {
		let spy = spyOn(service, 'getFeed').and.returnValue(Promise.resolve(new TestDataFactory().GetActivityFeed()));
		service.getFeed('test-user', 0, 10);
		spy.calls.mostRecent().returnValue.then((x) => {
			expect(x.length).toBe(10);
			expect(x[0].Id).toBe(1);
			expect(x[9].Id).toBe(10);
		});
	});

	// /api/userName/2/2
	it('should get records 2 and 3', () => {
		let spy = spyOn(service, 'getFeed').and.returnValue(Promise.resolve(new TestDataFactory().GetActivityFeed(2, 2)));
		service.getFeed('test-user', 2, 2);
		spy.calls.mostRecent().returnValue.then((x) => {
			expect(x.length).toBe(2);
			expect(x[0].Id).toBe(2);
			expect(x[1].Id).toBe(3);
		});
	});

	// /api/userName/0/1
	it('should return empty Array if user doesn\'t have any records', () => {
		let spy = spyOn(service, 'getFeed').and.returnValue(Promise.resolve(new TestDataFactory().GetActivityFeed(0)));
		service.getFeed('test-user-without-records', 0, 10);
		spy.calls.mostRecent().returnValue.then((x) => {
			expect(x.length).toBe(0);
		});
	});

	// /api/userName/0/501
	it('should throw a RangeError if the count > 500', () => {
		let promise = service.getFeed('test-user-without-records', 0, 501);
		promise.catch((x) => {
			let expectedError = new RangeError('The max count is 500');
			expect(x).toEqual(expectedError);
		});
	});

	// /api/userName/0/0
	it('should throw a RangeError if the count = 0', () => {
		//const service: ActivityService = TestBed.get(ActivityService);
		expect(service).toBeTruthy();
	});

	it('should get activities for a specific user if the user exists', () => {


		let testUrl: string = 'http://api.cognitivegenerationenterprises.com/api/activity/getFeed/DocGreenRob/0/100';

		httpClient.get<Data>(testUrl).subscribe(x =>
			expect(x).toEqual(new TestDataFactory().GetActivityFeed(1))
		);

		//service.http.get<Data>(testUrl).subscribe(x =>
		//	expect(x).toEqual(testData)
		//);
		//service.getFeed().then(x => { });

		const req = httpTestingController.expectOne(x => x.url.startsWith('http://api.cognitivegenerationenterprises.com/api/activity/getFeed/'));
		expect(req.request.method).toEqual('GET');
		req.flush(new TestDataFactory().GetActivityFeed(1));
		httpTestingController.verify();
	});

	it('should throw an exception if the user is not specified', () => {
		let invalidUserNames: any = [
			undefined,
			null,
			''
		];

		//const service: ActivityService = TestBed.get(ActivityService);
		expect(service).toBeTruthy();
	});

	it('should throw a 404 exception if the user doesn\'t exist', () => {
		//const service: ActivityService = TestBed.get(ActivityService);
		expect(service).toBeTruthy();
	});

	afterEach(() => {
		httpTestingController.verify();
	});

});
