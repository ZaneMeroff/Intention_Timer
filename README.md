# Intention Timer  
This was our first paired project at Turing. We started the project on 10/07/19 and finished it on 10/16/19. In total we spent about 20 hours building it. We enjoyed building this app out and giving it our own small pieces of flair. Creating the countdown timer was the most difficult part of the project. We spent about eight hours creating the timer and went through three different variations before we had success. Our timer input will convert 60+ seconds to the appropriate amount of minutes as well as formatting the time correctly, even when the user adds too many zeros. We successfully completed through iteration 3.

### Project Summary
This project was a timer that allowed the user to choose one of three categories that lit up when selected. The user then described their goal for the time period and the specific amount of minutes/seconds they wished to time. When submitted, they will see a color-coordinated timer appear that will count down. The user can then log their activity on a card in the right column and start a new activity which can be logged.

### Iteration 0 - Zero State

* Build the layout with HTML & CSS

* Before moving on, the header and left side of the page should match the comp.

* The right side of the page should only have the sub-header and not that no activities exist since you do not have past activity card functionality yet!

### Iteration 1 - Form Functionality

* When an activity category is clicked on (Exercise, Meditate, or Study), the associated border and icon should change colors to give a visual indication that it has been selected. Colors are provided in comp.

* An input field should be provided for What would you like to accomplish during this time?, minutes and seconds. The minutes and seconds fields should only accept numbers. (Hint: more than one layer should probably be put into place to ensure this. Make sure that e cannot be accepted.)

* A Start Activity button is provided to submit the data entered into the form. When the button is clicked, the user should no longer see the form, and instead see a timer clock. The timer clock should display the minutes a seconds, as well the and description. The category should not appear, but the outline of the circle should match the color associated with the category.

* If the Start Activity button is clicked before the user has entered information into all four inputs, the user will receive an error message, but will not lose any information that was provided.

### Iteration 2 - Build an MVP

* The user can start the time by clicking Start.

* While timer is running, the user should see it count down by second.

* When the timer completes, an alert should appear in the browser, letting the user know that the time is up. (This alert is temporary and is not something we suggest using in a fully built out application.)

### Iteration 3 - Logging Past Activities

* When the timer completes, the alert no longer appears.

* Instead, a motivational or congratulatory message appears on the left side of the page, replacing the timer.

* When the user acknowledges the message and completion of the activity by clicking Log Activity, a card with the category, time, and the users input for What would you like to accomplish during this time? should appear on the card. The card should also have a small color-coded visual indicator of the category. Color, size, and spacing of that visual indicator are provided in comp.

* Before moving on, your past activity cards should match the comp.

## Original Comp

![original comp](https://frontend.turing.io/projects/module-1/assets/intention-timer/full-functionality-desktop.png)

![original comp](https://frontend.turing.io/projects/module-1/assets/intention-timer/complete-timer-desktop.png)

## Our App

![our project comp](https://user-images.githubusercontent.com/53405028/66969866-8fa86480-f048-11e9-961d-78230a95b440.png)

![our project comp](https://user-images.githubusercontent.com/53405028/66969930-c2525d00-f048-11e9-83cc-7fc5993f5a06.png)
