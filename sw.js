//////////////////////// [SERVICE WORKER FETCH EVENT] //////////////////////////

// self.addEventListener('fetch',(e)=>{

//     // This blocks the css style sheet
//     // if(e.request.url.includes('style.css')){
//     //     e.respondWith(null);
//     // }else{
//     //     e.respondWith(fetch(e.request));
//     // }

//     if(e.request.url.includes('.jpg')){
//         console.log(e.request.url);

//         let picRequest = fetch(e.request.url);

//         e.respondWith(picRequest);
//     }
    
// });


//////////////////////////// [INTERCEPT SERVICE WORKER] ///////////////////////
// self.addEventListener('fetch',e=>{
//     if(e.request.url.includes('style.css')){
//         let response = new Response(`
//             body{
//                 background-color:red !important;
//                 color:white;
//             }
//         `,{
//             headers:{
//                 'Content-Type':'text/css'
//             }
//         });

//         e.respondWith(response);
//     }
// });

/////////////////////////////// [INTERCEPT SERVICE WORKERS] ////////////////
// self.addEventListener('fetch',e=>{
//     if(e.request.url.includes('main.jpg')){
//         e.respondWith(fetch('img/main-patas-arriba.jpg'));
//     }
// })

self.addEventListener('fetch',e=>{
    
    e.respondWith(
        fetch(e.request).then(response=>{
            if(response.ok){
                return response
            }else{
                return fetch('img/main.jpg')
            }
        })
    );
});