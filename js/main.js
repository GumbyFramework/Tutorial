Gumby.ready(function() {
	Gumby.debug('Gumby is ready to go');
	
	// re-initialise skiplinks when #highlights are shuffled
	$('#highlights').on('gumby.onShuffle', function() {
		Gumby.initialize('skiplink');
	});
});
