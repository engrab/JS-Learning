// Immediatly invoked function expression (IIFE) its used to prevent from global pollution

// two iife can be seprate from ;

(function chai(){
    // named iife
    console.log(`DB Connected`);
    
})();

((name) => {
    // arrow iife with argument
    console.log(`${name} Wellcome in coding with chai aur coding`);
    
})("Bilawal")