function count(a){
      let b = a.length;
      console.log(b);
}
s="Talha";
count(s);

















// Sorting

// let a = [4,1,3,5,2,29785];
// let b = a.sort((a,b)=>a-b)
// console.log(b);





































// Reverse an Array in Place


// let a = [1,2,3,4,5];
// let j = a.length-1;
// let s,l;
// for(let i = 0 ; i<a.length; i++){
//       if(i<j){
//        s = a[i];
//        l = a[j];
//        a[i] = l;
//        a[j] = s;
//       }
//       else{
//           break;  
//       }
//       j--;
// }
// console.log(a);













































// Nested Loops

// Print this Pattern
/*    
      *
      **          
      ***          
      ****          
*/

// let rows = 4;
// for(let i = 1; i <= rows; i++){
//     for(let j = 1 ; j <= i ; j++){
//         console.log("\r *");
//     }
//     console.log(" ")
// }

// let pattern = "";
// for ( let i = 1 ; i<=4 ; i++ ){
//     pattern += "*";
//     console.log(pattern);
// }

// Print this Pattern
/*    
      ****
      ***          
      **          
      *          
*/

// let p = "";
// let i =3;
//     for(let j = 0 ; j < i ; j++){
//         p += "*";
//         console.log(p);
//     }



// let lyrics = "Hello World How Are You, I am Fine What About You?";
// let singleWord = lyrics.split(" ");
// let i = 0;
// let pattern = "";
// let interval = setInterval(()=>{
//       console.clear();
      
//       console.log(singleWord.slice(0,i+1.).join(" "));
//       i++;
//       if(i === singleWord.length)
//             clearInterval(interval);

// },600)

// Array Questions

// 1) Find the maximum number in an array?


// let arr = [1,6,4,7,3,8,3,2];
// let a = null;
// for(let i = 0 ; i<arr.length ; i++){
//       for(let j = 1; j<arr.length;j++){
//             if(i === 0){
//                   if(arr[i]<arr[j]){
//                         a=arr[i];
//                   }else{
//                         a=arr[j];
//                   }
//             }else{
//                   if(a<arr[j])
//                         a=a;
//                   else
//                         a=arr[j];
//             }
//       }
// }
// console.log(a);