$(function(){
	//by default, when user opens the biothings explorer, 
	//the overview of api road map will be displayed


	draw_api_map();
	//temparorily hide explore_path section, this section will only be shown
	//after the user has specified the path
	$("#explore-path").hide();
	//Display api_road_map when 'roadmapbutton' is clicked
	$("#roadMapButton").click(function() {
		draw_api_map();
	});
	//populate the sidebar, fill in endpoint and bioentity names to 'select'
	populateSelectInSideBar();
	//when user select a bioentity/endpoint, display the sankey plot 
	//related to the user request
	displaySankeyBasedOnUserSelect();
	//when user select the path connecting input/output, and provide the input value
	//display the cytoscape graph linking input and output
	$("#explorePathButton").click(function() {
		displayOutputToCytoscape();
	});
});


