#

https://github.com/Gravity-Well/DisplayAnImageFromS3inHTML

## Installation

npm i

# Usage

```java
node index.js
```

Output:

```java
{
"message":
"There were 2 validation errors:\n* UriParameterError: Expected uri parameter to have length >= 1, but found \"\" for params.Bucket\n*

UriParameterError: Expected uri parameter to have length >= 1, but found \"\" for params.Key",

"code":"MultipleValidationErrors","errors":[{"message":"Expected uri parameter to have length >= 1, but found \"\" for params.Bucket",

"code":"UriParameterError",

"time":"2022-02-14T01:27:48.662Z"},{"message":"Expected uri parameter to have length >= 1, but found \"\" for params.Key",

"code":"UriParameterError","time":"2022-02-14T01:27:48.662Z"}],

"time":"2022-02-14T01:27:48.662Z"
}
```
