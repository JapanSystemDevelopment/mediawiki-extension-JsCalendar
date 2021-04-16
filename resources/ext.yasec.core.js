jQuery( document ).ready( function( $ ) {
    if ( typeof window.eventCalendarData === 'object' ) {
        for ( var i = 0; i < window.eventCalendarData.length; i++ ) {
            // render calendar
            $( "#eventcalendar-" + ( i + 1 )).fullCalendar({
                lang: "ja",
                dayClick: function(dt, jsEvent, view) {
                    // XXX: WTF!?
                    var pathname = "/mediawiki/index.php?title=問合せ対応カレンダー/" + dt.format("YYYY-MM-DD") + "&action=edit";
                    location.href = pathname;
                },
                aspectRatio: window.eventCalendarAspectRatio[i],
                events: window.eventCalendarData[i]
            });

            // FIXME sometimes init is called too early, it seems, so rerender to be sure
            ( function( i ) {
                window.setTimeout( function() { 
                    $( "#eventcalendar-" + ( i + 1 )).fullCalendar( 'render' );
                }, 0 );
            })( i );
        }
    }
});
