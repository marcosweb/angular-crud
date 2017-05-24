import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  constructor() { }

  getError(errors: string[])
  {
    let err: any = [];
    for (let erro in errors){
      if (errors[erro].length){
        err.push(errors[erro]);
        console.log(errors[erro]);
      }
    }
    return err;
  }

}
