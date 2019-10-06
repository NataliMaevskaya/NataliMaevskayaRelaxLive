const accordionQuestion = () => {
    const accordion = document.querySelector('.accordion'),
        titleBlocks = document.querySelectorAll('.title_block');
    
    accordion.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.title_block')){
            titleBlocks.forEach((item) => {
                if (item.classList.contains('msg-active')) {
                    item.classList.remove('msg-active');
                }            
            });
            target.classList.add('msg-active');
        }
        
        
    });
};

export default accordionQuestion;