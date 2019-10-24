/* Tugas 22 Javascript */
// Muhammad Rizwan

function tugasDuapuluhDua(){
    var kalimat = "Saya ingin belajar bersama";
    var rubah = kalimat.split(" ");

    rubah.forEach(function(value, index){
        console.log('Item :', value, 'Index ke', index)
    });
}

tugasDuapuluhDua();