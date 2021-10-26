const logo = document.querySelectorAll('#logo_spinner path');

console.log('e', logo.length)


for(let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

