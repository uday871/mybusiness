if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/mybusiness/sw.js', { scope: '/mybusiness/' })})}