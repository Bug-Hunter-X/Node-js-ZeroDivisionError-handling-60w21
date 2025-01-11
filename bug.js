```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This line is problematic when a and b are both 0
  }
  return a / b; 
}
```