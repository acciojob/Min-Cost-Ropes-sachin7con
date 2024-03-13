function mincost(arr)
{ 
//SGN write your code here
	
  arr.sort(function(a,b){ return a-b });
  let sum =0;
  let res = 0;
  
  let sumArr = [0];
  for(let i=0; i<arr.length; i++){
      sum += arr[i];
      sumArr.push(sum);
        
}
for(let j=0; j<sumArr.length; j++){
    res += sumArr[j];
}

	return res;

// return the min cost
  
}

module.exports=mincost;
