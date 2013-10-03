Gumby.ready(function() {
	Gumby.debug('Gumby is ready to go');
	
	// re-initialise skiplinks when #highlights are shuffled
	$('#highlights').on('gumby.onShuffle', function() {
		Gumby.initialize('skiplink');
	});

	// quote form validation
	$('.get-quote form').validation({
		required: [
			{
				name: 'name'
			},
			{
				name: 'phone'
			},
			{
				name: 'email',
				// email must contain @
				validate: function($el) {
					return $el.val().indexOf('@') > -1;
				}
			},
			{
				name: 'version',
				// must pick version with valid value
				validate: function($el) {
					return $el.val() !== '#';
				}
			}
		],
		// validation passed
		submit: function(formData) {
			Gumby.debug(formData);
			alert("Succes! Posting form...");
		},
		// validation failed
		fail: function() {
			alert("Form validation failed...");
		}
	});
});
