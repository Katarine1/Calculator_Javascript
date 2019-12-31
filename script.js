
// Calculator

function sum(num1, num2)
{
	num1 = prompt("Sum - Enter Number 1 :");
	num2 = prompt("Sum - Enter Number 2 :");
	console.log(num1 + " + " + num2 + " = " + (parseFloat(num1) + parseFloat(num2)).toFixed(2));
}

function subtract(num1, num2)
{
	num1 = prompt("Subtract - Enter Number 1 :");
	num2 = prompt("Subtract - Enter Number 2 :");
	console.log(num1 + " - " + num2 + " = " + (num1 - num2).toFixed(2));
}

function multiply(num1, num2)
{
	num1 = prompt("Multiply - Enter Number 1 :");
	num2 = prompt("Multiply - Enter Number 2 :");
	console.log(num1 + " X " + num2 + " = " + (num1 * num2).toFixed(2));
}

function divide(num1, num2)
{
	num1 = prompt("Divide - Enter Number 1 :");
	num2 = prompt("Divide - Enter Number 2 :");
	if(num1 == 0 || num2 == 0)
	{
		console.log("Divide - Enter a nonzero value.");
	}
	else
	{
		console.log(num1 + " / " + num2 + " = " + (num1 / num2).toFixed(2));
	}	
}

function Show()
{
	sum();
	subtract();
	multiply();
	divide();
}

Show();