<?php 

// Angular Application
$app->get('/', function ($request, $response, $args) {    			           
    include(__DIR__ . '/../../public/index.html');
});

// Return the entire dataset
$app->get('/api/persons', function ($request, $response, $args) {    			           
    return $response->withJson($this->persons);
});

// Filter by a person’s eye colour
$app->get('/api/persons/eye/[{eyeColor}]', function ($request, $response, $args) {    		

	// Get eye color
	$eye_colour = $args['eyeColor'];
	$filter_data = array();

	foreach ($this->persons as $person) {
		// Check persons's eye color
		if ($person['eyeColor'] == $eye_colour) {
			// Add match in a new array
			$filter_data[] = $person;
		}
	}	

    return $response->withJson($filter_data);

});

// Return all the friends of each persons in a flat array of objects
$app->get('/api/persons/friends', function ($request, $response, $args) {    		
	
	$friends = array();	   

	foreach ($this->persons as $person) {
		// Get persons's friends
		foreach ($person['friends'] as $friend) {
			$friends[] = $friend;
		}
	}

    return $response->withJson($friends);

});

// Insert a new person into the person’s dataset
$app->post('/api/persons/add', function ($request, $response, $args) {    			

	// Get person from body request
	$item = $request->getParsedBody();	

	$persons = $this->persons;
	$persons[] = $item;

	file_put_contents(__DIR__ . '/data.php', '<?php return ' . var_export($persons, TRUE) . '?>');

    return $response->withJson($persons);
});







