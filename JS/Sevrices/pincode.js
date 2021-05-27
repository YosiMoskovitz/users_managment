import { login } from "../App/model.js";

function init(uname) {
    return new Promise((resolve, reject) => {

        var input = '',
            counter = 0,
            inputCheckRes = null,
            timer = null;
        var dots = document.querySelectorAll('.dot'),
            numbers = document.querySelectorAll('.number');
        dots = Array.prototype.slice.call(dots);
        numbers = Array.prototype.slice.call(numbers);
        numbers.forEach(function (number, index) {
            number.addEventListener('click', async function () {
                if (index == 9) input += 0;
                else input += index + 1;
                let res = await inputCheck(uname);
                if (res != null) {
                    console.log(res)
                    inputCheckRes = res
                    resolve(inputCheckRes);
                }
            });
        });

        $(window).on("keypress", keypress);

        async function keypress (e) {
            if (e.key >= 0 && e.key <= 9 && e.key != ' ') {
                let key = null;
                if (e.key == 0) key = 9;
                else key = e.key - 1;
                numbers[key].className += ' numberHover';
                setTimeout(function () {
                    numbers[key].className = 'number';
                }, 200);
                input += e.key;
                let res = await inputCheck(uname);
                if (res != null) {
                    console.log(res)
                    inputCheckRes = res
                    resolve(inputCheckRes);
                }
            }
        };


        async function inputCheck(uname) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                $(".dot").removeClass('active wrong');
                input = '';
            }, 5000);
            dots[input.length - 1].className += ' active';
            if (input.length == 4) {
                var res = await login(uname, input);
                if (!res) {
                    $(".dot").addClass('wrong')
                    setTimeout(function () {
                        $(".dot").removeClass('active wrong');
                        input = '';
                        $(window).off("keypress", keypress); 
                    }, 200);
                    if (counter <= 3) {
                        counter++;
                        
                    }
                    else {
                        busted()
                    }
                }
                else {
                    return res;
                }
            }
            return inputCheckRes;
        }
    });


}
function busted() {
    var audio = new Audio('./media/INCEPTION_SOUND.mp3');
    $('#pin').hide();
    $('body').css({
        "margin": "0",
        "padding": "0"
    });
    $(`<div class="busted"><img src="./media/busted.jpeg" style="height: 100vh;width: 100vw;"></div>`).appendTo(".main");
    audio.play();
}


export { init };