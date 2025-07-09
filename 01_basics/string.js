 const name="sneha"
 const repoCount=50
 //console.log(name+repoCount+"value"); // one way 
 // second way
 //console.log(`hello my name is ${name} and my repocount is ${repoCount}`);
 
 // another way to declare string
 const gameName= new String('sneha-kapoor') 
//  console.log(gameName[0])
//  console.log(gameName.__proto__);
//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//   console.log(gameName.charAt(2));
//   console.log(gameName.indexOf('e')); // to checkthe index 

// const newString = gameName.substring(0,4)
// console.log(newString);

//   const another=gameName.slice(-1,4);
//   console.log(another);
  
 // trim use to remove the spaces example
//  const second="  sam  "
//  console.log(second);
//  console.log(second.trim());
 
 //replace 

 const url="https://hitesh.com/hitesh%20choudhary"
 console.log(url.replace('%20', '-'));
 
 console.log(url.includes('hitesh'));

 console.log(gameName.split('-'));
 
 
 