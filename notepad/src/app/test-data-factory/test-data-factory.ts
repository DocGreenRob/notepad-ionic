import { ActivityFeed } from '../providers/activity.service';

export class TestDataFactory {

	// ActivityFeed
	GetActivityFeed(count?: number, seed: number = 0): ActivityFeed[] {

		let activityFeed: ActivityFeed[] = [
			{
				UserName: null,
				Id: 1,
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
				Id: 2,
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
				Id: 3,
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
				Id: 4,
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
				Id: 5,
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
				Id: 6,
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
				Id: 7,
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
				Id: 8,
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
				Id: 9,
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
				Id: 10,
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

		if (count === null ||
			count === undefined) {
			count = activityFeed.length;
		}

		if (seed === 0) {
			return activityFeed.slice(seed, count);
		}
		else {
			return activityFeed.slice(seed-1, ((seed + count)-1));
		}
			
	}
} 