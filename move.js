function move(element) {
    element.style.position = 'fixed'

     function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px';
        element.style.bottom = y + 'px';

        setInterval(function(){
            if(direction === 'west'){
                x = x - 1
            }
        
            if(direction === 'north'){
                y = y + 1
            }
        
            if(direction === 'east'){
                x = x + 1
            }
        
            if(direction === 'south'){
                y = y - 1
            }
            callback(direction)
        
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'a'){
                direction = 'west'
            }
            if(e.key === 'w'){
                direction = 'north'
            }
            if(e.key === 'd'){
                direction = 'east'
            }
            if(e.key === 's'){
                direction = 'south'
            }
        
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}