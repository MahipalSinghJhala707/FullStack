

// clousers

function greeting() {
    const msg ='hello world'
    return function () {
        console.log(msg)
    }
}

const fn = greeting();

// greeting();this won't run anything because it returns a function 
fn();
