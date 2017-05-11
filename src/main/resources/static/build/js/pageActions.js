$.getScript("/js/regionsForStates.js", function(data, textStatus, jqxhr) {
	console.log('Load was performed for state dropdown.');
	});

$("#maxDepth").on("click", disable);
$("#alertForm").on("click", addToSearchList);

count = 0;

function disable(event) {
	count++;
	if (count % 2 != 0) {
		$('#pages').attr("disabled", true);
		$('#pages').val("0");
	} else {
		$('#pages').attr("disabled", false);
		$('#pages').val("");
	}
}

function addToSearchList(){
	var Area = 'City of Chicago'
	$('#tableBody').append('<tr class="odd pointer"> <td class="a-center "> <input type="checkbox" class="flat" name="table_records"> </td>  <td class=" ">'+ Area +'</td><td class=" ">May 23, 2014 11:47:56 PM </td><td class=" ">1</td><td class=" ">Rival Sons tickets May 25th</td><td class=" ">urbo143851@gmail.com</td><td class="a-right a-right ">true</td></tr>');
	    if ($("input.flat")[0]) {
	        $(document).ready(function () {
	            $('input.flat').iCheck({
	                checkboxClass: 'icheckbox_flat-green',
	                radioClass: 'iradio_flat-green'
	            });
	        });
	    }
	    $('table input').on('ifChecked', function () {
	        checkState = '';
	        $(this).parent().parent().parent().addClass('selected');
	        countChecked();
	    });
	    $('table input').on('ifUnchecked', function () {
	        checkState = '';
	        $(this).parent().parent().parent().removeClass('selected');
	        countChecked();
	    });

	    var checkState = '';

	    $('.bulk_action input').on('ifChecked', function () {
	        checkState = '';
	        $(this).parent().parent().parent().addClass('selected');
	        countChecked();
	    });
	    $('.bulk_action input').on('ifUnchecked', function () {
	        checkState = '';
	        $(this).parent().parent().parent().removeClass('selected');
	        countChecked();
	    });
	    $('.bulk_action input#check-all').on('ifChecked', function () {
	        checkState = 'all';
	        countChecked();
	    });
	    $('.bulk_action input#check-all').on('ifUnchecked', function () {
	        checkState = 'none';
	        countChecked();
	    });

	    function countChecked() {
	        if (checkState === 'all') {
	            $(".bulk_action input[name='table_records']").iCheck('check');
	        }
	        if (checkState === 'none') {
	            $(".bulk_action input[name='table_records']").iCheck('uncheck');
	        }

	        var checkCount = $(".bulk_action input[name='table_records']:checked").length;

	        if (checkCount) {
	            $('.column-title').hide();
	            $('.bulk-actions').show();
	            $('.action-cnt').html(checkCount + ' Records Selected');
	        } else {
	            $('.column-title').show();
	            $('.bulk-actions').hide();
	        }
	    }    
}