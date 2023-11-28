// to do: handle case when user changes his mind
import './index.css';
import { container } from "../main";

export default function sixBoxColorApp() {
    const listOrder = <any>[];
    let counter = 0;

    // create wrapper app
    const main = document.createElement('div');
    main.classList.add('six_box_color_app');

    container?.appendChild(main);
    
    // create boxes
    for (let i = 0; i < 6; i++) {
        const box = document.createElement('div');
        box.addEventListener('click', changeBoxColor)
        main.appendChild(box);
    }
    
    Array.from(main.children).forEach(el => {
        el.classList.add('box');
    })
    
    function changeBoxColor(el: any) {
        const elClassList = el.target.classList;
    
        if (elClassList.contains('green')) {
            elClassList.remove('green');
            counter--;
        } else {
            elClassList.add('green');
            listOrder.push(el.target);
            counter++;

            if (counter === 6) {
                initiateReverse()
            }
        }
    }
    
    function initiateReverse() {
        console.log('sa facut 6');
        listOrder.reverse();
        
        listOrder.forEach((el: any, idx: number) => {
            setTimeout(() => {
                el.classList.remove('green');
            }, idx * 1000 + 1000)
        })
    
        counter = 0;
    }
}
