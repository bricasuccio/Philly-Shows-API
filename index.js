$(function () {

        $.ajax({
            url: "http://api.jambase.com/events?zipCode=19129&radius=50&page=0&api_key=a25ftqk3veqmjrznzjvanjxw",
            dataType: 'json',
            type: 'GET',
            success: function (events) {
                get(events);
                get(artists);

            }

        });


        function get(events) {
            for (var i=0; i<events.Events.length;i++) {
              var show = events.Events[i];
              var artists = show.Artists;
              for (var j=0; j<artists.length;j++){
                var artist = artists[j];

                $('.output').append(

                '<div class="wrapper"><div class="date">' + show.Date +
                '</div><div class="artist">' + artist.Name +
                '</div><div class="venue"><img src="images/venue-icon.png" alt="venue-icon" width="15px" height="auto">' +
                show.Venue.Name + '</div>' +
                '<a href='+ show.TicketURL +'><button class="button dark center">Get Tickets</button></a>'
                );
              }
            }


        }
});
