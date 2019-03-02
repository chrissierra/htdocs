self.addEventListener("fetch", event=>{
 event.respondWith(stremeando());
});


function stremeando(){
    const html= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos libero sit natus dolores doloribus temporibus harum ullam optio dignissimos, quo, nam obcaecati? Sed nobis explicabo, non dignissimos odio exercitationem itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos libero sit natus dolores doloribus temporibus harum ullam optio dignissimos, quo, nam obcaecati? Sed nobis explicabo, non dignissimos odio exercitationem itaque."

    const stream= new ReadableStream({
        start: controller =>{
            const encoder= new TextEncoder();
            let pos=0;
            let chunkSize=1;

            function push(){
                if(pos>= html.length){
                    controller.close();
                    return;
                }

                controller.enqueue(encoder.encode(html.slice(pos, pos + chunkSize)));
                pos += chunkSize;
                setTimeout(push, 3000);
            }
            push();
        }
    })

    return new Response(stream, {
        headers: {
            'Cintent-Type': 'text/html'
        }
    })
}