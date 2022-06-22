function WeeksAndDays(weeks, days, post, emoji, reflections) {
  this.weeks = weeks;
  this.days = days;
  this.post = post;
  this.emoji = emoji;
  this.reflections = reflections;
}

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "W-end"];

let weekNumbers = [];
for (let i = 1; i < 17; i++) {
  weekNumbers.push("Week" + i);
}

let emptyArray = [];
for (let j = 0; j < weekNumbers.length; j++) {
  for (let k = 0; k < daysOfWeek.length; k++) {
    emptyArray.push(
      new WeeksAndDays(weekNumbers[j], daysOfWeek[k], "", "", "")
    );
  }
}
console.log(emptyArray);

export default emptyArray;

// // const emptyArray = [
// //   {
// //     week: "week1",
// //     day: "Mon",
// //     post: "Test data",
// //     emoji: "happy",
// //     reflections: "test ref 1",
// //   },
// //   {
// //     week: "week1",
// //     day: "Tue",
// //     post: "",
// //     emoji: "",
// //     reflections: "",
// //   },
// //   {
// //     week: "week16",
// //     day: "Thu",
// //     post: "Test data 3",
// //     emoji: "sad",
// //     reflections: "test ref 3",
// //   },
// // ];

// export default notesSampledata;
