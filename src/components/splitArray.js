let what=function(a,num){
    let length = a.length;
    let b = [];
    // push次数
    let flag = parseInt(length/num);
    if(length%num!=0){
        flag++;
    }

    for(let i=0; i<flag; i++){
        if(i<flag-1){
            // b[i]=new Array();
            // b[i].push(...a.slice(num*i,num*i+num));
            b.push(a.slice(num*i,num*i+num))
        }
        else{
            // b[i]=new Array();
            // b[i].push(...a.slice(num*i));
            b.push(a.slice(num*i));
        }
    }
    return b;
  }
  export default what;