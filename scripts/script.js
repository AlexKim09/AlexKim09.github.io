var number_one;
var number_two;
var symb;

function calc(number) 
{

    if(number_one == undefined )
    {
        number_one = number
        document.getElementById('calculator').value += number
        document.getElementById('error').textContent = undefined
    } 

    else if(symb == undefined && number_one != undefined)
    {
        document.getElementById('error').textContent = 'Введите знак!'
    }
    else if(number_two == undefined){
        number_two = number
        document.getElementById('calculator').value += number

        if(symb == '+')
        {  
            document.getElementById('result').textContent = Number(number_one) + Number(number_two)
            document.getElementById('error').textContent = undefined
        }
        else if(symb == '-')
        {
            document.getElementById('result').textContent = Number(number_one) - Number(number_two)
            document.getElementById('error').textContent = undefined
            
        }
        else if (symb == '*')
        {
            document.getElementById('result').textContent = Number(number_one) * Number(number_two)
            document.getElementById('error').textContent = undefined
        }
        else if (symb == '/')
        {
            if (symb == '/' && number_two == 0)
            {
                document.getElementById('error').textContent = 'На 0 делить нельзя!'
            }
            else
            {
                document.getElementById('result').textContent = Number(number_one) / Number(number_two)
                document.getElementById('error').textContent = undefined
            }
        }
    }
    else if(number_one !=undefined && symb != undefined && number_two != undefined)
    {
        number_one = number
        symb = undefined
        number_two = undefined
        document.getElementById('calculator').value = number
        document.getElementById('error').textContent = undefined
    }
}

function sumb(sym)
{
    if(symb == undefined && number_one != undefined)
    {
        symb = sym
        document.getElementById('calculator').value += sym
        document.getElementById('error').textContent = undefined
    }
    else
    {
        document.getElementById('error').textContent = 'Выберите число!'
    }
}


