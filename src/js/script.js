(function ($) {
    'use strict';

    $(document).ready(function() {

        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault(); // prevent hard jump, the default behavior
            var target = $(this).attr("href"); // Set the target as variable
            var offset = $(target).offset().top - 60;
            $('html, body').animate({
                scrollTop: offset
            }, 1000);
            location.hash = target;
        });   
    });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    let bodyElement = document.querySelector("body");
    bodyElement.style.fontFamily ="'Oswald', sans-serif";

    let headerElement = document.querySelector(".navbar");
    headerElement.style.backgroundColor ="#717171";

    let titleElement = document.querySelector("h1");
    titleElement.innerText = "Exercises - games with javascript";
    titleElement.style.color ="#717171";
    titleElement.style.fontWeight = "300";
    titleElement.style.padding = "25px 0";
    titleElement.style.textAlign = "center";
    
    let subTitleElement = document.querySelector("h2");
    subTitleElement.style.fontWeight = "300";

// ------ start Noughts crosses game - 1 ------
    let btnStart1 = document.querySelector(".btn-game-1");
    btnStart1.style.color ="#ffffff";
    btnStart1.innerText = "Click here to start";

    btnStart1.addEventListener("click", function() {

        const game = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        let _1 = document.querySelector('._1');
        let _2 = document.querySelector('._2');
        let _3 = document.querySelector('._3');

        function move(last) {
            let moveX = prompt("Player X, please enter coordinates (00, 11, 22)");
            let xx = parseInt(moveX[0]);
            let yx = parseInt(moveX[1]);
            game[xx][yx] = 'X';
            if (last) return;
            let moveY = prompt("Player Y, please enter coordinates (00, 11, 22)");
            let xy = parseInt(moveY[0]);
            let yy = parseInt(moveY[1]);

            game[xy][yy] = 'O'
        }
        for (let i = 0; i < 5; i++) {
            let last = i === 5;
            move(last);
            _1.innerHTML = (game[0].toString());
            _2.innerHTML = (game[1].toString());
            _3.innerHTML = (game[2].toString());
        }
        alert('Finished!');
    });

    // ------ start Take a guess word game - 2 ------
    let btnStart2 = document.querySelector(".btn-game-2");
    btnStart2.style.color ="#ffffff";
    btnStart2.innerText = "Click here to start";

    btnStart2.addEventListener("click", function() {
        let word = "";
        let guesswork = new Set();
        let maxGuesswork = 5;
        word = prompt("Please write word");
        let guess1 = document.querySelector(".content-result-game-2");

        while(true){
            
            let finished = true;
            for(let j = 0; j < word.length ; j++){
                if(guesswork.has(word[j])){
                    guess1.innerText += word[j];
                }else {
                    guess1.innerText += "-";
                    finished = false;
                }
            }
            if(finished === true){
                alert("You Win! The answer was: " + word);
                break;
            }

            guess1.innerHTML += "<br/>";
            let ventures = prompt("Guess a letter, or click Cancel to stop playing.");
            guesswork.add(ventures);


			if(guesswork.size === maxGuesswork){
				alert("Sorry, you ran out of guesses. The answer was: " + word);
				break;
			}

        }
    });


    // ------ start Object exercises - obj ------

    let btnStartObj1 = document.querySelector(".btn-exercises-obj-1");
    btnStartObj1.style.color ="#fffff";
    btnStartObj1.innerText = "Click here to start";

    btnStartObj1.addEventListener("click", function() {
    //object ex 1
        class Car{
            constructor(brand, model, motor, fuel, color){
                this.brand = brand;
                this.model = model;
                this.motor = motor;
                this.fuel = fuel;
                this.color = color;
            }
            showDetails(){
                console.log(`${this.brand},${this.model}, ${this.motor}, ${this.fuel}, ${this.color}`);
            }	
        }
        let obj1 = new Car("bmw", "3", "2.0", "gaz", "red");
        let obj2 = new Car("audi", "2", "2.0", "disel", "blue");
        let obj3 = new Car("opel", "1", "2.0", "gaz", "black");

        console.log(obj1.showDetails());
        console.log(obj2.showDetails());
        console.log(obj3.showDetails());

        //object ex 2
        class Student1{
            constructor(name, lastName, age){
                this.name = name;
                this.lastName = lastName;
                this.age = age;
            }
            studentHalo(){
                console.log(`My name is: ${this.name} ${this.lastName} and I have ${this.age} years old`);
            }
        }
        let students = [];
        while(true){
            let name = prompt("Please write your name:  ");
            let lastName = prompt("Please write your last name:  ");
            let age = prompt("Please write your age: ");

            if(name === "" && lastName === "" && age === ""){
                break;
            }else{
                const obj = new Student1(name, lastName, age);
                students.push(obj);
            }
        }
        for(let stud of students){
            stud.studentHalo();
        }
    });

    let btnStartObj2 = document.querySelector(".btn-exercises-obj-2");
	btnStartObj2.style.color ="#ffffff";
	btnStartObj2.innerText = "Click here to start";

	btnStartObj2.addEventListener("click", function() {

		class shoppingBasket{
			constructor(){
				this.shopping = new Map();
			}
			add(product, amount){
				this.shopping.set(product, amount);
			}
			show(){
				for(let item of this.shopping.keys()){
					console.log(item, this.shopping.get(item));
				}
			}
		}
		let shoppingBaskets = [];
		let shop = new Map();
		shop.set("juice ", 2.50);
		shop.set("water", 1.50);
		shop.set("beer", 3.50);
		while(true){
			let dec = prompt("Would you like to start shopping? Y/N?").toUpperCase();
			if(dec === "Y"){
				let shoppingBasket = new shoppingBasket();
				while(true){
					let product = prompt("Please enter the name of product (juice, water, beer)");
					if(product === ""){
						shoppingBaskets.push(shoppingBasket);
						break;
					}else{
						if(shop.has(product)){
							let amount = parseInt(prompt("Please enter the amount of product"));
							if(shoppingBasket.shopping.has(product)){
								amount += shoppingBasket.shopping.get(product);
							}
							shoppingBasket.add(product, amount);
						}else{
							alert("Sorry, we do not have a product in our Shop.");
						}
					}
				}
			}else{
				alert("Thank you for choosing to shop!");
				break;
			}
		}
		let client = 1;
		for(let i of shoppingBaskets){
			console.log(`Summary of the number results of ${client}`);
			let sumShop = 0;
			for(let j of i.shopping.keys()){
				console.log(`product: ${j} - ${i.shopping.get(j)} szt. - ${shop.get(j)}zl - ${shop.get(j) * i.shopping.get(j)} zl`);
				sumShop += shop.get(j) * i.shopping.get(j);
			}

			console.log(`Total amount payable: ${sumShop} zl`);
			client++;
		}
    });
    
    let btnStartObj3 = document.querySelector(".btn-exercises-obj-3");
	btnStartObj3.style.color ="#ffffff";
	btnStartObj3.innerText = "Click here to start";

	btnStartObj3.addEventListener("click", function() {
		class Student{
			constructor(name, lastName, indexNr){
				this.name = name;
				this.lastName = lastName;
				this.indexNr = indexNr;
				this.assessments = [];
			}
			average(){
				let sumX = 0;
				for(let i of this.assessments){
					sumX += i;
				}
				return sumX/this.assessments.length
			}
		}
		university = [];
		while(true){
			dec = prompt("D-add, O-assessment, U-delete student, P-show list, K-end programme").toUpperCase();
			if(dec === "D"){
				let name = prompt("Please write your name: ");
				let lastName = prompt("Please write your last name: ");
				let indexNr = parseInt(prompt("Please write index number: "));

				let student = new Student(name, lastName, indexNr);
				university.push(student);

			}else if(dec === "O"){
				let indexNr = parseInt(prompt("Please write index number: "));

				for(let i of university){
					if(indexNr === i.indexNr){
						let assessment = parseInt(prompt("Please write assessment: "));
						i.assessments.push(assessment);
					}
				}
				console.log(university);
			}else if(dec === "U"){
				let indexNr = parseInt(prompt("Please write index number: "));
				for(let i in university){
					if(indexNr === university[i].indexNr){
						university.splice(i, 1);
						break;
					}
				}

			}else if(dec === "P"){
				for(let i of university){
					console.log(`Name: ${i.name} Last Name: ${i.lastName} Index number: ${i.indexNr} Assessments: ${i.assessments} Average: ${i.average()}`);
				}

			}else if(dec === "K"){
				alert("The end programme");
				break;
			}
		}
	});

	let btnStartObj4 = document.querySelector(".btn-exercises-obj-4");
	btnStartObj4.style.color ="#ffffff";
	btnStartObj4.innerText = "Click here to start";

	btnStartObj4.addEventListener("click", function() {
		class Patient{
			constructor(name,lastName){
				this.name = name;
				this.lastName = lastName;
				this.deadlines = [];
			}
			patientHelo(){
				console.log(this.name + " " + this.lastName);
			}
			showDeadlines(){
				for(let i of this.deadlines){
					console.log(i);
				}
			}
		}

		class Clinic{
			constructor(nameClinic){
				this.nameClinic = nameClinic;
				this.patients = [];
				this.menu();
			}

			menu(){
				while(true){
					let dec = prompt(`Hello in the Clinic ${this.nameClinic} \n D-add patient, U-deleteP, T-add deadlines patient, L-patient list, K-end programme `).toUpperCase();
					if(dec === "D"){
						let name = prompt("Please write you name: ");
						let lastName = prompt("Please write your last name: ");

						let patient = new Patient(name,lastName);
						this.patients.push(patient);

					}
					else if(dec === "U"){
						let lastName = prompt("Please write your last name: ");
						for(let i in this.patients){
							if(lastName === this.patients[i].lastName){
								this.patients.splice(i, 1);
								break;
							}
						}
					}
					else if(dec === "T"){
						let lastName = prompt("Please write your last name: ");
						for(let i in this.patients){
							if(lastName === this.patients[i].lastName){
								let deadlines = prompt("Please write deadlines: ");
								this.patients[i].deadlines.push(deadlines);
								break;
							}
						}
					}
					else if(dec === "L"){
						for(let i of this.patients){
							i.patientHelo();
							i.showDeadlines();
						}
					}
					else if(dec === "K"){
						alert("Thank you for visited the Clinic" + this.nameClinic + "!");
						break;
					}
				}
			}
		}
		obj = new Clinic("ABC Health");

    });
    

    	// ------ start Inheritance(ES6) exercises ------
        let btnStartInher1 = document.querySelector(".btn-exercises-inher-1");
        btnStartInher1 .style.color ="#ffffff";
        btnStartInher1 .innerText = "Click here to start";
    
        btnStartInher1 .addEventListener("click", function() {
            class Product{
                constructor(nameProduct, priceProduct){
                    this.nameProduct = nameProduct;
                    this.priceProduct = priceProduct;
                }
            }
            class SoftwareProduct extends Product{
                
                constructor(nameProduct, priceProduct, languageProduct, system){
                    super(nameProduct, priceProduct);
                    this.languageProduct = languageProduct;
                    this.system = system;
                }
            }
            class Training extends SoftwareProduct{
                constructor(nameProduct, priceProduct, languageProduct, system, term){
                    super(nameProduct, priceProduct, languageProduct, system);
                    this.term = term;
                }
            }
            let obj = new Training("Programme JS", 100, "polish", "Windows", "2019-02-16");
            console.log(obj);
    
        });
    
        let btnStartInher2 = document.querySelector(".btn-exercises-inher-2");
        btnStartInher2 .style.color ="#ffffff";
        btnStartInher2 .innerText = "Click here to start";
    
        btnStartInher2 .addEventListener("click", function() {
            class Employee{
                constructor(name, lastName, contract, salary){
                    this.name = name;
                    this.lastName = lastName;
                    this.contract = contract;
                    this.salary = salary;
                }
            }
            class EmployeeController{
                constructor(){
                    this.employees = [];
                }
                addEmployee(name, lastName, contract = "internship", salary = 1000){
                    let ob = new Employee(name, lastName, contract, salary);
                    this.employees.push(ob);
                }
                showEmployees(){
                    for(let i of this.employees){
                        console.log(i);
                    }
                }
                deleteEmployee(i){
                    this.employee.splice(i,1);
                }
                changeContract(salary, i){
                    this.employees[i].contract = "tenure";
                    this.employees[i].salary = salary;
                }
            }
            class Company extends EmployeeController{
    
                constructor(companyName){
                    super();
                    this.companyName = companyName;
                    this.employees = [];
                    this.menu();
                }
                menu(){
                    while(true){
                        let dec = prompt(`Welcome in the Company ${this.companyName} \n D-add, P-show, U-delete, Z-change, K-end programme`).toUpperCase();
    
                        if(dec === "D"){
                            let name = prompt("Please write name: ");
                            let lastName = prompt("Please write last name: ");
                            let contract = prompt("Please choose contract: [I/T]: ").toUpperCase();
    
                            if(contract === "I"){
                                this.addEmployee(name, lastName);
                            }else if(contract === "T"){
                                let salary = prompt("Please write salary: ");
                                this.addEmployee(name, lastName, "tenure", salary);
                            }
                        }
                        else if(dec === "P"){
                            this.showEmployees();
                        }
                        else if(dec === "U"){
                            let lastName = prompt("Please write last name: ");
                            for(let i in this.employees){
                                if(lastName === this.employees[i].lastName){
                                    this.deleteEmployee(i);
                                    break;
                                }
                            }
                        }
                        else if(dec === "Z"){
                            let lastName = prompt("Please write last name: ");
                            let salary = prompt("Please write salary: ");
                            for(let i in this.employees){
                                if(lastName === this.employees[i].lastName){
                                    this.changeContract(salary, i);
                                    break;
                                }
                            }
                        }
                        else if(dec === "K"){
                            alert("Thank you for visited the Company" + this.companyName + "!");
                            break;
                        }
                    }
                }
            }
            let obj = new Company("ABC");
        });


    // ------ start Form exercises - 1 ------
    let btnStart4 = document.querySelector(".btnSend");
    btnStart4.innerText = "Send";
    btnStart4.style.color ="#ffffff";
    btnStart4.addEventListener("click", function(){
        sendForm()
    });
	
	function sendForm(){
		document.querySelector("#name-result").innerHTML = document.querySelector("form input[name ='name']").value;
		document.querySelector("#second-name-result").innerHTML = document.querySelector("form input[name = 'second-name']").value;
		document.querySelector("#select-result").innerHTML = document.querySelector("form select[name = 'subject']").value;
		document.querySelector("#text-result").innerHTML = document.querySelector("form #text-comment").value;
	}

	class UserContact {
		constructor(userName, userLastName){
		this.userName = userName;
			this.userLastName = userLastName;
		}
     }
     
     function addUser(){
		let userName = document.querySelector("#name-result").innerHTML = document.querySelector("form input[name ='name']").value;
		let UserLastName = document.querySelector("#second-name-result").innerHTML = document.querySelector("form input[name = 'second-name']").value;
	 
		let UserContact = new UserContact(userName, UserLastName);

		let data = localStorage.getItem("Book");

		if(data == null){
			data = [];
		}else{
			data = JSON.parse(data);
		}
		data.push(UserContact);
		localStorage.setItem("Book", JSON.stringify(data));
		console.log(data);
     }
     
});


//Storage section

class Contact {
	constructor(name, lastName, phone){
		this.name = name;
		this.lastName = lastName;
		this.phone = phone;	
	}	
}
function addUser(){
	let name = document.querySelector("#name-storage").value;
	let lastName = document.querySelector("#lastName-storage").value;
	let phone = document.querySelector("#phone-storage").value;
	
	let contact = new Contact(name, lastName, phone);
	
	let dane = localStorage.getItem("Book");
	
	if(dane == null){
		dane = [];
	}else{
		dane = JSON.parse(dane);
	}
	
	dane.push(contact);
	localStorage.setItem("Book", JSON.stringify(dane));
	
	showUsers();
}

function showUsers(){
	
	let daneJSON = localStorage.getItem("Book");
	let dane = JSON.parse(daneJSON);
	
	let html = "<ul>"
	let counter = 0;
	
	if(dane != null){
		
		for (let o of dane){
			html += "<li>";
				html += o.name+" "+o.lastName+" "+o.phone;
				html += "<a href='#' onclick='delUser("+counter+")'>delete</a>";
			html += "</li>"
			counter++;
		}

		html += "</ul>";
	}	
	
	document.querySelector("#showUsers").innerHTML = html;	
	
}

function delUser(variable1){
		
	let daneJSON = localStorage.getItem("Book");
	let dane = JSON.parse(daneJSON);
	
	dane.splice(variable1, 1);
	
	localStorage.setItem("Book", JSON.stringify(dane));
	
	showUsers();
}

function delAll(){
	localStorage.clear();
	showUsers();	
}


