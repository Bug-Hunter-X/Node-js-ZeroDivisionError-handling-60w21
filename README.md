# Node.js ZeroDivisionError Handling
This repository demonstrates an uncommon error in Node.js related to the mishandling of division by zero. The original code attempts to handle cases where either `a` or `b` is zero, but fails when both are zero, resulting in unexpected behavior. The solution provides a robust way to address this edge case.

## Bug
The `myFunction` function is intended to divide `a` by `b`. However, it incorrectly handles the case where both `a` and `b` are zero simultaneously.  It returns 0 instead of throwing an error.

## Solution
The solution revises the function to explicitly check if both `a` and `b` are zero. If so, it returns 0 while clearly indicating this as a special case. Otherwise, it handles the division. This avoids unexpected behavior.
