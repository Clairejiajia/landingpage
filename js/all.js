// 驗證
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$(document).ready(function () {
    $('a[data-dismiss="modal"][data-toggle="modal"]').on('click', function () {
        console.log('click');
        var target = $(this).data('target');
        console.log('target', target);
        $(target).on('shown.bs.modal', function () {
            $('body').addClass('modal-open')
        });
    });
});