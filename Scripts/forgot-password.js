﻿$(function () {
    var pwdLinkHover = $('#pwdLink').hover(onCloseLogin);
    var resetPwd = $('#resetPwd').click(onResetPassword);

    function onCloseLogin() {
        $('div[data-login-user-panel-area]').removeClass('open');
    }

    function onResetPassword() {
        var email = $('.modal-dialog .reset-email').val();
        var antiforgery = $('[name="__RequestVerificationToken"]').val();
        var url = "/Account/ForgotPasswordConfirmation";

        // alert(email + " " + antiforgery + " " + url)

        $.post("/Account/ForgotPassword",  {
            __RequestVerificationToken: antiforgery, email: email
        }, function (data) {
            location.href = url;
        }).fail(function (xhr, status, error) {
            location.href = url;
        });
    }
});