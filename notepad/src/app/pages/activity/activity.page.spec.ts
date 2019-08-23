import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPage } from './activity.page';
//import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActivityPage', () => {
	let component: ActivityPage;
	let fixture: ComponentFixture<ActivityPage>;
	//let httpClient: HttpClient;

	beforeEach(async (() => {
		TestBed.configureTestingModule({
			declarations: [ActivityPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			imports: [HttpClientTestingModule]
		}).compileComponents();

		//httpClient = TestBed.get(HttpClient);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ActivityPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
