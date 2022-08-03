const accordion = document.querySelectorAll('.accordion_item')

for(item of accordion) {
    item.addEventListener('click', function () {
        if(this.classList.contains('active')) {
            this.classList.remove('active')
        }
        else{
            for(i of accordion) {
                i.classList.remove('active')}
            this.classList.toggle('active')}
    })
}