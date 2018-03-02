function reverse()
{
	var standard_text = document.getElementById("mreverse").value;
	var encrypted_text = [];
	var alphabet= [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
					'q','r','s','t','u','v','w','x','y','z']
	var alphabet_reversed = [ 'z','y','x','w','v','u','t','s','r','q','p','o',
								'n','m','l','k','j','i','h','g','f','e','d','c','b','a']


	for(var idx = 0; idx<standard_text.length; idx++)
	{
		var input = alphabet.indexOf(standard_text[idx]);
		if(input == -1)
		{
			encrypted_text.push(standard_text[idx]);
		}
		else
		{
			var letter = alphabet_reversed[input];
			encrypted_text.push(letter);
		}
	}

	document.getElementById("revresult").innerHTML = encrypted_text.join("");
}

function standard()
{
	var standard_text = document.getElementById("mreverse").value;
	var encrypted_text = [];
	var alphabet= [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
					'q','r','s','t','u','v','w','x','y','z']
	var alphabet_reversed = [ 'z','y','x','w','v','u','t','s','r','q','p','o',
								'n','m','l','k','j','i','h','g','f','e','d','c','b','a']


	for(var idx = 0; idx<standard_text.length; idx++)
	{
		var input = alphabet.indexOf(standard_text[idx]);
		if(input == -1)
		{
			encrypted_text.push(standard_text[idx]);
		}
		else
		{
			var letter = alphabet_reversed[input];
			encrypted_text.push(letter);
		}
	}

	document.getElementById("revresult").innerHTML = encrypted_text.join("");
}

	