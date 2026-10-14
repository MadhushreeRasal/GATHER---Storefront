//Global variables to store the data that is needed anywhere
let array=[];
	
//Function to add or remove the product cards 
function card(input){
	
	//storing product details in an array 
	let product=[];
	product[0] = document.getElementById('pr_id').value;
	product[1] = document.getElementById('pr_category').value;
	product[2] = document.getElementById('pr_name').value;
	product[3] = document.getElementById('pr_img').value;
	product[4] = document.getElementById('pr_des').value;
	product[5] = document.getElementById('pr_price').value;
	product[6] = "In Stock";
	if(input === "removef"){
		//SHIFT : Remove the first card
		console.log('remove first product details - shift');
			array.shift();
	}else if(input === "removel"){
		// POP : remove the last card
		console.log('remove last product details - pop');
		array.pop();
		
	}else if(input === "addf"){
		//Unshift : add card to first position
		console.log('add product details to first position- unshift');
		if(product[2] === "" || product[5] === ""){
			alert("Please fill in the product details");
		}else{
			array.unshift(product);
		}
		
	}else if(input === "addl"){
		//PUSH : Add card to last position
		console.log('add product details to last position- push');
		if(product[2] === "" || product[5] === ""){
			alert("Please fill in the product details");
		}else{
			array.push(product);
		}
	}
	
	//clear the form to fill new values - basic for convenience 
	document.getElementById('pr_id').value="";
	document.getElementById('pr_category').value="";
	document.getElementById('pr_name').value="";
	document.getElementById('pr_img').value="";
	document.getElementById('pr_des').value="";
	document.getElementById('pr_price').value="";
	
		//the array has had changes call the card generator 
	details(array);	
}

//functions to generate and display product details
function details(array){
	//Generate cards according to the modified array  
	document.getElementById('cards').innerHTML="";
	
	//calling each array in an array
	for(let i=0; i<array.length; i++){
			let status;
		// Stock status check
		if(array[i][6] === undefined){
			status = "Out of Stock";
		}else{
			status = array[i][6];
		}
		//Generating and displaying product cards 
		document.getElementById('cards').innerHTML += `
			<div style="display:flex; flex-direction:column; justify-content:space-between; padding:12px; border:1px solid black; border-radius:5px; width:300px; margin:15px 20px; background-color:white; word-break:break-all; overflow-wrap: break-word; flex-shrink:0;">
				<div style="display:flex; justify-content:space-between;">
					<span class=" style="font-size:12px;"><b>Product Id: </b>${array[i][0]}</span><!-- Product id -->
					<span style="border-radius:8px; background-color:black; color:white; font-size:12px; padding:3px 10px;">${array[i][1]}</span><!-- Category label -->
				</div>
				<p style="margin:5px; font-size:19px; font-weight:bold;">${array[i][2]}</p><!-- Product Name -->
				<img style="width:100%; border-radius:8px; border:1px solid silver;" src="${array[i][3]}" alt="Product image">
				<p style="margin:5px;"><b>Description: </b><br>${array[i][4]}</p><!-- Product description -->
				<p style="margin:5px;"><b>Price: </b>Rs. ${array[i][5]}/-</p><!-- Product price -->
				<p  style="margin:auto; text-align:center; background-color:#CCCCFF; padding:4px 10px; border-radius:8px; font-size:12px; margin:5px;"><b>Stock :</b> ${status}</p><!-- Items in stock -->
				<button style="background-color:black; color:white; border-radius:8px; padding:8px 20px; font-size:bold; margin:5px;" onclick="stock(${i})">Out of stock</button>
			</div>`	
	}
	
}

function stock(value){
	delete array[value][6];
	details(array);
}
