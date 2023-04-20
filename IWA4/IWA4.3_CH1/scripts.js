const date = 2050                                   // as instructed declared this  
let status = 'parent'                               // declared this as a let 
let count = 0                                       // declared this as a let 

if (date == 2050) {                                 // corrected the operator to ==
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	let date = 'April'                              // added the let 
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count =+ 4                               // removed the let 

	if (status == "student") {                      // corrected the operator to ==
	  console.log('June', 'Youth Day')
	    count +=1                          
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	count += 3                                // removed the let to not redefine a global const                         

	if (status == "parent") {                       // corrected the operator to ==
	  console.log(date, 'Christmas Day')
	    count += 1                            // removed the let to not redefine a global cons
  }

	console.log(date, 'Day of Goodwill')
	count += 1                                // removed the let to not redefine a global cons
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)