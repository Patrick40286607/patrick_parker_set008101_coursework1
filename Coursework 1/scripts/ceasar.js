function encrypt()
{
	var standard_text = document.getElementById("message").value;
	var encrypted_text = [];
	var alphabet= [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
					'q','r','s','t','u','v','w','x','y','z']
	var shift_number = document.getElementById("shift").value
	var caesar_shift = parseInt(shift_number);


	for(var idx = 0; idx<standard_text.length; idx++)
	{
		var input = alphabet.indexOf(standard_text[idx]);
		if(input == -1)
		{
			encrypted_text.push(standard_text[idx]);
		}
		else
		{
			var coded = (input + caesar_shift)%26
			var letter = alphabet[coded];
			encrypted_text.push(letter);
		}
	}

	document.getElementById("result").innerHTML = encrypted_text.join("");
}

function decrypt()
{
	var standard_text = document.getElementById("message").value;
	var encrypted_text = [];
	var alphabet= [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
					'q','r','s','t','u','v','w','x','y','z']
	var shift_number = document.getElementById("shift").value
	var caesar_shift = parseInt(shift_number);
	var caesar_decrypt = 26-(caesar_shift%26);


	for(var idx = 0; idx<standard_text.length; idx++)
	{
		var input = alphabet.indexOf(standard_text[idx]);
		if(input == -1)
		{
			encrypted_text.push(standard_text[idx]);
		}
		else
		{
			var coded = (input + caesar_decrypt)%26
			var letter = alphabet[coded];
			encrypted_text.push(letter);
		}
	}

	document.getElementById("result").innerHTML = encrypted_text.join("");
}

	
	