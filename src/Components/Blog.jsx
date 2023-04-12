import React from 'react';

const Blog = () => {
    return (
        <div className='mt-16 px-48 space-y-6'>
            <div className='flex flex-col items-start'>
                <p className='text-start'><span className='font-bold'>Q:</span> When should you use context api?</p>
                <p className='text-start'><span className='font-bold'>Ans:</span> The React Context API is useful when you have data that needs to be accessed by multiple components at different levels in the component tree, but passing the data through props at each level becomes impractical. It allows you to avoid "prop drilling" and simplify your code by providing a way to share state across components without the need for complex data management techniques like Redux.</p>
            </div>
            <div className='flex flex-col items-start'>
                <p className='text-start'><span className='font-bold'>Q:</span> what is custom hook??</p>
                <p className='text-start'><span className='font-bold'>Ans:</span> A custom hook in React is a function that allows you to extract and reuse logic from your components. It's a way to encapsulate stateful logic and share it across multiple components, reducing duplication and making your code more reusable.</p>
            </div>
            <div className='flex flex-col items-start'>
                <p className='text-start'><span className='font-bold'>Q:</span> what is custom useref?</p>
                <p className='text-start'><span className='font-bold'>Ans:</span> In React, a custom useRef hook is a function that allows you to create and use a useRef instance in your components. This can be useful for preserving values between renders, such as maintaining focus on an input field, or for accessing and manipulating DOM elements directly. It can also help you to abstract away some of the complexity of working with refs in your components.</p>
            </div>
            <div className='flex flex-col items-start'>
                <p className='text-start'><span className='font-bold'>Q:</span> what is custom usememo?</p>
                <p className='text-start'><span className='font-bold'>Ans:</span> In React, a custom useMemo hook is a function that allows you to memoize a value, which means that it will only be recalculated when its dependencies change. This can be useful for optimizing performance in your components, as expensive calculations can be avoided if the input values remain the same. It can also help you to simplify your code by encapsulating complex logic in a reusable hook.</p>
            </div>
            
        </div>
    );
};

export default Blog;