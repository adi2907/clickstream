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
    
    // create a epoch timestamp
    var timestamp = Math.floor(Date.now() / 1000);

    
    // get user agent
    var userAgent = navigator.userAgent;
    // get browswer
    var browser = navigator.appName;
    // get browser version
    var browserVersion = navigator.appVersion;
    // get OS
    var OS = navigator.platform;
    var event_type = 'click';
    var event_name = '';
    // get the element text that was clicked
    var element_text = event.target.innerText;
    // get the url
    var url = window.location.href;

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
        'click_text': element_text,
        'event_type': event_type,
        'event_name': event_name,
        'source_url': url
    };
    // Intiailize events array if not already done
    events = JSON.parse(localStorage.getItem("events") || "[]");
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));
    
    // send event to server in gap of 10 seconds
    setTimeout(function() {
        var events = localStorage.getItem('events');
        if (events) {
            events = JSON.parse(events);
            console.log(events);
            localStorage.removeItem('events');
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://3.110.173.23/events/', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(events));
        }
    },10000);
});



// capture  page load events
document.addEventListener('DOMContentLoaded', function(event) {    
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
    
    // create a epoch timestamp
    var timestamp = Math.floor(Date.now() / 1000);

    
    // get user agent
    var userAgent = navigator.userAgent;
    // get browswer
    var browser = navigator.appName;
    // get browser version
    var browserVersion = navigator.appVersion;
    // get OS
    var OS = navigator.platform;
    var event_type = 'page_load';
    var event_name = 'page_load';
    // get the element text that was clicked
    var element_text = event.target.innerText;
    // get the url
    var url = window.location.href;

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
        'click_text': element_text,
        'event_type': event_type,
        'event_name': event_name,
        'source_url': url
    };
    // Intiailize events array if not already done
    events = JSON.parse(localStorage.getItem("events") || "[]");
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));
    
    // send event to server in gap of 10 seconds
    setTimeout(function() {
        var events = localStorage.getItem('events');
        if (events) {
            events = JSON.parse(events);
            console.log(events);
            localStorage.removeItem('events');
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://3.110.173.23/events/', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(events));
        }
    },10000);
});

