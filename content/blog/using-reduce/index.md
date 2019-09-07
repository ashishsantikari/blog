---
title: Using Reduce Method
date: "2017-12-22T18:35:32.169Z"
description: Using reduce method in javascript.
---

Hi Guys,

This is my first blog post. As I was unsure about what should I write about, here I am writing about my one of my favourite function, the reducer function.

At first, newbies may feel this is a big topic to cover or can be very trick to understand but it is not. In fact, it is very simple and you may be take maybe 5 minutes or less to understand its implementation in your code.

Lets say you need to write a program where you will be provided with an array of numbers and you need to print the squares of each of the numbers. I believe you may write the code which is similar to the code below, right?

<iframe width="100%" height="300" src="//jsfiddle.net/ashishsantikari/70b7y5xp/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Now, using the same logic, let’s rewrite the code using a reduce function.

<iframe width="100%" height="300" src="//jsfiddle.net/ashishsantikari/7vkd95kz/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Pretty easy to understand, right? Actually, it is!

Reducer takes a callback function as an argument which accepts two values : accumulator and the element. Accumulator, as the name suggests, accumulates the value after operating over each element. Operation is decided by you. I have used it to square the number in the above example. You can do almost anything if your logic has the condition to loop over the array.

Additionally, I have provided an empty array [] after the callback function. That is an optional argument, which is the initial value of the aggregator.

Compare the two programs below and let me know the difference!

<iframe width="100%" height="300" src="//jsfiddle.net/ashishsantikari/c87yh5eL/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<iframe width="100%" height="300" src="//jsfiddle.net/ashishsantikari/wv5pv6cw/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Hope you guys liked my first blog post! Thanks for reading!
