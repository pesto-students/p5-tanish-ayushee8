3.3

Output is "Count is 0";
Although increment() is called 3 times which made the count to 3 but the variable message exists in createIncrement() so the count holds the value of 0. function log() forms closure with createIncrement(), thus value of count is logged as 0;