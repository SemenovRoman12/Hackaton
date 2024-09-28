import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round',
  standalone: true,
  pure: true,
})
export class RoundPipe implements PipeTransform {
  transform(value: number): number {
    return Math.trunc(value);
  }
}
