## Yet Another Simple Event Calendar

https://github.com/improper/mediawiki-extensions-yasec

Outputs a tabular calendar filled with events automatically generated
from page titles in a certain namespace. Based on the [intersection extension][1]
and the [FullCalendar jQuery plugin][2].

Demo: [FoodHackingBase Events][3]

### Usage

EventCalendar expects page titles in the following format in a certain
namespace:

    yyyy/mm/dd Event Title

for example

    Event:2014/02/14_Synchronous_Hackathon

Multi-day events can be created by setting up consecutive dates with the
same title, like

    Event:2014/02/14_Synchronous_Hackathon
    Event:2014/02/15_Synchronous_Hackathon
    Event:2014/02/16_Synchronous_Hackathon

where the second and following pages will usually redirect to the first.

To install, add following to LocalSettings.php

    include("$IP/extensions/yasec/EventCalendar.php");

Typical invocation on a page:

    <EventCalendar>
    namespace = Event
    aspectratio = 1.35
    </EventCalendar>

`aspectratio` is optional and defaults to 1.6. CSS `max-width` is set to
800px and can be overridden in `MediaWiki:Common.css`.

### Requirements

* MediaWiki 1.22 (will probably work with other versions, comments
  appreciated)
* MySQL (see #1)

### Installation

1. Deploy the files to `extensions/yasec`.
2. Setup your namespace in `LocalSettings.php`:

       $wgExtraNamespaces = array(
           100 => "Event",
           101 => "Event_talk",
       );
       $wgNamespacesToBeSearchedDefault = array(
           NS_MAIN => true,
           100     => true,
       );

3. For testing you might want to disable the cache, also in
   `LocalSettings.php`:

       // How long to cache pages using DPL's in seconds. Default to 1 day. Set to
       // false to not decrease cache time (most efficient), Set to 0 to disable
       // cache altogether (inefficient, but results will never be outdated)
       $wgECMaxCacheTime = 60*60*24;          // How long to cache pages

  [1]: http://www.mediawiki.org/wiki/Extension:DynamicPageList_(Wikimedia)
  [2]: http://arshaw.com/fullcalendar/
  [3]: https://foodhackingbase.org/wiki/Events
