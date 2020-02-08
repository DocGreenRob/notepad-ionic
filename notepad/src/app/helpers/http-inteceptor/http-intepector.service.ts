import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpResponse,
	HttpEvent,
	HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
	Observable,
	of,
	throwError
} from 'rxjs';
import {
	delay,
	mergeMap,
	materialize,
	dematerialize
} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { TestDataFactory } from '../../test-data-factory/test-data-factory';

@Injectable({
	providedIn: 'root'
})
export class HttpIntepectorService implements HttpInterceptor {

	private applyCredentials = function (req) {
		return req.clone({
			headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('notepad-app-token'))
		});
	};

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const {
			url,
			method,
			headers,
			body
		} = req;

		// wrap in delayed observable to simulate server api call
		return of(null)
			.pipe(mergeMap(handleRoute))
			.pipe(materialize())
			.pipe(delay(500))
			.pipe(dematerialize());

		function handleRoute() {
			if (!environment.useMockHttpService) {
				return next.handle(req);
			}

			switch (true) {
				case url.endsWith('http://api.cognitivegenerationenterprises.com/api/activity/getFeed/DocGreenRob/0/10') && method === 'GET':
					return activityFeed(10, 0);
				case url.endsWith('http://api.cognitivegenerationenterprises.com/api/activity/getFeed/DocGreenRob/11/10') && method === 'GET':
					return activityFeed(10, 11);
				// unknown = we don't know who you are
				case url.endsWith('http://api.cognitivegenerationenterprises.com/api/activity/getFeed/unknown-user/0/10') && method === 'GET':
					return error('Invalid User');
				case url.endsWith('http://api.cognitivegenerationenterprises.com/api/activity/getFeed/unauthorized-user/0/10') && method === 'GET':
					return unauthorized();
				// unknown = we know who you are, but your account is expired, unvalidated, but your credentials are good, but for some business
				//			 reason you are "invalid"
				case url.endsWith('http://api.cognitivegenerationenterprises.com/api/activity/getFeed/invalid-user/0/10') && method === 'GET':
					return error('Invalid User');
				default:
					// pass through any requests not handled above
					return next.handle(req);
			}
		}

		// route functions
		async function activityFeed(count?: number, seed: number = 0) {
			var activityFeed = new TestDataFactory().GetActivityFeed(count, seed);
			return next.handle(ok(activityFeed));
		}

		// helper functions

		function ok(body?) {
			return new HttpResponse({ status: 200, body });
		}

		function unauthorized() {
			return throwError({ status: 401, error: { message: 'Unauthorized' } });
		}

		function error(message) {
			return throwError({ error: { message } });
		}

		function isLoggedIn() {
			return headers.get('Authorization') === 'Bearer fake-jwt-token';
		}

		function idFromUrl() {
			const urlParts = url.split('/');
			return parseInt(urlParts[urlParts.length - 1]);
		}
	}
}

export const httpIntepectorService = {
	// use fake backend in place of Http service for backend-less development
	provide: HTTP_INTERCEPTORS,
	useClass: HttpIntepectorService,
	multi: true
};