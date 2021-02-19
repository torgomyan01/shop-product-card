$('#formFileLg').on('change', function () {
    let file = $('#formFileLg').get(0).files[0];
    console.log(file);
    var reader = new FileReader();
    reader.onloadend = function () {
        $('.product-image').attr('src', reader.result);
        $('.prod-card').css('display', 'flex');
        $('.settings-card').css('display', 'block');
        startSetting();
    }
    reader.readAsDataURL(file);
})




function startSetting() {
    $('#product-name').on('keyup', function () {
        $('h1').text($(this).val());
    })


    $('#price').on('keyup', function () {
        $('h2').text($(this).val() + ' Դ․');
    })


    $('#old-price').on('keyup', function () {
        if ($(this).val() === '') {
            $('h3').text('');
        } else {
            $('h3').text($(this).val() + ' Դ․');
        }
    })
    $('#product-code').on('keyup', function(){
        $('.key-code').text($(this).val());
    })
    $('#textarea').on('keyup', function(){
        $('.text').text($(this).val());
    })

    $('#img-top-setting').on('change mousemove', function () {
        $('.product-image').css('top', `${ $(this).val() }px`);
    })
    

    $('#img-left-setting').on('change mousemove', function () {
        $('.product-image').css('left', `${ $(this).val() }px`);
    })

    $('#img-setting').on('change mousemove', function () {
        $('.product-image').css('width', `${ $(this).val() }px`);
    })

    $('#img-rotate-setting').on('change mousemove', function () {
        $('.product-image').css('transform', `rotate(${ $(this).val() }deg)`);
    })


    $('#save-image').on('click', function () {

        if($('#product-code').val() === ''){
            alert('Խնդրում ենք պրոդուկտի կոդը անպայման լրացրեք')
        }else{
            viewPage();
        }
        function viewPage() {
            view = window.open("", "view")
            view.document.open()
            view.document.write(`
                <link rel="stylesheet" href="css/style.css">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/jquery-3.4.1.min.js"></script>
                <script src="js/html2canvas.min.js"></script>
            `)
            view.document.write(document.getElementById('prod-card-to-saving').outerHTML + '<a href="" id="img-link"></a>')
            view.document.write(`
                <script>
                    html2canvas(document.querySelector('#prod-card-to-saving')).then(canvas => {
                        canvas.id = 'canv-is-dis-none';
                        document.body.appendChild(canvas);
                    });
                    setTimeout(()=>{
                        let canvas = document.getElementById('canv-is-dis-none')
                        var link = document.getElementById('img-link');
                        link.setAttribute('download', 'MintyPaper.png');
                        link.setAttribute('href', canvas.toDataURL('image/png').replace('image/png', 'imageoctet-stream'));
                        link.click();
                    },1000)
                </script>
                <style>
                    #canv-is-dis-none{
                        display: none;
                    }
                </style>
            `)
            view.document.close()
        }
        
    })
}