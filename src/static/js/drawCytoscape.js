function drawCytoscape(target_div, _style, _layout, data){
	$("#path-plotly-div").hide();
    $("#explore-plotly-div").hide();
	$(target_div).empty();
	//$("#log").hide();
    $(target_div).show(); 
	var cy = cytoscape({
		boxSelectionEnabled: false,
        autounselectify: true,
		container: $(target_div),
		layout: _layout,
		style: _style,
		elements: data
	});
	//var nav = cy.navigator();
	return cy;
}

function initializeCytoscape(target_div, _style, _layout) {
	$("#cy").empty();
	Plotly.purge('plotly-div');
	$("#paths").hide();
	//$("#log").hide();
    $("#cy").show();
    $("#plotly-div").hide();
	var cy = cytoscape({
		boxSelectionEnabled: false,
        autounselectify: true,
		container: $(target_div),
		layout: _layout,
		style: _style,
	});
	//var nav = cy.navigator();
	return cy;
}
