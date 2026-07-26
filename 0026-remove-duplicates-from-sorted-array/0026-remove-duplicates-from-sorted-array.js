/**
 * @param {number[]} arr
 * @return {number}
 */
var removeDuplicates = function(arr){

    

    for(let i =0;i<arr.length;i++){
        



        for(let j = 0 ; j<arr.length;j++){

            if(j==i){
                continue
            }


            if(arr[j]==arr[i]){
               

                for(let k = j;k<arr.length;k++){

                    arr[k]=arr[k+1]


                }
          arr.length = arr.length-1
j--

                continue
            }


        }
       
    }


return arr.length
}
