//wait unti dom has finished loading
window.onload = () => {
    let classes = (classes) => {
        return document.getElementsByClassName(classes);
    }

    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let form = document.getElementById('form')

    let errorMsg = classes("error");
    let successIcon = classes("success-icon");
    let failureIcon = classes("failure-icon");


    //validate inputs
    const validateInput = () => {
        const usernameVal = username.value.trim();
        const emailVal = email.value.trim();
        const passwordVal = password.value.trim();


        // const emailVal = email.value.trim();
        // const passwordVal = password.value.trim();

        if (usernameVal === '') {
            setError(username, 0, 'username is required')
        } else if (usernameVal.length < 5) {
            setError(username, 0, 'username must be greater than 5 characters')
        }
        if (emailVal === '') {
            setError(email, 1, 'email is required')
        }

        if (passwordVal === '') {
            setError(password, 2, 'password is required')
        }



    }

    username.addEventListener('blur', () => {
        const usernameVal = username.value.trim();
        if (usernameVal.length >= 5) {
            setSuccess(username, 0);
        }
    })
    email.addEventListener('blur', () => {
        const emailVal = email.value.trim();
        if (emailVal.length > 5) {
            setSuccess(email, 1);
        }
    })
    password.addEventListener('blur', () => {
        const passwordVal = password.value.trim();
        if (passwordVal.length > 5) {
            setSuccess(password, 2);
        }
    })

    form.addEventListener("submit", (e) => {
        //prevents the default action which is submitting the form. when there is an error
        e.preventDefault();
        validateInput();

    });

    //create errors
    const setError = (element, classNum, message) => {
        // const parentOfEl = element.parentElement;
        // const failureIcon = document.querySelector('.failure-icon');
        // console.log('look here', failureIcon)
        errorMsg[classNum].innerText = message;
        failureIcon[classNum].style.visibility = 'visible';
    }

    // create success
    const setSuccess = (element, classNum) => {
        // const successIcon = document.querySelector('.success-icon');
        successIcon[classNum].style.visibility = 'visible'
    }







    // //validation
    // let engine = (id, serial, message) => {

    //     if (id.value.trim() === "") {
    //         errorMsg[serial].innerHTML = message;
    //         id.style.border = "2px solid red";

    //         // icons
    //         failureIcon[serial].style.opacity = "1";
    //         successIcon[serial].style.opacity = "0";
    //     }

    //     else {
    //         errorMsg[serial].innerHTML = "";
    //         id.style.border = "2px solid green";

    //         // icons
    //         failureIcon[serial].style.opacity = "0";
    //         successIcon[serial].style.opacity = "1";
    //     }
    // }
}
