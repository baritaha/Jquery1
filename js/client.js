/********************************************client Side vlidtion script************************************* */
$(document).ready(function() {
    const validateUsername = () => {
        const username = $('#username').val();
        const usernameIcon = $('#username-icon');
        const usernameError = $('#username-error');
        if (username.length >= 3) {
            $('#username').removeClass('invalid').addClass('valid');
            usernameIcon.removeClass('invalid').addClass('valid');
            usernameError.hide();
            return true;
        } else {
            $('#username').removeClass('valid').addClass('invalid');
            usernameIcon.removeClass('valid').addClass('invalid');
            usernameError.show();
            return false;
        }
    };

    const validateEmail = () => {
        const email = $('#email').val();
        const emailIcon = $('#email-icon');
        const emailError = $('#email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            $('#email').removeClass('invalid').addClass('valid');
            emailIcon.removeClass('invalid').addClass('valid');
            emailError.hide();
            return true;
        } else {
            $('#email').removeClass('valid').addClass('invalid');
            emailIcon.removeClass('valid').addClass('invalid');
            emailError.show();
            return false;
        }
    };

    const validatePassword = () => {
        const password = $('#password').val();
        const passwordIcon = $('#password-icon');
        const passwordError = $('#password-error');
        if (password.length >= 6) {
            $('#password').removeClass('invalid').addClass('valid');
            passwordIcon.removeClass('invalid').addClass('valid');
            passwordError.hide();
            return true;
        } else {
            $('#password').removeClass('valid').addClass('invalid');
            passwordIcon.removeClass('valid').addClass('invalid');
            passwordError.show();
            return false;
        }
    };

    const validateRepeatPassword = () => {
        const password = $('#password').val();
        const repeatPassword = $('#repeat-password').val();
        const repeatPasswordIcon = $('#repeat-password-icon');
        const repeatPasswordError = $('#repeat-password-error');
        if (repeatPassword === password && repeatPassword.length >= 6) {
            $('#repeat-password').removeClass('invalid').addClass('valid');
            repeatPasswordIcon.removeClass('invalid').addClass('valid');
            repeatPasswordError.hide();
            return true;
        } else {
            $('#repeat-password').removeClass('valid').addClass('invalid');
            repeatPasswordIcon.removeClass('valid').addClass('invalid');
            repeatPasswordError.show();
            return false;
        }
    };

    $('#username').on('input', validateUsername);
    $('#email').on('input', validateEmail);
    $('#password').on('input', validatePassword);
    $('#repeat-password').on('input', validateRepeatPassword);

    $('#client-form').on('submit', function(event) {
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isRepeatPasswordValid = validateRepeatPassword();

        if (!isUsernameValid || !isEmailValid || !isPasswordValid || !isRepeatPasswordValid) {
            event.preventDefault();
        }
        else {
            event.preventDefault();
            const username = $('#username').val();
            
            showToast(`Welcome ${username}, created account successfully.`);
            $('#username').val()='';
        }
    });

    function showToast(message) {
        const toastContainer = $('#toast-container');
        const toast = $('<div class="toast"></div>').text(message);
        toastContainer.append(toast);
        toast.addClass('show');
        setTimeout(() => {
            toast.removeClass('show');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
    }
    // Initially hide all error messages
    $('.error-message').hide();
});

/*$(document).ready(function(){

    const validateUsername = () =>{
        const username = $('#username').val();
       const usernameIcon=$('#username-icon');
       const usernameError=$('#username-error');

        if(username.length >= 3){
            $('#username').removeClass('invalid').addClass('valid');
            usernameIcon.removeClass('invalid').addClass('valid');
            usernameError.hide();
            return true;
        }
        else{
            $('#username').removeClass('valid').addClass('invalid');
            usernameIcon.removeClass('valid').addClass('invalid');
            usernameError.show();
            return false;
        }

    };

    const validateEmail = () =>{
        const email = $('#email').val();
        const emailIcon=$('#email-icon');
        const emailError = $('#email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailPattern.test(email)){
            $('#email').removeClass('invalid').addClass('valid');
            emailIcon.removeClass('invalid').addClass('valid');
            emailError.hide();
            return true;
        }
        else{
            $('#email').removeClass('valid').addClass('invalid');
            emailIcon.removeClass('valid').addClass('invalid');
            emailError.show();

            return false;
        }
    };

    const validatePassword = () =>{
        const password = $('#password').val();
        const passwordIcon = $('#password-icon');
        const passwordError = $('#password-error');
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if(passwordPattern.test(password)){
    $('#password').removeClass('invalid').addClass('valid');
    passwordIcon.removeClass('invalid').addClass('valid');
    passwordError.hide();
    return true;
    }
    else{
        $('#password').removeClass('valid').addClass('invalid');
        passwordIcon.removeClass('valid').addClass('invalid');
        passwordError.show();
        return false;
    }
}

const validateRepeatPassword = () =>{
    const password = $('#password').val();
    const repeatPassword = $('#repeat-password').val();
    const passwordIcon = $('#repeat-password-icon');
    const repeatPasswordError = $('#repeat-password-error');
    if(password === repeatPassword){
        $('#repeat-password').removeClass('invalid').addClass('valid');
        passwordIcon.removeClass('invalid').addClass('valid');
        repeatPasswordError.hide();
        return true;
    }
    else{
        $('#repeat-password').removeClass('valid').addClass('invalid');
        passwordIcon.removeClass('valid').addClass('invalid');
        repeatPasswordError.show();
        return false;
    }
}


        $('#username').on('input',validateUsername);
        $('#email').on('input',validateEmail);
        $('#password').on('input',validatePassword);
        $('#repeat-password').on('input',validateRepeatPassword);

        $('#client-form').on('submit', function(event){
            const isUsernameValid = validateUsername();
            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();
            const isRepeatPasswordValid = validateRepeatPassword();

            if(!isUsernameValid || !isEmailValid || !isPasswordValid || !isRepeatPasswordValid){
                event.preventDefault();
            }
            else{
                event.preventDefault();
                const username = $('#username').val();
                showToast(`Welcome <span style="font-weight:600;color:red">${username}</span> , your Account Create successfully`);
            }

        });
        function showToast(message){
            const toastContainer = $('#toast-container');
            const toast = $('<div class="toast"></div>').html(message);
            toastContainer.append(toast);
            toast.addClass('show');
            setTimeout(() => {
                toast.removeClass('show');
                setTimeout(() => {
                    toast.remove();
                }, 500);
            }, 3000);
        }
        // Initially hide all error messages
        $('.error-message').hide();
        

});*/