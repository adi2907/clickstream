//capture events and log them to the console


// capture click events in the page
document.addEventListener('click', function(event) {
    
    // create a token identifier for this session and store in browser local storage
    var token = localStorage.getItem('token');
    if (!token) {
        token = Math.random().toString(36).substring(2);
        localStorage.setItem('token', token);
    }

    // create a session identifier for this session and remove it after 30 minutes
    var session = localStorage.getItem('session');
    if (!session) {
        session = Math.random().toString(36).substring(2);
        localStorage.setItem('session', session);
        setTimeout(function() {
            localStorage.removeItem('session');
        }, 30 * 60 * 1000);
    }

    var current_user = user_var.current_user;
    var user_login = current_user.data.user_login;
    var user_id = current_user.ID;
    var user_regd = current_user.data.user_registered;
    
    // create a UTC timestamp in GMT
    var timestamp = new Date().toUTCString();
    
    // get user agent
    var userAgent = navigator.userAgent;
    // get browswer
    var browser = navigator.appName;
    // get browser version
    var browserVersion = navigator.appVersion;
    // get OS
    var OS = navigator.platform;
    var event_type = 'click';

    // push the event to a stack
    var event = {
        'token': token,
        'session': session,
        'user_login': user_login,
        'user_id': user_id,
        'user_regd': user_regd,
        'click_time': timestamp,
        'userAgent': userAgent,
        'browser': browser,
        'browserVersion': browserVersion,
        'OS': OS,
        'event_type': event_type
    };
    var events = localStorage.getItem('events');
    if (!events) {
        events = [];
    } else {
        events = JSON.parse(events);
    }
    events.push(event);
    // console log the event, time, url and text
    //console.log(event_type,user_id,user_login,user_regd,event.target, timestamp, window.location.href, event.target.innerText, token, session, browser, browserVersion, OS);

}, true);

// capture click events in the page
document.addEventListener('load', function(event) {
    
    // create a token identifier for this session and store in browser local storage
    var token = localStorage.getItem('token');
    if (!token) {
        token = Math.random().toString(36).substring(2);
        localStorage.setItem('token', token);
    }

    // create a session identifier for this session and remove it after 30 minutes
    var session = localStorage.getItem('session');
    if (!session) {
        session = Math.random().toString(36).substring(2);
        localStorage.setItem('session', session);
        setTimeout(function() {
            localStorage.removeItem('session');
        }, 30 * 60 * 1000);
    }

    var current_user = user_var.current_user;
    var user_login = current_user.data.user_login;
    var user_id = current_user.ID;
    var user_regd = current_user.data.user_registered;
    
    // create a UTC timestamp in GMT
    var timestamp = new Date().toUTCString();
    // get user agent
    var userAgent = navigator.userAgent;
    // get browswer
    var browser = navigator.appName;
    // get browser version
    var browserVersion = navigator.appVersion;
    // get OS
    var OS = navigator.platform;
    var event_type = 'load';

    // push the event to a stack
    var event = {
        'token': token,
        'session': session,
        'user_login': user_login,
        'user_id': user_id,
        'user_regd': user_regd,
        'click_time': timestamp,
        'userAgent': userAgent,
        'browser': browser,
        'browserVersion': browserVersion,
        'OS': OS,
        'event_type': event_type
    };
    var events = localStorage.getItem('events');
    if (!events) {
        events = [];
    } else {
        events = JSON.parse(events);
    }
    events.push(event);
}, true);

// send events to server every 10 seconds through Ajax
setInterval(function() {
    var events = localStorage.getItem('events');
    if (!events) {
        return;
    }
    events = JSON.parse(events);
    localStorage.removeItem('events');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/events', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(events));
}  , 10000);

