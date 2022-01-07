import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customePi'
})
export class CustomePiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
