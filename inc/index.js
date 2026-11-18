function switchMode(bgColor)
{
    //console.log('bgColor '+bgColor);

    localStorage.setItem('background', bgColor);
    document.body.style.backgroundColor = bgColor;

    if(bgColor === 'black')
    {
        document.body.style.color = 'white';
        document.getElementById(bgColor).innerHTML = 'mode(DAY)';
        document.getElementById(bgColor).id = 'white';

    }else{

        document.body.style.color = 'black';
        document.getElementById(bgColor).innerHTML = 'mode(NIGHT)';
        document.getElementById(bgColor).id = 'black';
    }

    console.log('bgColor '+localStorage.getItem('background'));
}

function switchModeFromLS(bgColor)
{

    document.body.style.backgroundColor = bgColor;

    if(bgColor === 'black'){

        document.body.style.color = 'white';
        document.getElementById('white').innerHTML = 'mode(DAY)';
        //document.getElementById('white').id = 'white';

    }else{

        document.body.style.color = 'black';
        document.getElementById('black').innerHTML = 'mode(NIGHT)';
    }

    console.log('bgColor '+localStorage.getItem('background'));
}
