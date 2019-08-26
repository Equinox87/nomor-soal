var end = 20;
var start = 1;
var long = (20 - 1) + 1;

var opened = 0;

$('documents').ready(function(){
    var createNumber = function(){
        opened = 0;
        $('#number-container').empty();
        for(var i=start;i<=end;i++){
            $('#number-container').append("<div class=\"col-sm-3 col-xs-4 text-center\">"+
            "<div class=\"number number-"+i+"\" onclick=\"openSoal("+i+")\"><span>"+i+"</span></div></div>");
        }
    }

    createNumber();
    
    $('#start').val(start);
    $('#end').val(end);
    $('#start').attr('disabled','disabled');
    $('#end').attr('disabled', 'disabled');

    $('#btn-setting').click(function(){
        $('#start').removeAttr('disabled');
        $('#end').removeAttr('disabled');
        $('#btn-save').css('display','block');
        $('#btn-setting').attr('disabled','disabled');
    });

    $('#btn-save').click(function(){
        var st = $('#start').val();
        var en = $('#end').val();
        long = (en - st)+1;

        if(long <= 0 || st < 0 || en <= 0){
            alert('Incorrect input!\nPlease input the correct value!');
            $('#start').val(start);
            $('#end').val(end);

            long = (end - start)+1;
        }else if(long > 100){
            alert('Range of number can\'t be more than 100!');
            $('#start').val(start);
            $('#end').val(end);

            long = (end - start)+1;
        }else{
            start = st;
            end = en;

            console.log(start+"-"+end);

            $('#start').attr('disabled','disabled');
            $('#end').attr('disabled','disabled');
            $('#btn-save').css('display','none');
            $('#btn-setting').removeAttr('disabled');

            createNumber();
        }
    });

    $('#btn-refresh').click(function(){
        var gg = confirm('Are you sure want to reset?');
        if(gg) createNumber();
    });
});


function openSoal(num){
    $('.number-'+num).addClass('number-open');
    $('.number-'+num).removeAttr('onclick');
    opened++;
    if(opened >= long){
        var complete = confirm("Complete !");
    }
}
