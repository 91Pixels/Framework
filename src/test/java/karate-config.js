function fn() {
	
	//created a variable
	var env = karate.env; // getSystem.property// we need this for jenkins execution/when we execute as maven
	
	//created a variable that holds the path of the FilePath.json file
	var file_path = 'classpath:./src/test/resources/config/FilePath.json';
	
	//created a variable that holds the server related data info (endpoints, uri, resource..)
	var hrApiServerData = 'classpath:./src/test/resources/config/HRApiServerData.json';


	//created a variable and assigned value
	env = 'scrum'// HARD CODED, after maven lecture this line will be REMOVED


	//similar to system.out.println()-> we are logging for our own reference
	karate.log('karate.env value:', env);


	//if condition - if env variable does not have any value then go set up and assign scrum as default
	if (!env) {
		env = 'scrum'
	}


	
	var config = {
		env: env,
		file_path: file_path,
		hrApiServerData: hrApiServerData,
		username: '',
		password: ''
	}
	if (env == 'sit') {
		config.username = 'framework',
		config.password = '12345678'
	}


	return config;
}