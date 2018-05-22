/**
 * Display Sankey Plot for the selected Input
 * @return {Sankey Plot}
*/
function displayInput() {
	$("#input-search-button").click(function(){
        console.log('input-search-button clicked!');
		_input = $("#select-input").find("option:selected").attr('value');
		findOutputTypeBasedOnInputType(_input).done(function(jsonResponse){
	    	drawSankeyPlot(jsonResponse, type='path');
		});
	});
};

/**
 * Display Sankey Plot for the selected Output
 * @return {Sankey Plot}
*/
function displayOutput() {
    $("#output-search-button").click(function(){
        console.log("output-search-button clicked!");
        _output = $("#select-output").find("option:selected").attr('value');
        findInputTypeBasedOnOutputType(_output).done(function(jsonResponse){
            drawSankeyPlot(jsonResponse, type='path');
        });
    });
};

/**
 * Display Sankey Plot for the selected Endpoint
 * @return {Sankey Plot}
*/
function displayEndpoint() {
    $("#endpoint-search-button").click(function(){
        _endpoint = $("#select-endpoint").find("option:selected").attr('value');
        findInputOutputBasedOnEndpoint(_endpoint).done(function(jsonResponse){
            drawSankeyPlot(jsonResponse, type='path');
        });
    });
};


/**
 * Display Sankey Plot for the Paths Connecting Input and Output
 * @return {Sankey Plot}
*/
function displayPathsBetweenInputOutput() {
    $("#inputOutputPathButton").click(function(){
        var _input = $("#select-input1").find("option:selected").attr('value');
        var _output = $("#select-output1").find("option:selected").attr('value');
        var max_api = $("#select-max-api").find("option:selected").attr('value');
        findStartEndConnection(_input, _output, max_api).done(function(jsonResponse){
            drawSankeyPlot(jsonResponse, type="explore");
            CURRENT_PATHS = jsonResponse['paths'];
            $("#export-python").append(dynamic_text(_input, _output));
            draw_hierarchical_path(CURRENT_PATHS);
            populatePath("#select-path", CURRENT_PATHS);
        });
    });
};


function displaySankeyBasedOnUserSelect(){
    displayInput();
    displayOutput();
    displayEndpoint();
    displayPathsBetweenInputOutput();
}
