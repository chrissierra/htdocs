self.addEventListener('push', function (event) {
    var payload = event.data ? JSON.parse(event.data.text()) : 'no payload'; 
    var title = 'Progressive Times';
    event.waitUntil(
    self.registration.showNotification(title, { 
    body: payload.msg,
    url: payload.url,
    icon: payload.icon,
    badge: 'https://cdn.iconsflow.com/L9pjckVv9UfgIG8SrUfRhDQPQ8KkbCankDQyhxQHMTIwODQ2.png',
    actions: [
        { action: 'voteup', title: '𑠀 Vote Up' }, 
        { action: 'votedown', title: '𑠀 Vote Down' }],
        vibrate: [300, 100, 400] 
    })
    );
   });