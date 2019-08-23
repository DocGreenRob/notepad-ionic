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
	activityFeed: any = [];

	constructor(
		private activityService: ActivityService) {
	}

	ngOnInit() {
		// get feed
		this.GetFeed();
	}

	async GetFeed() {
		await this.activityService.getFeed('DocGreenRob', 0, 100)
			.then((x: any) => {
				this.activityFeed = x;
			})
			.catch(x => { console.log(x); });
	}

}
