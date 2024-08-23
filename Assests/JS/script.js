function loading() {
    return {
        pointers: document.querySelector('.pointer'),

        iniciar() {
            this.animaPointer();
        },


        animaPointer() {
            const array = this.pointers.split(' ');
            for (let i = 0; i < array.legnth; i++) {
                
            }
        },

    };
};

const carregar = loading();
carregar.iniciar();

// function loading() {
//     return {
//         text: '.',

//         iniciar() {
//             this.animaPointer();
//         },

//         animaPointer() {
//             const array = this.text.split(' ');
//             console.log(array);

//             setTimeout(function () {
//                 while (array.length === 0) {
//                     array.push('.');
//                     console.log(array);
//                 }
//             }, 1000)
//             setTimeout(function () {
//                 while (array.length === 1) {
//                     array.push('.');
//                     console.log(array);
//                 }
//             }, 2000)
//             setTimeout(function () {
//                 while (array.length === 2) {
//                     array.push('.');
//                     console.log(array);
//                 }
//             }, 3000)



//         }
//     }
// };

// const carregar = loading();
// carregar.iniciar();