//Get element from document
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//
const tabs = $$('.tab-item');
const panels = $$('.panel-item');

const tabActive = $('.tab-item.active');
const line = $('.line');
//set lại css
line.style.width = tabActive.offsetWidth + 'px';
line.style.left = tabActive.offsetLeft + 'px';

//Bắt sự kiện nhấn vào tab-item
tabs.forEach(function(tab, index) {
    tab.onclick = function(){
        //Khi trả về index của tab, lấy index hiển thị panel tương ứng
        const panel = panels[index]
        //Khi click vào các tab sẽ xóa thuộc tính active đã có
        $('.tab-item.active').classList.remove('active');
        $('.panel-item.active').classList.remove('active');
        //Khi click vào các tab sẽ thêm thuộc tính active
        tab.classList.add("active");
        panel.classList.add("active");
        //Khi click vào các tab sẽ thay đổi vị trí của thanh line
        line.style.width = tab.offsetWidth + 'px';
        line.style.left = tab.offsetLeft + 'px';
    }
})