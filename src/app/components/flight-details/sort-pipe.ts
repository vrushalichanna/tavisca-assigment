//The pipe class implements the PipeTransform interface's transform method that accepts an input value and an optional array of parameters and returns the transformed value.
import { Pipe,PipeTransform } from "@angular/core";
//We tell Angular that this is a pipe by applying the @Pipe decorator which we import from the core Angular library.
@Pipe({
  //The @Pipe decorator takes an object with a name property whose value is the pipe name that we'll use within a template expression. It must be a valid JavaScript identifier. Our pipe's name is sortby.
  name: "sortby"
})
export class SortByPipe implements PipeTransform {
  transform(array:Array<any>, args?) {
    // Check if array exists, in this case array contains articles and args is an array that has 1 element : !id
    if(array) {
      // get the first element
      let sortByValue = args[0]
      let byVal = 1
      // check if exclamation point 
      if(sortByValue.charAt(0) == "!") {
        // reverse the array
        byVal = -1
        sortByValue = sortByValue.substring(1)
      }
      console.log("byVal",byVal);
      console.log("sortByValue",sortByValue);

      array.sort((a: any, b: any) => {
        if(a[sortByValue] < b[sortByValue]) {
          return -1*byVal;
        } else if (a[sortByValue] > b[sortByValue]) {
          return 1*byVal;
        } else {
          return 0;
        }
      });
      return array;
    }
    //
  }
}