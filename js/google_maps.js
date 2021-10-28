let PseudoSelect = document.querySelector('.pseudo_select');
let PseudoOption = document.querySelector('.pseudo_option');

let OptionMarkerRoad = document.querySelector('.marker_road');
let OptionMarkerDanger = document.querySelector('.marker_danger');
let OptionMarkerTrash = document.querySelector('.marker_trash');
function ShowMarkers(){
    OptionMarkerRoad.classList.toggle('pseudo_option_markers_on');
    OptionMarkerDanger.classList.toggle('pseudo_option_markers_on');
    OptionMarkerTrash.classList.toggle('pseudo_option_markers_on');
}
PseudoSelect.addEventListener('mouseover', ()=>{
    PseudoSelect.style.width = '250px';
    PseudoSelect.style.borderRadius = '20px'
    PseudoSelect.style.backgroundPosition = '15px center';
    ShowMarkers();

    OptionMarkerRoad.addEventListener('click', ()=>{
        console.log(OptionMarkerRoad.alt);

    });
    OptionMarkerDanger.addEventListener('click', ()=>{
        console.log(OptionMarkerDanger.alt);

    });
    OptionMarkerTrash.addEventListener('click', ()=>{
        console.log(OptionMarkerDanger.alt);

    });
    
});

PseudoSelect.addEventListener('mouseout', ()=>{
    PseudoSelect.style.width = '60px';
    PseudoSelect.style.borderRadius = '50%'
    PseudoSelect.style.backgroundPosition = 'center center';
   
    ShowMarkers();
});


let MyMap;

function initMap(){
    let option = {
        zoom: 11.3,
        center: { lat: 51.1801, lng: 71.44598 },
        // mapTypeControl: false,
    };
    MyMap = new google.maps.Map(document.getElementById('map'),option);

    MyMap.addListener('click',(e)=>{
        AddMarker(e.latLng);

    })

    function AddMarker(position){
        let markers = new google.maps.Marker({
            position,
            map: MyMap,
        });
        
        let ContextMenu = document.querySelector('.context_menu');
        let ContextMenuClose = document.querySelector('.close_form_icon');
        google.maps.event.addListener(markers,'contextmenu',()=>{
            ContextMenu.classList.toggle('context_menu_on');
            if(ContextMenu.classList.contains('context_menu_on')){
                ContextMenuClose.addEventListener('click',()=>{
                    ContextMenu.classList.remove('context_menu_on');
                });
            };
        });
          
    };
}