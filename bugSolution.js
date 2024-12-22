```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed:', count);
    // Correct: Return a cleanup function
    return () => {
      console.log('Cleaning up effect');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```