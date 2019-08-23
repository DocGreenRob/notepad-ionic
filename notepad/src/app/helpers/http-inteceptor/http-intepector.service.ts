import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivityService } from 'src/app/providers/activity.service';

@Injectable({
	providedIn: 'root'
})
export class HttpIntepectorService implements HttpInterceptor {

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
		switch (req.url) {
			case 'www.google.com':
				let response = new HttpResponse();
				response.ok = true;
				response.body = {};
				return response;
				break;
		}
	}

	constructor() { }
}
