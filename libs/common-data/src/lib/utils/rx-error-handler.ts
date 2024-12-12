import { catchError, filter, of, Observable } from 'rxjs';

export const errorHandler =
  <Type>(name?: string) =>
  (source: Observable<Type>) =>
    source.pipe(
      catchError(error => {
        console.error(`Error in: ${name}`, error);
        return of(null);
      }),
      filter(src => !!src)
    ) as Observable<Type>;
