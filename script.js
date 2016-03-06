console.log("loaded");
$(document).ready(function () {

	console.log("ready");
	var grid-height = 16;
	var grid-width = 16;
	var row-height = (100/grid-height) + "%";
	var square-width = (100/grid-width) + "%";

	for (i = 1; i <= grid-height; i++) {

		$("#grid-wrapper").append("<div class=rows id=row-"+i+"></div>");

		for (j = 1; j <= grid-width; j++) {
		
			$("#row-"+i).append("<div class=grid-squares></div>");

		};

		if (i = grid-height) {

		$(".rows").height(row-height);
		$(".grid-squares").width(square-width);

		};
	};

	$(".grid-squares").on('mouseenter', function() {

		$(this).toggleClass("highlighted");

	});
});

		$("#grid-wrapper").empty();

                gridWidth = Number(prompt("New width:"));
                confirm("Is this width OK: " + gridWidth);
                squareWidth = ((100 / gridWidth) + "%");
                gridHeight = Number(prompt("New height:"));
                confirm("Is this height OK: " + gridHeight);
                rowHeight = ((100 / gridHeight) + "%");

                for (q = 1; q <= gridHeight; q++) {

                        $("#grid-wrapper").append("<div class=rows id=row-"+q+"></div>");
                };

                for (m = 1; m <= gridWidth; m++) {
                        for (n = 1; n <= gridWidth; n++) {
                                $("#row-"+m).append("<div class=grid-squares></div>");
                        };
                };

                $(".rows").height(rowHeight);
                $(".grid-squares").width(squareWidth);

