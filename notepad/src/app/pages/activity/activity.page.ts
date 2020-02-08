import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/providers/activity/activity.service';
/******* Manual Additions ********/

@Component({
	selector: 'app-activity',
	templateUrl: './activity.page.html',
	styleUrls: ['./activity.page.scss'],
})

export class ActivityPage implements OnInit {

	// class properties / fields
	public activityFeed: any = [];
	public count: number = 10;
	public seed: number = 0;
	public userName: string = 'DocGreenRob';

	constructor(
		private activityService: ActivityService) {
	}

	ngOnInit() {
		this.GetFeed();
	}

	public async GetFeed() {
		await this.activityService.getFeed(this.userName, this.seed, this.count)
			.subscribe(
				(x: any) => {
					this.activityFeed = x;
				},
				(err) => { }
			);
	}

}
