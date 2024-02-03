import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const examGurdGuard: CanActivateFn = (route, state) => {
 
  let router=inject(Router)
  
  if(localStorage.getItem("userID")!==null){
    return true;
  }
  else{
    router.navigateByUrl("/register")

    return false;
  }
};
