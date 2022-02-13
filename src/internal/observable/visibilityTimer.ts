import {asyncScheduler, Observable, SchedulerLike, timer} from "rxjs/dist/types";

export function visibilityTimer(due: number | Date, scheduler?: SchedulerLike): Observable<0>;
export function visibilityTimer(startDue: number | Date, intervalDuration: number, scheduler?: SchedulerLike): Observable<number>;
export function visibilityTimer(dueTime: number | Date, unused: undefined, scheduler?: SchedulerLike): Observable<0>;

export function visibilityTimer(
    dueTime: number | Date = 0,
    intervalOrScheduler?: number | SchedulerLike,
    scheduler: SchedulerLike = asyncScheduler): Observable<number> {
  return timer(dueTime, scheduler);
}
