function arr(a)
{
    for(let i=0;i<a.length;i++)
    {
        a[i]+=1;
    }
    return a;
}
let a=[1,5,6,8];
let res=arr(a);
console.log(res);