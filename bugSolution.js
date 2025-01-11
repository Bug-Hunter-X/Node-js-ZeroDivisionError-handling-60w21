```javascript
function myFunction(a, b) {
  if (a === 0 && b === 0) {
    console.warn('Both inputs are zero; returning 0.');  //added warning
    return 0; 
  } else if (a === 0 || b === 0) {
    throw new Error('Division by zero');
  }
  return a / b; 
}
```