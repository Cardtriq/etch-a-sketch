
$(document).ready(function () {
	$(document).on('mouseenter', '.grid-squares', function() {

		$(this).addClass('highlighted');

	});
        var gridHeight = 16;
        var gridWidth = 16;
        var rowHeight = ((100 / gridHeight) + "%");
        var squareWidth = ((100 / gridWidth) + "%");

        for (i = 1; i <= gridHeight; i++) {

                $("#grid-wrapper").append("<div class=rows id=row-"+i+"></div>");

        };

	for (k = 1; k <= gridWidth; k++) {	

        	for (j = 1; j <= gridWidth; j++) {

                	$("#row-"+k).append("<div class=grid-squares></div>");

        	};

	};

        $(".rows").height(rowHeight);
	$(".grid-squares").width(squareWidth);

	$("button").on('click', function() {
		
		$("#grid-wrapper").empty();

                gridWidth = Number(prompt("New width:"));
                squareWidth = ((100 / gridWidth) + "%");
                gridHeight = Number(prompt("New height:"));
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


		return false;
	});
	
});

