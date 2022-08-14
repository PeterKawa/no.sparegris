# Piggy Bank
https://homey.app/no-no/app/no.sparegris/PiggyBank/

Save money by controling when to use electricity

New features I want input from others before I do anything:
* Should I add a blocker that prevents signalling that we are out of power within the x first minutes?
* Should I add a new controller option that leaves devices in the state they are with the only option to turn them off in the event the app does not have any other devices to turn off to get below the power limit? (or is it sufficient that this can be done outside of the app with a flow right now?)
* Should I add an action when the power tariff is once again within reach after a manual powerdown has been signaled?

TODO list:
* Use the devices default setpoint temperatures when creating the device list for the first time. Water heaters get way too low temp as default.
* Add number of cheap/expensive/normal hours to the device capability list
* Add calculation of what is best, higher tariff or money saved by moving electricity between price points
* Remove public API for refreshing devices. Use settings instead.
* Check if webhooks can be used for inter-app comunication when permissions has not been set up. (need a way to communicate with the
  høiax app without adding permissions as this will result in some users not getting automatic updates any more).

=== ISSUES I DO NOT KNOW ANY WAY TO RESOLVE ===
* Old capabilities are not deleted from the statistics section (insights) when they are deleted, and the homey web api does not give the app
  permission to delete it. Thus the only way to delete deprecated statistics is to manually do this with the web api playground or by deleting the device and reinstalling it. I do not know why Athom is this restrictive but I am sorry I cannot clean up the mess.