import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPage } from './activity.page';
//import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivityService } from '../../providers/activity/activity.service';
import { TestDataFactory } from '../../test-data-factory/test-data-factory';

describe('ActivityPage', () => {
	let activityPage: ActivityPage;
	let fixture: ComponentFixture<ActivityPage>;
	let activityService: ActivityService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ActivityPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			imports: [HttpClientTestingModule],
			providers: [ActivityService]
		}).compileComponents();

		activityService = TestBed.get(ActivityService);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ActivityPage);
		activityPage = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(activityPage).toBeTruthy();
	});

	// +____________________________+
	// |----------------------------|
	// |       Positive Tests       |
	// |----------------------------|
	// |____________________________|

	it('should get the activity feed', () => {
		// Arrange
		let count: number = 10;
		let spy = spyOn(activityService, 'getFeed').and.returnValue(Promise.resolve(new TestDataFactory().GetActivityFeed(count)));
		let userName: string = 'userName';

		// Act
		activityPage.userName = userName;
		activityPage.count = count;
		activityPage.GetFeed().then(() => {

			// Assert
			expect(spy).toHaveBeenCalledTimes(1);

			expect(activityPage.activityFeed.length).toBe(count);
			expect(activityPage.activityFeed[0].Id).toBe(1);
			expect(activityPage.activityFeed[0].Type).toBe('Exercise: Chest - Decline Push-Ups');
			expect(activityPage.activityFeed[0].StartTimeString).toBe('8/18/2019 8:15:29 PM');
		});
	});
});
